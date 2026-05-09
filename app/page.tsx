import BookingForm from "./booking-form";

const services = [
  {
    title: "Custom built-ins",
    description:
      "Kitchens, mudrooms, shelving, and storage designed around how your home actually works.",
  },
  {
    title: "Trim and finish work",
    description:
      "Crisp crown molding, baseboards, casing, and detail work that makes every room feel complete.",
  },
  {
    title: "Decks and outdoor upgrades",
    description:
      "Durable outdoor structures, repair work, and refinishing that stand up to weather and daily use.",
  },
];

const benefits = [
  "Free initial consultation",
  "Clear estimates and timelines",
  "Clean, respectful job sites",
  "High-quality hardwood and finish options",
];

const process = [
  {
    step: "01",
    title: "Share your vision",
    description:
      "Tell us what you want to build, repair, or upgrade. We’ll talk through style, materials, and budget.",
  },
  {
    step: "02",
    title: "Get a detailed plan",
    description:
      "We measure the space, refine the scope, and provide a clear proposal before any work begins.",
  },
  {
    step: "03",
    title: "Enjoy the finish",
    description:
      "We build with care, keep the site tidy, and leave you with work that feels solid and finished.",
  },
];

const projects = [
  "Walnut media wall with hidden storage",
  "White oak stair handrail and paneling",
  "Custom pantry with adjustable shelving",
  "Covered patio deck with built-in seating",
];

const testimonials = [
  {
    quote:
      "They turned a plain corner into the best part of the house. The craftsmanship was excellent and the communication was easy.",
    name: "Homeowner",
    detail: "Custom built-in project",
  },
  {
    quote:
      "The trim work was extremely precise. Everything lines up cleanly and the finish looks premium.",
    name: "Property manager",
    detail: "Interior finish package",
  },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8f3ea_0%,#fbf8f2_45%,#f5efe6_100%)] text-stone-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,124,70,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(91,64,35,0.16),_transparent_30%),linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.12))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-stone-300/40 blur-3xl" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-stone-900/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-900/70">
              Northline Carpentry
            </p>
            <p className="mt-2 text-sm text-stone-600">
              Crafted woodwork for homes, businesses, and outdoor spaces.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-stone-900/15 bg-white/70 px-4 py-2 text-sm font-medium text-stone-900 shadow-sm backdrop-blur transition hover:border-stone-900/25 hover:bg-white"
          >
            Request a quote
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/70 px-4 py-2 text-sm text-stone-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-700" />
              Serving homeowners who want work built to last
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Beautiful carpentry, built with precision and care.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              From custom cabinets and trim to decks and repairs, we design and build
              warm, durable spaces that feel intentional from the first cut to the final finish.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
              >
                Book a visit
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-stone-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900/25 hover:bg-white"
              >
                View recent work
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["15+", "years of experience"],
                ["100%", "custom estimates"],
                ["Local", "trusted craftsmanship"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-stone-900/10 bg-white/75 p-5 shadow-[0_12px_30px_rgba(68,54,39,0.08)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold tracking-tight text-stone-950">{value}</p>
                  <p className="mt-1 text-sm text-stone-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(255,247,237,0.7))] shadow-[0_24px_80px_rgba(88,64,35,0.16)]" />
            <div className="grid gap-4 rounded-[2rem] border border-stone-900/10 bg-white/70 p-5 shadow-[0_24px_80px_rgba(88,64,35,0.12)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-stone-900/10 bg-[linear-gradient(160deg,#3c2a1f_0%,#6e4b2f_100%)] p-6 text-stone-50">
                <p className="text-sm uppercase tracking-[0.32em] text-amber-100/80">Signature approach</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Thoughtful details. Solid joinery. Lasting results.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-stone-200">
                  We focus on the small decisions that make a big difference: square lines,
                  strong materials, and finishes that look good long after the job is done.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-stone-900/10 bg-stone-50 p-4 text-sm font-medium text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-900/10 bg-white/45 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-stone-900/10 bg-white/80 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-900/70">What we do</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            The right mix of utility, craftsmanship, and clean design.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-stone-700">
            Whether you need a custom build, a repair that blends in, or a more polished
            finish for an existing space, we bring a practical approach and a detail-first mindset.
          </p>

          <div className="mt-8 rounded-3xl border border-stone-900/10 bg-white/80 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">Best for</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Custom shelves and storage",
                "Interior trim and paneling",
                "Kitchen and pantry upgrades",
                "Deck repairs and refinishing",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-stone-50 px-4 py-3 text-sm text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2" id="projects">
          {projects.map((project, index) => (
            <article
              key={project}
              className={`rounded-[2rem] border border-stone-900/10 p-6 shadow-sm ${
                index % 2 === 0 ? "bg-[linear-gradient(180deg,#fffaf3,#f4e7d3)]" : "bg-white/80"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Project {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-stone-950">{project}</h3>
              <div className="mt-6 h-40 rounded-[1.5rem] border border-stone-900/10 bg-[linear-gradient(160deg,rgba(59,37,20,0.92),rgba(159,118,77,0.82))]" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_60px_rgba(31,18,7,0.25)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">A simple path from idea to install.</h2>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Clear communication keeps the project moving and makes sure you know what to expect at every stage.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] border border-stone-900/10 bg-white/80 p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.3em] text-amber-900/70">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-stone-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[2rem] border border-stone-900/10 bg-white/80 p-8 shadow-sm">
              <blockquote className="text-lg leading-8 text-stone-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-stone-950">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="grid gap-6 rounded-[2.25rem] border border-stone-900/10 bg-[linear-gradient(135deg,#3a271a_0%,#604128_55%,#8a5c34_100%)] p-8 text-stone-50 shadow-[0_28px_80px_rgba(54,33,16,0.32)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100/80">Book a consultation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Pick a date and time that works, and we’ll confirm the details.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-200">
              Use the form to request a consultation for built-ins, trim, decks, repairs, or a custom
              project. We’ll follow up by phone or email to confirm availability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/75">Phone</p>
                <a className="mt-2 block text-lg font-semibold text-stone-50" href="tel:+10000000000">
                  (000) 000-0000
                </a>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/75">Email</p>
                <a className="mt-2 block text-lg font-semibold text-stone-50" href="mailto:hello@northlinecarpentry.com">
                  hello@northlinecarpentry.com
                </a>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/75">Service area</p>
                <p className="mt-2 text-lg font-semibold text-stone-50">Your city and surrounding neighborhoods</p>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
