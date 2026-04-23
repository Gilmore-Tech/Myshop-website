import { Check, Star, ArrowRight, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    title: "Transparent Earnings",
    body: "Track every Cedi in real-time with detailed breakdowns.",
  },
  {
    title: "Flexible Schedule",
    body: "Be your own boss. Work when you want, where you want.",
  },
  {
    title: "Verified Leads",
    body: "No more time-wasting. Connect with ready-to-pay customers.",
  },
];

export function EarnIncome() {
  return (
    <section id="earn" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-500">
              <TrendingUp className="h-3.5 w-3.5" />
              Earn More
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Turn Your Skills into{" "}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
                Steady Income
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/70 sm:text-lg">
              Join thousands of Ghanaian entrepreneurs growing their business
              with MyShop. Whether you have a car, a bike, or a toolbox, we
              provide the platform to connect you with customers who value
              quality.
            </p>

            <ul className="mt-8 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="font-semibold text-ink-900">
                      {b.title}:{" "}
                    </span>
                    <span className="text-ink-700/80">{b.body}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-900/10 transition-all hover:bg-ink-800 hover:shadow-xl"
            >
              Learn About Partner Benefits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Backdrop glow */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-200/40 via-transparent to-gold-400/30 blur-3xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950 shadow-2xl shadow-ink-900/20">
              {/* SVG illustration of an artisan/electrician at work */}
              <svg
                viewBox="0 0 400 500"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0a0e14" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5A3C" />
                    <stop offset="100%" stopColor="#6B4226" />
                  </linearGradient>
                  <linearGradient id="vest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Background glow */}
                <circle cx="200" cy="200" r="220" fill="url(#glow)" />

                {/* Vertical light beams */}
                <rect x="60" y="0" width="2" height="500" fill="white" opacity="0.04" />
                <rect x="160" y="0" width="2" height="500" fill="white" opacity="0.04" />
                <rect x="280" y="0" width="2" height="500" fill="white" opacity="0.04" />
                <rect x="350" y="0" width="2" height="500" fill="white" opacity="0.04" />

                {/* Floor */}
                <rect x="0" y="430" width="400" height="70" fill="#1a1f2e" />
                <line x1="0" y1="430" x2="400" y2="430" stroke="#10b981" strokeWidth="1" opacity="0.4" />

                {/* Person — head */}
                <circle cx="200" cy="170" r="42" fill="url(#skin)" />
                {/* Hair */}
                <path d="M158 162 Q 200 110, 242 162 Q 240 145, 200 135 Q 160 145, 158 162 Z" fill="#1a1209" />
                {/* Hard hat */}
                <path d="M150 158 Q 200 100, 250 158 L 252 168 L 148 168 Z" fill="#fbbf24" />
                <rect x="148" y="166" width="104" height="6" fill="#d97706" />
                {/* Eyes */}
                <circle cx="186" cy="172" r="2.5" fill="#0a0e14" />
                <circle cx="214" cy="172" r="2.5" fill="#0a0e14" />
                {/* Smile */}
                <path d="M188 188 Q 200 196, 212 188" stroke="#0a0e14" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Body — vest */}
                <path d="M140 220 L 260 220 L 270 360 L 130 360 Z" fill="url(#vest)" />
                {/* Reflective stripes */}
                <rect x="135" y="270" width="130" height="6" fill="#fef3c7" opacity="0.85" />
                <rect x="138" y="320" width="124" height="6" fill="#fef3c7" opacity="0.85" />
                {/* Shirt under vest */}
                <path d="M165 220 L 235 220 L 232 250 L 168 250 Z" fill="#1f2937" />

                {/* Arms */}
                <rect x="115" y="225" width="28" height="100" rx="14" fill="url(#vest)" />
                <rect x="257" y="225" width="28" height="100" rx="14" fill="url(#vest)" />
                {/* Hands */}
                <circle cx="129" cy="335" r="14" fill="url(#skin)" />
                <circle cx="271" cy="335" r="14" fill="url(#skin)" />

                {/* Tablet/clipboard in hand */}
                <rect x="240" y="295" width="60" height="80" rx="6" fill="#0a0e14" stroke="#10b981" strokeWidth="1.5" />
                <rect x="246" y="305" width="48" height="3" rx="1" fill="#10b981" opacity="0.8" />
                <rect x="246" y="313" width="36" height="3" rx="1" fill="#10b981" opacity="0.5" />
                <rect x="246" y="321" width="42" height="3" rx="1" fill="#10b981" opacity="0.5" />
                <circle cx="270" cy="350" r="6" fill="#10b981" />
                <path d="M267 350 l 2.5 2.5 l 5 -5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Pants */}
                <rect x="145" y="358" width="50" height="75" fill="#0f172a" />
                <rect x="205" y="358" width="50" height="75" fill="#0f172a" />

                {/* Boots */}
                <rect x="140" y="425" width="58" height="14" rx="3" fill="#1a1209" />
                <rect x="202" y="425" width="58" height="14" rx="3" fill="#1a1209" />

                {/* Floating tool icons */}
                <g opacity="0.5">
                  <circle cx="80" cy="120" r="18" fill="none" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M73 120 L 87 120 M 80 113 L 80 127" stroke="#10b981" strokeWidth="1.5" />
                </g>
                <g opacity="0.5">
                  <rect x="310" y="100" width="32" height="32" rx="6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                  <path d="M320 116 L 332 116 M 326 110 L 326 122" stroke="#fbbf24" strokeWidth="1.5" />
                </g>
              </svg>
            </div>

            {/* Floating testimonial card */}
            <div className="absolute -bottom-8 left-4 right-4 sm:-bottom-6 sm:left-auto sm:right-6 sm:max-w-xs">
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-2xl shadow-ink-900/15">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-base font-bold text-white">
                    KM
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-ink-900">
                      Kofi Mensah
                    </div>
                    <div className="truncate text-xs text-ink-700/70">
                      Master Electrician · Ashanti Region
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 border-t border-black/5 pt-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-ink-700">
                    5.0
                  </span>
                  <span className="text-xs text-ink-700/60">(142 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
