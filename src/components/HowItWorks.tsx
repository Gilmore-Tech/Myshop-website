import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Select Service",
    body: "Choose between a quick ride or browse our marketplace for verified plumbers, electricians, or tailors.",
  },
  {
    n: "02",
    title: "Get Matched",
    body: "Our algorithm connects you with the nearest top-rated professional. See upfront pricing and estimated time.",
  },
  {
    n: "03",
    title: "Done & Dusted",
    body: "Complete the transaction with a single tap. Payments are released instantly via MoMo after your approval.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Getting Started is Simple"
          description="Whether you're booking or providing, we've streamlined the process for maximum efficiency."
        />

        <div className="relative mt-20">
          {/* Connecting dotted line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-ink-900/15 lg:block"
            style={{ marginLeft: "16.66%", marginRight: "16.66%" }}
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-lg shadow-ink-900/20 ring-8 ring-zinc-50">
                  <span className="text-base font-bold tracking-wider">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-700/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#earn"
            className="group inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-black/20 hover:shadow-md"
          >
            View Detailed Flow
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
