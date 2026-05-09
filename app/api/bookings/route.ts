import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const date = String(body.date ?? "").trim();
    const time = String(body.time ?? "").trim();
    const service = String(body.service ?? "").trim();
    const details = String(body.details ?? "").trim();
    const phone = String(body.phone ?? "").trim();

    if (!name || !email || !date || !time || !service || !details) {
      return NextResponse.json(
        { message: "Please fill out all required fields." },
        { status: 400 },
      );
    }

    try {
      const database = await getDatabase();
      const result = await database.collection("bookings").insertOne({
        name,
        email,
        phone,
        date,
        time,
        service,
        details,
        status: "new",
        createdAt: new Date(),
      });

      return NextResponse.json({
        message: "Booking request saved.",
        id: result.insertedId.toString(),
      });
    } catch (dbError) {
      // If MongoDB is unreachable (DNS/SRV, network, auth), fall back to local storage
      console.error("Booking DB insert failed, falling back to file storage", dbError);

      try {
        const fallbackDir = path.join(process.cwd(), "data");
        await fs.mkdir(fallbackDir, { recursive: true });
        const filePath = path.join(fallbackDir, "bookings-fallback.json");

        let list: any[] = [];
        try {
          const existing = await fs.readFile(filePath, "utf8");
          list = JSON.parse(existing || "[]");
        } catch (readErr) {
          // ignore read errors (file may not exist)
        }

        const entry = {
          name,
          email,
          phone,
          date,
          time,
          service,
          details,
          status: "new_offline",
          createdAt: new Date().toISOString(),
        };

        list.push(entry);
        await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf8");

        return NextResponse.json({ message: "Booking saved to fallback storage.", fallback: true }, { status: 202 });
      } catch (fileErr) {
        console.error("Fallback booking save failed", fileErr);
        const msg = process.env.NODE_ENV === "production" ? "Unable to save booking request right now." : (fileErr instanceof Error ? fileErr.message : String(fileErr));
        return NextResponse.json({ message: msg }, { status: 500 });
      }
    }
  } catch (error) {
    console.error("Booking submission failed", error);
    const msg =
      process.env.NODE_ENV === "production"
        ? "Unable to save booking request right now."
        : (error instanceof Error ? error.message : String(error));

    return NextResponse.json({ message: msg }, { status: 500 });
  }
}

export async function GET() {
  // Health check: verifies we can reach the database without modifying data.
  try {
    const db = await getDatabase();
    // ping command is supported on MongoDB
    const res = await db.command({ ping: 1 });
    return NextResponse.json({ ok: true, pong: res });
  } catch (err) {
    console.error("Booking GET health check failed", err);
    // If DB ping fails, check if fallback storage exists and report that instead of a hard fail
    try {
      const fallbackPath = path.join(process.cwd(), "data", "bookings-fallback.json");
      const content = await fs.readFile(fallbackPath, "utf8");
      const list = JSON.parse(content || "[]");
      return NextResponse.json({ ok: false, fallback: true, fallbackCount: list.length, error: err instanceof Error ? err.message : String(err) }, { status: 200 });
    } catch (fsErr) {
      const msg = process.env.NODE_ENV === "production" ? "unavailable" : (err instanceof Error ? err.message : String(err));
      return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
  }
}
