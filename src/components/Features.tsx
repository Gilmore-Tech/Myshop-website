import { Zap, ShieldCheck, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    body: "Get a ride or find a professional artisan in minutes. Our real-time matching system prioritizes proximity and rating.",
    accent: "from-brand-400 to-brand-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Pros Only",
    body: "Every provider undergoes rigorous Smile Identity KYC and Ghana Police background checks before going live.",
    accent: "from-sky-400 to-sky-600",
  },
  {
    icon: Lock,
    title: "Escrow Payments",
    body: "Your money stays safe. We hold payments in escrow until the job is completed and you're 100% satisfied.",
    accent: "from-gold-400 to-gold-500",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why MyShop"
          title="One platform. Endless possibilities."
          description="We've combined the best of logistics and professional services into a single, secure ecosystem."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-black/10 hover:shadow-xl hover:shadow-ink-900/5"
            >
              <div
                aria-hidden
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-[0.07] blur-2xl transition-opacity group-hover:opacity-15`}
              />
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/5`}
              >
                <Icon className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700/70">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
