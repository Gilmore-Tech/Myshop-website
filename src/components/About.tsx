import { Code2, GraduationCap, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.19h.07c.67-1.27 2.3-2.61 4.73-2.61C22.4 7.58 24 10 24 14.13V24h-5v-8.74c0-2.08-.04-4.76-2.9-4.76-2.9 0-3.35 2.27-3.35 4.61V24h-5V8z" />
  </svg>
);

const WHAT_WE_DO = [
  {
    icon: Code2,
    title: "IT Services & Solutions",
    body: "We design and deliver accessible, world-class software, platforms, and digital infrastructure for people, businesses, and communities.",
  },
  {
    icon: GraduationCap,
    title: "Youth Skills & Careers",
    body: "We train and equip young people with in-demand digital skills, then place them into sustainable technology careers and jobs.",
  },
  {
    icon: Rocket,
    title: "Ventures & Brands",
    body: "We incubate and scale homegrown technology brands like MyShop and Akwaaba that solve real, everyday problems across Ghana.",
  },
];

// ─── Placeholder leadership — replace names, roles, and bios with real people ──
const BOARD = [
  { name: "Kwame Mensah", role: "Chairman, Board of Directors" },
  { name: "Abena Owusu", role: "Non-Executive Director" },
  { name: "Daniel Asante", role: "Non-Executive Director" },
];

const MANAGEMENT = [
  { name: "Nana Sarpong", role: "Chief Executive Officer" },
  { name: "Esi Boateng", role: "Chief Operating Officer" },
  { name: "Kofi Adjei", role: "Chief Technology Officer" },
  { name: "Adwoa Frimpong", role: "Head of People & Talent" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <article className="group rounded-3xl border border-black/5 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-xl font-bold text-white shadow-lg shadow-brand-500/20">
        {initials(name)}
      </div>
      <h4 className="mt-4 text-base font-semibold text-ink-900">{name}</h4>
      <p className="mt-1 text-sm text-ink-700/70">{role}</p>
      <a
        href="#"
        aria-label={`${name} on LinkedIn`}
        className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      >
        <Linkedin className="h-4 w-4" />
      </a>
    </article>
  );
}

export function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="About Us"
          title="Who we are and what we do"
          description="Gilmore Technologies is a Ghanaian technology company unlocking the limitless potential of the youth and the communities they live in."
        />

        {/* What we do */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white">
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

        {/* Board of Directors */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Board of Directors
            </h3>
            <p className="mt-3 text-base text-ink-700/70">
              Guiding our strategy and governance.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {BOARD.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Management Team
            </h3>
            <p className="mt-3 text-base text-ink-700/70">
              The people running the day-to-day.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MANAGEMENT.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
