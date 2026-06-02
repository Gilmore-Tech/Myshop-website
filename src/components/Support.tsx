import { useEffect } from "react";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  KeyRound,
  Wallet,
  BadgeCheck,
  PackageSearch,
  FileText,
  ShieldCheck,
} from "lucide-react";

const SECTIONS = [
  { id: "contact", n: "1", title: "Contact Us" },
  { id: "common-topics", n: "2", title: "Common Topics" },
  { id: "legal", n: "3", title: "Legal" },
];

const CONTACT = [
  {
    icon: Mail,
    label: "Email",
    value: "support@gilmoretechnologiesgh.com",
    href: "mailto:support@gilmoretechnologiesgh.com",
    note: "Response within 24 hours (Mon–Sat)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+233 540 275 053",
    href: "https://wa.me/233540275053",
    note: "Mon–Fri, 9am–5pm GMT",
  },
];

const TOPICS = [
  {
    icon: KeyRound,
    title: "Sign-in / OTP issues",
    body: "Make sure your phone number is in international format (+233…) and your network signal is strong.",
  },
  {
    icon: Wallet,
    title: "Payout not received",
    body: "Payouts run nightly at 6 PM GMT. If it's been more than 24h, email support with your driver/artisan ID.",
  },
  {
    icon: BadgeCheck,
    title: "Verification rejected",
    body: "Re-upload clear photos of your Ghana Card and selfie. Avoid glare and dim lighting.",
  },
  {
    icon: PackageSearch,
    title: "Lost or stolen item",
    body: "Use the in-app Report Item Lost flow on the trip detail screen.",
  },
];

export function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const home = import.meta.env.BASE_URL;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <article className="relative bg-white">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-brand-50/60 via-white to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <a
            href={home}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </a>
          <span className="mt-6 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            MyShop Provider · Support
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            How can we help?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700/75 sm:text-lg">
            Need help with the MyShop Provider app? We're here. Reach our team
            below or browse common topics for a quick answer.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <Meta label="Email" value="support@gilmoretechnologiesgh.com" />
            <Meta label="WhatsApp" value="+233 540 275 053" />
            <Meta label="Hours" value="Mon–Sat" />
          </dl>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Table of contents */}
          <aside className="lg:col-span-4 lg:col-start-9 lg:order-2">
            <div className="sticky top-24 rounded-2xl border border-black/5 bg-zinc-50 p-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-ink-900">
                Contents
              </h2>
              <ol className="mt-4 space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex gap-3 text-sm text-ink-700/75 transition-colors hover:text-ink-900"
                    >
                      <span className="w-5 flex-none text-ink-700/45 group-hover:text-brand-700">
                        {s.n}.
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Need help right now?
                </p>
                <a
                  href="mailto:support@gilmoretechnologiesgh.com"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-700"
                >
                  <Mail className="h-4 w-4" />
                  Email support
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 lg:order-1 lg:max-w-2xl">
            <Section id="contact" n="1" title="Contact Us">
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                  >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-700/60">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                      {c.value}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-700/70">
                      <Clock className="h-3 w-3 text-brand-700" />
                      {c.note}
                    </p>
                  </a>
                ))}
              </div>
            </Section>

            <Section id="common-topics" n="2" title="Common Topics">
              <div className="grid gap-4">
                {TOPICS.map((t) => (
                  <div
                    key={t.title}
                    className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink-900">
                        {t.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-700/75">
                        {t.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="legal" n="3" title="Legal">
              <div className="grid gap-4 sm:grid-cols-2">
                <LegalLink
                  href={`${base}/privacy`}
                  title="Privacy Policy"
                  note="How we collect and protect your data."
                />
                <LegalLink
                  href={`${base}/terms`}
                  title="Terms of Service"
                  note="The rules for using MyShop."
                />
              </div>
            </Section>

            {/* Contact card */}
            <div className="mt-16 rounded-2xl border border-black/5 bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                Contact
              </h3>
              <p className="mt-3 text-sm text-ink-700/75">
                Still stuck? Reach the MyShop Provider support team.
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                  <a
                    href="mailto:support@gilmoretechnologiesgh.com"
                    className="text-sm text-ink-900 hover:text-brand-700"
                  >
                    support@gilmoretechnologiesgh.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                  <a
                    href="https://wa.me/233540275053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-900 hover:text-brand-700"
                  >
                    +233 540 275 053 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                  <span className="text-sm text-ink-700/85">
                    Gilmore Technologies, Kumasi, Ashanti Region, Ghana
                  </span>
                </div>
              </div>
              <p className="mt-6 inline-flex items-start gap-2 text-xs text-ink-700/60">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-none text-brand-700" />
                © {new Date().getFullYear()} Gilmore Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white/80 px-4 py-3 backdrop-blur">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-700/60">
        {label}
      </dt>
      <dd className="mt-0.5 truncate text-sm font-semibold text-ink-900">
        {value}
      </dd>
    </div>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-black/5 py-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-semibold text-brand-700">{n}.</span>
        <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-700/85">
        {children}
      </div>
    </section>
  );
}

function LegalLink({
  href,
  title,
  note,
}: {
  href: string;
  title: string;
  note: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
    >
      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <FileText className="h-4 w-4" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-ink-900 group-hover:text-brand-700">
          {title}
        </h3>
        <p className="mt-1 text-sm text-ink-700/75">{note}</p>
      </div>
    </a>
  );
}
