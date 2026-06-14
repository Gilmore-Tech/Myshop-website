import { useEffect } from "react";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

const SECTIONS = [
  { id: "introduction", n: "1", title: "Introduction" },
  { id: "information-we-collect", n: "2", title: "Information We Collect" },
  { id: "how-we-use", n: "3", title: "How We Use Your Information" },
  { id: "how-we-share", n: "4", title: "How We Share Information" },
  { id: "retention-security", n: "5", title: "Data Retention & Security" },
  { id: "your-rights", n: "6", title: "Your Rights" },
  { id: "childrens-privacy", n: "7", title: "Children's Privacy" },
  { id: "location", n: "8", title: "Location Permissions" },
  { id: "changes", n: "9", title: "Changes to This Policy" },
  { id: "dpc", n: "10", title: "Contact the Data Protection Commission" },
];

const COLLECT = [
  {
    label: "Account data",
    body: "Name, phone number, email, profile photo, Ghana Card/National ID for drivers/artisans during regional office registration.",
  },
  {
    label: "Location data",
    body: "Real-time GPS location to match riders with drivers, show nearby artisans, calculate fares, and for safety/trip tracking. Location is collected only when you use the app and have granted permission.",
  },
  {
    label: "Service data",
    body: "Ride details, service bookings, timestamps, pickup/drop-off points, job type, ratings, reviews, and communications within the app.",
  },
  {
    label: "Payment data",
    body: "Mobile money numbers, transaction IDs. We do not store full mobile money PINs. Card payments are processed by PCI-DSS compliant partners.",
  },
  {
    label: "Device data",
    body: "Device model, iOS version, playstore version, app version, IP address, crash logs for security and improving service.",
  },
  {
    label: "Verification data for drivers/artisans",
    body: "Driver's license, vehicle registration, artisan certificates, guarantor details, and biometric photo taken at MyShop regional offices.",
  },
];

const USE = [
  "Provide and operate MyShop services: match users with drivers/artisans, process bookings, payments, and support.",
  "Safety & verification: vet drivers and artisans at regional offices to meet our goal of creating 100,000+ safe, direct jobs for Ghanaian youth.",
  "Improve service: analyze usage to fix bugs, prevent fraud, and add features.",
  "Communication: send trip updates, booking confirmations, security alerts, and marketing with your consent.",
  "Legal compliance: meet requirements from NCA, DVLA, and Ghana's Data Protection Commission.",
];

const SHARE = [
  {
    label: "With drivers/artisans",
    body: "We share your first name, pickup/dropoff location, and phone number to complete the service.",
  },
  {
    label: "With users",
    body: "Drivers/artisans' name, photo, vehicle details, ratings, and job completion history are shown for transparency.",
  },
  {
    label: "Service providers",
    body: "Payment processors, map services, SMS providers, and cloud hosting who are contractually bound to protect your data.",
  },
  {
    label: "Legal",
    body: "If required by Ghanaian law, court order, or to protect rights/safety.",
  },
];

const RIGHTS = [
  "Access the personal data we hold about you.",
  "Correct inaccurate data.",
  "Withdraw consent and delete your account.",
  "Object to marketing communications.",
];

export function PrivacyPolicy() {
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
          <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink-700/55">
            Legal · Version 1.0.0
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700/75 sm:text-lg">
            How Gilmore Technologies collects, uses, and protects your data on
            MyShop — Ghana's ride-hailing and verified artisan marketplace.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <Meta label="Effective Date" value="April 14, 2026" />
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
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 lg:order-1 lg:max-w-2xl">
            <Section
              id="introduction"
              n="1"
              title="Introduction"
            >
              <p>
                Gilmore Technologies ("we") operates MyShop, a Ghanaian mobile
                platform combining ride-hailing "Akwaaba" and an artisan
                services marketplace. MyShop connects users with commercial
                private drivers and skilled artisans including towing car
                services, electricians, mechanics, seamstresses, painters,
                masons, carpenters, plumbers, satellite/Dish TV installers, and
                electronics repair technicians.
              </p>
              <p>
                We are committed to protecting your privacy. This Policy
                explains what data we collect, how we use it, and your rights
                under Ghana's Data Protection Act, 2012 (Act 843).
              </p>
            </Section>

            <Section
              id="information-we-collect"
              n="2"
              title="Information We Collect"
            >
              <dl className="space-y-4">
                {COLLECT.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <dt className="text-sm font-semibold text-ink-900">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-700/75">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section id="how-we-use" n="3" title="How We Use Your Information">
              <ul className="space-y-3">
                {USE.map((item, i) => (
                  <Bullet key={i}>{item}</Bullet>
                ))}
              </ul>
            </Section>

            <Section id="how-we-share" n="4" title="How We Share Information">
              <dl className="space-y-4">
                {SHARE.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-semibold text-ink-900">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-700/75">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800">
                We do not sell your personal data.
              </p>
            </Section>

            <Section
              id="retention-security"
              n="5"
              title="Data Retention & Security"
            >
              <p>
                We store data on secure servers with encryption in transit and
                at rest. We keep account data while your account is active.
                Trip/service history is kept 7 years for tax, legal, and safety
                audits, then anonymized or deleted. You can request deletion
                anytime unless we must retain it by law.
              </p>
            </Section>

            <Section id="your-rights" n="6" title="Your Rights">
              <p>Under Act 843, you may:</p>
              <ol className="mt-4 space-y-3">
                {RIGHTS.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-700/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-5">
                To exercise rights, email{" "}
                <a
                  href="mailto:privacy@gilmoretechnologiesgh.com"
                  className="font-semibold text-brand-700 hover:text-brand-800"
                >
                  privacy@gilmoretechnologiesgh.com
                </a>{" "}
                or visit any MyShop regional office. We'll respond within 30
                days.
              </p>
            </Section>

            <Section id="childrens-privacy" n="7" title="Children's Privacy">
              <p>
                MyShop is not intended for users under 18. We do not knowingly
                collect data from children. Drivers/artisans must be 18+ to
                register.
              </p>
            </Section>

            <Section id="location" n="8" title="Location Permissions">
              <p>
                "Akwaaba" ride-hailing and some artisan services require
                location. You can disable it in phone settings, but core
                features will not work. Background location may be used during
                active trips for safety.
              </p>
            </Section>

            <Section id="changes" n="9" title="Changes to This Policy">
              <p>
                We'll notify you in-app or by email when we update this Policy.
                Continued use after changes means you accept the new Policy.
              </p>
            </Section>

            <Section
              id="dpc"
              n="10"
              title="Contact the Data Protection Commission"
            >
              <p>If unresolved concerns remain.</p>
            </Section>

            {/* Contact card */}
            <div className="mt-16 rounded-2xl border border-black/5 bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                Contact
              </h3>
              <p className="mt-3 text-sm text-ink-700/75">
                Questions about this Policy or your data?
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
