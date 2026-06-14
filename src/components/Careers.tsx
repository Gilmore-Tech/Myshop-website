import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { COMPANY } from "../siteConfig";

type Job = { title: string; type: string; location: string; team: string };

// ─── Add real openings here to replace the "Coming Soon" state. Example:
// { title: "Senior Software Engineer", type: "Full-time",
//   location: "Accra (Hybrid)", team: "Engineering" },
const JOBS: Job[] = [];

export function Careers() {
  return (
    <section id="careers" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Careers"
          title="Build your career with us"
          description="We hire and grow local talent. If you want to do meaningful work that moves communities forward, we'd love to meet you."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          {JOBS.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/15 bg-zinc-50 p-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-700/55">
                Coming Soon
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink-900">
                No open roles just yet
              </h3>
              <p className="mx-auto mt-3 max-w-md text-base text-ink-700/70">
                We're growing fast and new opportunities are on the way. Check
                back soon — or send your CV and we'll keep it on file for when we
                start hiring.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {JOBS.map((job) => (
                <li key={job.title}>
                  <a
                    href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                      `Application: ${job.title}`,
                    )}`}
                    className="group flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-ink-900/5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-700/70">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          {job.team}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex flex-none items-center gap-2 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-ink-800">
                      Apply
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-8 text-center text-sm text-ink-700/70">
            Don't see your role?{" "}
            <a
              href={`mailto:${COMPANY.email}?subject=Open%20Application`}
              className="font-semibold text-brand-700 underline-offset-2 hover:underline"
            >
              Send us your CV
            </a>{" "}
            and we'll be in touch.
          </p>
        </div>
      </div>
    </section>
  );
}
