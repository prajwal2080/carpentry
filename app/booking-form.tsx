"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  details: "",
};

export default function BookingForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setFormState(initialState);
      setStatus("success");
      setMessage(data.message ?? "Booking request sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send booking request.");
    }
  }

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="grid gap-4 rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-stone-50">
          Full name
          <input
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Jordan Lee"
            className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-50">
          Email
          <input
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="jordan@example.com"
            className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-stone-50">
          Preferred date
          <input
            name="date"
            type="date"
            required
            value={formState.date}
            onChange={(event) => updateField("date", event.target.value)}
            className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-50">
          Preferred time
          <input
            name="time"
            type="time"
            required
            value={formState.time}
            onChange={(event) => updateField("time", event.target.value)}
            className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-stone-50">
        Phone number
        <input
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="(555) 123-4567"
          className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-stone-50">
        Project type
        <select
          name="service"
          required
          value={formState.service}
          onChange={(event) => updateField("service", event.target.value)}
          className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Custom built-ins</option>
          <option>Trim and finish work</option>
          <option>Decks and outdoor upgrades</option>
          <option>Repairs and touch-ups</option>
          <option>Other</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-stone-50">
        Project details
        <textarea
          name="details"
          rows={4}
          required
          value={formState.details}
          onChange={(event) => updateField("details", event.target.value)}
          placeholder="Tell us what you want built, your budget range, and any useful notes."
          className="rounded-2xl border border-stone-200/15 bg-white/95 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/40"
        />
      </label>

      <button
        type="submit"
        disabled={status === "saving"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "saving" ? "Sending..." : "Request booking"}
      </button>

      {message ? (
        <p className={`text-sm ${status === "error" ? "text-rose-200" : "text-emerald-100"}`}>
          {message}
        </p>
      ) : null}

      <p className="text-xs leading-6 text-stone-200">
        Prefer to call? We can also schedule your consultation by phone and talk through the project directly.
      </p>
    </form>
  );
}
