import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Post = {
  title: string;
  date: string;
  tag: string;
  image: string;
  href: string;
};

// ─── Add real programmes, events & media here to replace the "Coming Soon"
// state. Each post renders as a card; set FEATURED_VIDEO_ID to a real YouTube
// id to bring back the featured video above the grid. Example:
// { title: "Youth Digital Skills Bootcamp wraps up in Accra", date: "May 2026",
//   tag: "Programme", image: "https://…", href: "#" },
const POSTS: Post[] = [];
const FEATURED_VIDEO_ID: string = ""; // e.g. "ysz5S6PUM-U"

export function News() {
  const hasContent = POSTS.length > 0 || FEATURED_VIDEO_ID !== "";

  return (
    <section id="news" className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Latest News"
          title="Programmes, events & milestones"
          description="Follow our journey — the people we train, the communities we serve, and the moments we celebrate."
        />

        {!hasContent ? (
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-dashed border-black/15 bg-white p-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-700/55">
              Coming Soon
            </span>
            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white">
              <Newspaper className="h-7 w-7" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink-900">
              Nothing to share — yet
            </h3>
            <p className="mx-auto mt-3 max-w-md text-base text-ink-700/70">
              This is where we'll post our programmes, events, photos and videos
              as they happen. Watch this space.
            </p>
          </div>
        ) : (
          <>
            {FEATURED_VIDEO_ID && (
              <div className="mt-16 overflow-hidden rounded-3xl border border-black/5 bg-ink-950 shadow-xl shadow-ink-900/10">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                    title="Gilmore Technologies — featured video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900 backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-1.5 text-xs text-ink-700/60">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.date}
                    </div>
                    <h3 className="mt-2 flex-1 text-base font-semibold leading-snug text-ink-900">
                      {p.title}
                    </h3>
                    <a
                      href={p.href}
                      className="group/cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
