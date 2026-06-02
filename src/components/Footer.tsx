import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.81l-4.78-6.24L5.27 22H2.5l7-8L1.5 2h6.99l4.32 5.71L18.244 2zm-1.19 18.4h1.69L7.04 3.49H5.23L17.054 20.4z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

type Link = { label: string; href: string };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const PRIVACY_HREF = `${BASE}/privacy`;
const TERMS_HREF = `${BASE}/terms`;
const DELETE_ACCOUNT_HREF = `${BASE}/delete-account`;
const SUPPORT_HREF = `${BASE}/support`;

const COLUMNS: { title: string; links: Link[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Services", href: "#features" },
      { label: "Safety", href: "#safety" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Join Us",
    links: [
      { label: "Become a Driver", href: "#earn" },
      { label: "Become an Artisan", href: "#earn" },
      { label: "Fleet Partners", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: SUPPORT_HREF },
      { label: "Contact Us", href: SUPPORT_HREF },
      { label: "Privacy Policy", href: PRIVACY_HREF },
      { label: "Terms of Service", href: TERMS_HREF },
      { label: "Delete Account", href: DELETE_ACCOUNT_HREF },
    ],
  },
];

const META = [
  { icon: MapPin, label: "Accra, Ghana" },
  { icon: Mail, label: "support@gilmoretechnologiesgh.com" },
  { icon: Phone, label: "+233 30 123 4567" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-black/5 bg-zinc-50"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-700/70">
              Ghana's leading multi-service platform. Connecting communities
              through reliable transportation and expert artisan services.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink-700/75 transition-colors hover:text-ink-900"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-black/5 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-ink-700/60">
            © {new Date().getFullYear()} MyShop — Ride-Hailing & Artisan
            Marketplace. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-700/70">
            {META.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-brand-700" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
