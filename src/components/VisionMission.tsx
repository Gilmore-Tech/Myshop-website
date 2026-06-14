import { Eye, Target } from "lucide-react";
import { VISION, MISSION } from "../siteConfig";

const CARDS = [
  {
    icon: Eye,
    label: "Our Vision",
    body: VISION,
    accent: "from-brand-400 to-brand-600",
  },
  {
    icon: Target,
    label: "Our Mission",
    body: MISSION,
    accent: "from-gold-400 to-gold-500",
  },
];

export function VisionMission() {
  return (
    <section id="vision" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-700/55">
            What Drives Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Vision &amp; Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700/70 sm:text-lg">
            The purpose behind everything we build at Gilmore Technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {CARDS.map(({ icon: Icon, label, body, accent }) => (
            <article
              key={label}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5 sm:p-10"
            >
              <div
                aria-hidden
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-[0.08] blur-2xl transition-opacity group-hover:opacity-20`}
              />
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/5`}
              >
                <Icon className="h-7 w-7" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink-900">{label}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-700/80">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
