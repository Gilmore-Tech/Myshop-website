import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, User, Car, Wrench, Mail } from "lucide-react";
import { Markdown, extractToc, type TocItem } from "./Markdown";

export type TermsAudience = "client" | "driver" | "artisan";

const AUDIENCES: {
  id: TermsAudience;
  label: string;
  blurb: string;
  icon: typeof User;
}[] = [
  {
    id: "client",
    label: "Client",
    blurb: "For riders and customers booking artisan services.",
    icon: User,
  },
  {
    id: "driver",
    label: "Driver",
    blurb: "For independent drivers offering ride-hailing through Akwaaba.",
    icon: Car,
  },
  {
    id: "artisan",
    label: "Artisan",
    blurb: "For trade providers — electricians, plumbers, mechanics, and more.",
    icon: Wrench,
  },
];

const FILE_BY_AUDIENCE: Record<TermsAudience, string> = {
  client: "legal/terms.client.md",
  driver: "legal/terms.driver.md",
  artisan: "legal/terms.artisan.md",
};

const cache = new Map<TermsAudience, string>();

async function fetchTerms(audience: TermsAudience): Promise<string> {
  const cached = cache.get(audience);
  if (cached !== undefined) return cached;
  const url = `${import.meta.env.BASE_URL}${FILE_BY_AUDIENCE[audience]}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load terms (${res.status})`);
  const text = await res.text();
  cache.set(audience, text);
  return text;
}

function getAudienceFromUrl(): TermsAudience {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("audience");
  if (q === "driver" || q === "artisan" || q === "client") return q;
  return "client";
}

export function TermsOfService() {
  const [audience, setAudience] = useState<TermsAudience>(() =>
    typeof window === "undefined" ? "client" : getAudienceFromUrl(),
  );
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPop = () => setAudience(getAudienceFromUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchTerms(audience)
      .then((text) => {
        if (!cancelled) {
          setContent(text);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [audience]);

  const toc: TocItem[] = useMemo(
    () => (content ? extractToc(content) : []),
    [content],
  );

  const home = import.meta.env.BASE_URL;
  const basePath = home.replace(/\/$/, "");
  const switchAudience = (next: TermsAudience) => {
    if (next === audience) return;
    setAudience(next);
    const url = `${basePath}/terms?audience=${next}`;
    window.history.pushState(null, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const active = AUDIENCES.find((a) => a.id === audience)!;

  return (
    <article className="relative bg-white">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-brand-50/60 via-white to-white pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div
          aria-hidden
          className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <a
            href={home}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </a>
          <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink-700/55">
            Legal · Version 1.0 (Pilot Draft)
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700/75 sm:text-lg">
            The agreement between you and Gilmore Technologies Limited for use
            of MyShop. Choose your role to see the version that applies to you.
          </p>

          {/* Audience switcher */}
          <div
            role="tablist"
            aria-label="Choose audience"
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {AUDIENCES.map((a) => {
              const Icon = a.icon;
              const isActive = a.id === audience;
              return (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => switchAudience(a.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-brand-500 bg-white shadow-md ring-2 ring-brand-500/15"
                      : "border-black/5 bg-white/80 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-brand-500 text-white"
                          : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        {a.label}
                      </div>
                      <div className="text-xs text-ink-700/65">{a.blurb}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Table of contents */}
          <aside className="lg:col-span-4 lg:col-start-9 lg:order-2">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto rounded-2xl border border-black/5 bg-zinc-50 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-700/60">
                You are viewing
              </div>
              <div className="mt-1 text-sm font-bold text-ink-900">
                {active.label} Terms
              </div>
              <h2 className="mt-6 text-xs font-bold uppercase tracking-wider text-ink-900">
                Contents
              </h2>
              {toc.length === 0 ? (
                <p className="mt-4 text-sm text-ink-700/60">Loading…</p>
              ) : (
                <ol className="mt-4 space-y-2.5">
                  {toc.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex gap-3 text-sm text-ink-700/75 transition-colors hover:text-ink-900"
                      >
                        <span className="w-5 flex-none text-ink-700/45 group-hover:text-brand-700">
                          {i + 1}.
                        </span>
                        <span>{s.title.replace(/^\d+\.?\s*/, "")}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 lg:order-1 lg:max-w-2xl">
            {loading && (
              <div className="space-y-4">
                <div className="h-6 w-2/3 animate-pulse rounded bg-zinc-100" />
                <div className="h-4 w-full animate-pulse rounded bg-zinc-100" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-zinc-100" />
                <div className="h-4 w-10/12 animate-pulse rounded bg-zinc-100" />
              </div>
            )}
            {error && !loading && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
                Couldn't load the terms: {error}. Please try again or contact{" "}
                <a
                  href="mailto:support@gilmoretechnologiesgh.com"
                  className="font-semibold underline"
                >
                  support@gilmoretechnologiesgh.com
                </a>
                .
              </div>
            )}
            {!loading && !error && content && (
              <>
                <Markdown content={content} />

                {/* Contact card */}
                <div className="mt-16 rounded-2xl border border-black/5 bg-zinc-50 p-6 sm:p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                    Questions about these Terms?
                  </h3>
                  <p className="mt-3 text-sm text-ink-700/75">
                    Reach our team for clarifications, legal notices, or data
                    protection requests.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
                    <a
                      href="mailto:support@gilmoretechnologiesgh.com"
                      className="inline-flex items-center gap-2 text-sm text-ink-900 hover:text-brand-700"
                    >
                      <Mail className="h-4 w-4 text-brand-700" />
                      support@gilmoretechnologiesgh.com
                    </a>
                    <a
                      href="mailto:legal@gilmoretechnologiesgh.com"
                      className="inline-flex items-center gap-2 text-sm text-ink-900 hover:text-brand-700"
                    >
                      <Mail className="h-4 w-4 text-brand-700" />
                      legal@gilmoretechnologiesgh.com
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
