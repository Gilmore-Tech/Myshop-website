import { ArrowRight, ShieldCheck, BadgeCheck, Wallet } from "lucide-react";

const TRUST = [
  { icon: ShieldCheck, label: "Verified KYC" },
  { icon: BadgeCheck, label: "Police Checked" },
  { icon: Wallet, label: "Instant MoMo Payouts" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Dark overlay so text and gradients keep contrast */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950"
      />
      {/* Decorative gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.35),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
          Empowering Ghana's Workforce
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Reliable Rides.{" "}
          <span className="block bg-gradient-to-r from-brand-300 via-brand-400 to-emerald-300 bg-clip-text text-transparent">
            Verified Artisans.
          </span>
          <span className="block">One Platform.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Ghana's first integrated ride-hailing and artisan marketplace —
          purpose-built for safety, speed, and economic growth.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 sm:w-auto"
          >
            Join as Provider
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-lg shadow-brand-500/10 transition-all hover:bg-brand-50 hover:shadow-brand-500/20 sm:w-auto"
          >
            Get a Ride
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/10"
            >
              <Icon className="h-3.5 w-3.5 text-brand-300" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-20 max-w-5xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-4">
          {[
            { v: "2,500+", l: "Verified Pros" },
            { v: "48", l: "Ghana Cities" },
            { v: "4.9★", l: "Avg. Rating" },
            { v: "<5min", l: "Match Time" },
          ].map((s) => (
            <div key={s.l} className="bg-ink-950/40 p-5 text-center">
              <div className="text-2xl font-bold tracking-tight text-white">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
