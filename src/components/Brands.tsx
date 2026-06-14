import { ArrowRight, Hammer, Car } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const BRANDS = [
  {
    icon: Hammer,
    name: "MyShop",
    category: "Artisan Services",
    body: "An on-demand marketplace connecting customers with verified, background-checked artisans — plumbers, electricians, tailors, cleaners and more — with secure escrow payments.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    accent: "from-brand-500 to-brand-700",
    href: "#download",
    cta: "Get the MyShop app",
  },
  {
    icon: Car,
    name: "Akwaaba",
    category: "Ride-Hailing",
    body: "Safe, reliable ride-hailing built for Ghana — vetted drivers, transparent pricing, and instant mobile-money payments that get people and communities moving.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    accent: "from-gold-400 to-gold-500",
    href: "#contact",
    cta: "Learn more",
  },
];

export function Brands() {
  return (
    <section id="brands" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Brands"
          title="Homegrown technology, real impact"
          description="Two products solving everyday problems for Ghanaians — with more on the way."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {BRANDS.map((b) => (
            <article
              key={b.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={b.image}
                  alt={`${b.name} — ${b.category}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div
                  className={`absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${b.accent} text-white shadow-lg`}
                >
                  <b.icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink-900">{b.name}</h3>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-700">
                    {b.category}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700/75">
                  {b.body}
                </p>
                <a
                  href={b.href}
                  className="group/cta mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  {b.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
