import {
  Fingerprint,
  Headphones,
  MapPin,
  ShieldAlert,
  PhoneOff,
  Siren,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    icon: Fingerprint,
    title: "Smile ID",
    sub: "Biometric Identity Verification",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    sub: "Dedicated Incident Response",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    sub: "Real-time GPS Monitoring",
  },
  {
    icon: ShieldAlert,
    title: "Police Flag",
    sub: "Automated Background Checks",
  },
];

const FEATURES = [
  {
    icon: PhoneOff,
    title: "Phone Masking",
    body: "Your personal number is never shared with providers.",
  },
  {
    icon: Siren,
    title: "Emergency SOS",
    body: "Instant alerts to local authorities and our 24/7 command center.",
  },
];

export function Safety() {
  return (
    <section
      id="safety"
      className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute -right-32 top-12 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Pillar grid */}
          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-100 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold text-ink-900">
                  {title}
                </div>
                <div className="mt-1 text-xs text-ink-700/65">{sub}</div>
              </div>
            ))}
          </div>

          {/* Right: Copy */}
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Trust & Safety
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Uncompromising Safety
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/70 sm:text-lg">
              Your safety is our north star. We've built an industry-leading
              security framework in partnership with Ghana Police and global
              identity leaders to ensure every ride and every home visit is
              secure.
            </p>

            <div className="mt-8 space-y-4">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                    <Icon className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink-900">{title}</div>
                    <div className="text-sm text-ink-700/70">{body}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Read our full Safety Commitment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
