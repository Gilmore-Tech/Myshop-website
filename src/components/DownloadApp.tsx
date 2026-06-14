import { Star, Download } from "lucide-react";
import logoUrl from "../assets/logo.png";
import { MYSHOP_APPS, MYSHOP_SCREENSHOT_URL } from "../siteConfig";

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.05 20.28c-.98.95-2.05.86-3.08.42-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.42C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
      fill="#34d399"
    />
    <path
      d="M14.5 12.71l2.97-2.97-13.86-7.93a.998.998 0 00-.001 0L14.5 12.71z"
      fill="#fbbf24"
    />
    <path
      d="M14.5 12.71l-10.89 9.48L17.47 14.27 14.5 12.71z"
      fill="#ef4444"
    />
    <path
      d="M20.16 10.81l-2.69-1.54-3.2 3.2 3.2 3.2 2.69-1.54a1.5 1.5 0 000-2.62z"
      fill="#3b82f6"
    />
  </svg>
);

function StoreBadge({
  icon: Icon,
  label,
  store,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  store: string;
  href: string;
}) {
  const external = href !== "#";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur transition-all hover:border-white/30 hover:bg-white/15"
    >
      <Icon className="h-7 w-7 text-white" />
      <div className="text-left leading-tight">
        <div className="text-[11px] font-medium uppercase tracking-wider text-white/70">
          {label}
        </div>
        <div className="text-base font-semibold text-white">{store}</div>
      </div>
    </a>
  );
}

export function DownloadApp() {
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-32"
    >
      {/* Decorative gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_30%_20%,rgba(245,166,35,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: Copy + badges */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/85 backdrop-blur">
              <Download className="h-3.5 w-3.5 text-brand-300" />
              Available Now
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Take MyShop{" "}
              <span className="bg-gradient-to-r from-brand-200 via-brand-400 to-brand-300 bg-clip-text text-transparent">
                wherever you go.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Book rides, find verified artisans, track jobs in real time, and
              get paid instantly via MoMo — all from one beautifully simple app.
            </p>

            {/* Store badges — one group per app (Customer / Provider) */}
            <div className="mt-8 space-y-6">
              {MYSHOP_APPS.map((app) => (
                <div key={app.label}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-white">
                      {app.label}
                    </span>
                    <span className="text-xs text-white/55">{app.tagline}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <StoreBadge
                      icon={AppleIcon}
                      label="Download on the"
                      store="App Store"
                      href={app.appStoreUrl}
                    />
                    <StoreBadge
                      icon={PlayIcon}
                      label="Get it on"
                      store="Google Play"
                      href={app.playStoreUrl}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Ratings strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <div className="text-lg font-bold">20+</div>
                <div className="text-xs text-white/55">Play Store downloads</div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <div className="text-lg font-bold">iOS &amp; Android</div>
                <div className="text-xs text-white/55">Available on both stores</div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <div className="text-lg font-bold">Just launched</div>
                <div className="text-xs text-white/55">New &amp; growing fast</div>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-[3rem] bg-gradient-to-tr from-brand-500/30 via-transparent to-gold-400/20 blur-3xl"
            />

            {/* Device frame */}
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="rounded-[2.5rem] border border-white/10 bg-ink-900 p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                {/* Inner screen */}
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-zinc-50">
                  {MYSHOP_SCREENSHOT_URL ? (
                    <img
                      src={MYSHOP_SCREENSHOT_URL}
                      alt="MyShop app screenshot"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                  <>
                  {/* Notch */}
                  <div className="absolute left-1/2 top-3 z-10 flex h-5 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-ink-900">
                    <div className="h-1.5 w-1.5 rounded-full bg-ink-700" />
                  </div>

                  {/* App content */}
                  <div className="flex h-full flex-col p-5 pt-12">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoUrl}
                          alt=""
                          className="h-8 w-8 rounded-lg"
                        />
                        <div>
                          <div className="text-[10px] text-ink-700/60">
                            Welcome
                          </div>
                          <div className="text-sm font-semibold text-ink-900">
                            Akosua
                          </div>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700" />
                    </div>

                    {/* Service tabs */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-ink-900 p-3 text-white">
                        <div className="text-[10px] font-medium uppercase tracking-wider text-white/60">
                          Quick
                        </div>
                        <div className="mt-0.5 text-sm font-bold">
                          Book a Ride
                        </div>
                      </div>
                      <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
                        <div className="text-[10px] font-medium uppercase tracking-wider text-ink-700/60">
                          Hire
                        </div>
                        <div className="mt-0.5 text-sm font-bold text-ink-900">
                          Find Artisan
                        </div>
                      </div>
                    </div>

                    {/* Map preview */}
                    <div className="relative mt-4 h-28 overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 via-brand-50 to-amber-50">
                      <svg
                        viewBox="0 0 200 120"
                        className="absolute inset-0 h-full w-full"
                        aria-hidden
                      >
                        <path
                          d="M0 80 Q 50 40, 100 70 T 200 50"
                          stroke="#f5a623"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 80 Q 50 40, 100 70 T 200 50"
                          stroke="#f5a623"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0.2"
                        />
                        <circle cx="20" cy="78" r="4" fill="#1e2429" />
                        <circle
                          cx="180"
                          cy="52"
                          r="5"
                          fill="#f5a623"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[9px] font-semibold text-ink-900 shadow-sm">
                        ETA · 4 min
                      </div>
                    </div>

                    {/* Recent providers */}
                    <div className="mt-4 space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-700/60">
                        Top Rated Nearby
                      </div>
                      {[
                        { n: "Yaw O.", r: "Plumber", s: "4.9" },
                        { n: "Ama K.", r: "Tailor", s: "5.0" },
                      ].map((p) => (
                        <div
                          key={p.n}
                          className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 ring-1 ring-black/5"
                        >
                          <div className="h-8 w-8 flex-none rounded-full bg-gradient-to-br from-gold-400 to-brand-500" />
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-xs font-semibold text-ink-900">
                              {p.n}
                            </div>
                            <div className="truncate text-[10px] text-ink-700/60">
                              {p.r}
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 text-[10px] font-semibold text-ink-900">
                            <Star className="h-2.5 w-2.5 fill-gold-400 text-gold-400" />
                            {p.s}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom nav */}
                    <div className="mt-auto flex items-center justify-around rounded-2xl bg-ink-900 px-2 py-2.5">
                      {["Home", "Trips", "Wallet", "Me"].map((t, i) => (
                        <div
                          key={t}
                          className={`text-[10px] font-medium ${
                            i === 0 ? "text-brand-300" : "text-white/50"
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  </>
                  )}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -left-10 top-20 hidden w-44 rotate-[-6deg] rounded-2xl border border-white/10 bg-ink-900/90 p-3 shadow-2xl backdrop-blur sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Download className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold text-white">
                      Driver arriving
                    </div>
                    <div className="truncate text-[9px] text-white/55">
                      Black Toyota · GH-1234
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating payment card */}
              <div className="absolute -right-8 bottom-16 hidden w-40 rotate-[6deg] rounded-2xl border border-white/10 bg-white p-3 shadow-2xl sm:block">
                <div className="text-[9px] font-medium uppercase tracking-wider text-ink-700/60">
                  Paid via MoMo
                </div>
                <div className="mt-0.5 text-base font-bold text-ink-900">
                  ₵ 24.00
                </div>
                <div className="mt-1 text-[9px] text-brand-700">
                  ✓ Released to provider
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
