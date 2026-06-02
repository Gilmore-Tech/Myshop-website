import { useEffect } from "react";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Smartphone,
  Trash2,
  Clock,
  ShieldCheck,
} from "lucide-react";

const SECTIONS = [
  { id: "how-to-request", n: "1", title: "How to Request Deletion" },
  { id: "what-gets-deleted", n: "2", title: "What Gets Deleted" },
  { id: "what-we-retain", n: "3", title: "What We Retain (and Why)" },
  { id: "questions", n: "4", title: "Questions" },
];

const DELETED_ITEMS = [
  "Your profile information (name, email, phone number).",
  "Your saved locations and saved places.",
  "Your ride and booking history (other than required transaction records — see below).",
  "Your in-app chat messages.",
  "Your photo, Ghana Card/National ID images, and verification documents.",
  "Your push-notification tokens and device identifiers.",
];

const RETAINED = [
  {
    label: "Transaction records",
    period: "7 years",
    body: "Booking IDs, fares, payment receipts — required by Ghana's tax and financial-services regulations.",
  },
  {
    label: "Emergency-response recordings",
    period: "90 days",
    body: "Stored in encrypted form with access restricted to authorised admins and law enforcement (if any were captured during your trips).",
  },
  {
    label: "Dispute and incident records",
    period: "Dispute + 1 year",
    body: "Retained for the duration of the dispute plus one year after resolution (if any apply to your account).",
  },
];

export function DeleteAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const home = import.meta.env.BASE_URL;

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
          <span className="mt-6 inline-flex items-center rounded-full border border-brand-200 px-3 py-1 m-4 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Account · Data Rights
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-500 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Delete Your MyShop Account
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700/75 sm:text-lg">
            MyShop is operated by Gilmore Technologies. This page explains how
            to request deletion of your account and the data associated with it.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <Meta label="Effective Date" value="July 1, 2026" />
            <Meta label="Company" value="Gilmore Technologies" />
            <Meta label="App" value="MyShop" />
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
                  href="mailto:support@gilmoretechnologiesgh.com?subject=Delete%20my%20account"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-700"
                >
                  <Mail className="h-4 w-4" />
                  Email a deletion request
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 lg:order-1 lg:max-w-2xl">
            <Section
              id="how-to-request"
              n="1"
              title="How to Request Deletion"
            >
              <p>You can request account deletion in two ways:</p>

              <div className="mt-2 grid gap-4 sm:grid-cols-1">
                <RequestCard
                  icon={Smartphone}
                  tag="Recommended"
                  title="In the app"
                  steps={[
                    "Open MyShop.",
                    "Tap Profile (bottom-right) → Account Settings → Delete my account.",
                    "Confirm the prompt. Your account is queued for deletion immediately.",
                  ]}
                />
                <RequestCard
                  icon={Mail}
                  title="By email"
                  description={
                    <>
                      Send a message to{" "}
                      <a
                        href="mailto:support@gilmoretechnologiesgh.com?subject=Delete%20my%20account"
                        className="font-semibold text-brand-700 hover:text-brand-800"
                      >
                        support@gilmoretechnologiesgh.com
                      </a>{" "}
                      from the email address registered on your MyShop account,
                      with subject{" "}
                      <span className="font-semibold text-ink-900">
                        "Delete my account"
                      </span>
                      . We will action the request within{" "}
                      <span className="font-semibold text-ink-900">
                        7 business days
                      </span>
                      .
                    </>
                  }
                />
              </div>
            </Section>

            <Section
              id="what-gets-deleted"
              n="2"
              title="What Gets Deleted"
            >
              <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3">
                <Trash2 className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                <p className="text-sm font-semibold text-brand-800">
                  Within 90 days of your request, we permanently delete:
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {DELETED_ITEMS.map((item, i) => (
                  <Bullet key={i}>{item}</Bullet>
                ))}
              </ul>
            </Section>

            <Section
              id="what-we-retain"
              n="3"
              title="What We Retain (and Why)"
            >
              <p>
                We retain the following for the periods listed, then permanently
                delete:
              </p>
              <dl className="mt-2 space-y-4">
                {RETAINED.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-sm font-semibold text-ink-900">
                        {item.label}
                      </dt>
                      <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                        <Clock className="h-3 w-3" />
                        {item.period}
                      </span>
                    </div>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-700/75">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 inline-flex items-start gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 text-sm text-ink-700/85">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                After these retention windows expire, the residual records are
                permanently purged.
              </p>
            </Section>

            <Section id="questions" n="4" title="Questions">
              <p>
                Email{" "}
                <a
                  href="mailto:support@gilmoretechnologiesgh.com"
                  className="font-semibold text-brand-700 hover:text-brand-800"
                >
                  support@gilmoretechnologiesgh.com
                </a>{" "}
                or call us via the in-app support flow.
              </p>
            </Section>

            {/* Contact card */}
            <div className="mt-16 rounded-2xl border border-black/5 bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                Contact
              </h3>
              <p className="mt-3 text-sm text-ink-700/75">
                Need to reach us about your account or data?
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
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-700" />
                  <span className="text-sm text-ink-700/85">
                    Gilmore Technologies, Kumasi, Ashanti Region, Ghana
                  </span>
                </div>
              </div>
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
      <dd className="mt-0.5 text-sm font-semibold text-ink-900">{value}</dd>
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
      />
      <span className="text-sm leading-relaxed text-ink-700/85 sm:text-base">
        {children}
      </span>
    </li>
  );
}

function RequestCard({
  icon: Icon,
  tag,
  title,
  steps,
  description,
}: {
  icon: typeof Mail;
  tag?: string;
  title: string;
  steps?: string[];
  description?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
          {tag ? (
            <span className="inline-flex items-center rounded-full bg-brand-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              {tag}
            </span>
          ) : null}
        </div>
      </div>
      {steps ? (
        <ol className="mt-4 space-y-2.5">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-zinc-100 text-[11px] font-semibold text-ink-700">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-ink-700/85">
                {s}
              </span>
            </li>
          ))}
        </ol>
      ) : null}
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-700/85">
          {description}
        </p>
      ) : null}
    </div>
  );
}
