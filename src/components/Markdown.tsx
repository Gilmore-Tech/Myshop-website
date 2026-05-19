import { Fragment, type ReactNode } from "react";

export type TocItem = { id: string; title: string };

type Token =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; lines: string[] }
  | { type: "hr" };

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function stripFrontmatter(src: string): string {
  if (src.startsWith("---")) {
    const end = src.indexOf("\n---", 3);
    if (end !== -1) {
      const after = src.indexOf("\n", end + 4);
      return after === -1 ? "" : src.slice(after + 1);
    }
  }
  return src;
}

function tokenize(src: string): Token[] {
  const lines = stripFrontmatter(src).replace(/\r\n/g, "\n").split("\n");
  const tokens: Token[] = [];
  let i = 0;
  let paraBuf: string[] = [];

  const flushPara = () => {
    if (paraBuf.length) {
      tokens.push({ type: "p", text: paraBuf.join(" ").trim() });
      paraBuf = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      flushPara();
      i++;
      continue;
    }

    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      flushPara();
      tokens.push({ type: "hr" });
      i++;
      continue;
    }

    const h1 = /^# (.+)$/.exec(trimmed);
    const h2 = /^## (.+)$/.exec(trimmed);
    const h3 = /^### (.+)$/.exec(trimmed);
    if (h1) {
      flushPara();
      tokens.push({ type: "h1", text: h1[1] });
      i++;
      continue;
    }
    if (h2) {
      flushPara();
      tokens.push({ type: "h2", text: h2[1], id: slugify(h2[1]) });
      i++;
      continue;
    }
    if (h3) {
      flushPara();
      tokens.push({ type: "h3", text: h3[1], id: slugify(h3[1]) });
      i++;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushPara();
      const qlines: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        qlines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      tokens.push({ type: "quote", lines: qlines });
      continue;
    }

    const ulm = /^[-*]\s+(.+)$/.exec(trimmed);
    if (ulm) {
      flushPara();
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const m = /^[-*]\s+(.+)$/.exec(t);
        if (m) {
          items.push(m[1]);
          i++;
        } else if (t === "" && i + 1 < lines.length && /^[-*]\s+/.test(lines[i + 1].trim())) {
          i++;
        } else if (t.startsWith("  ") || /^\s{2,}\S/.test(lines[i])) {
          // continuation of previous item
          items[items.length - 1] += " " + t;
          i++;
        } else {
          break;
        }
      }
      tokens.push({ type: "ul", items });
      continue;
    }

    const olm = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (olm) {
      flushPara();
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const m = /^\d+\.\s+(.+)$/.exec(t);
        if (m) {
          items.push(m[1]);
          i++;
        } else if (t === "" && i + 1 < lines.length && /^\d+\.\s+/.test(lines[i + 1].trim())) {
          i++;
        } else {
          break;
        }
      }
      tokens.push({ type: "ol", items });
      continue;
    }

    paraBuf.push(trimmed);
    i++;
  }
  flushPara();
  return tokens;
}

// Inline: **bold**, *italic*, _italic_, `code`, [text](url)
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;

  const patterns: { re: RegExp; build: (m: RegExpExecArray) => ReactNode }[] = [
    {
      re: /\*\*([^*]+)\*\*/,
      build: (m) => (
        <strong key={key++} className="font-semibold text-ink-900">
          {renderInline(m[1])}
        </strong>
      ),
    },
    {
      re: /(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:!?]|$)/,
      build: (m) => (
        <Fragment key={key++}>
          {m[1]}
          <em>{renderInline(m[2])}</em>
        </Fragment>
      ),
    },
    {
      re: /(^|[\s(])_([^_\s][^_]*?)_(?=[\s).,;:!?]|$)/,
      build: (m) => (
        <Fragment key={key++}>
          {m[1]}
          <em className="text-ink-700/65">{renderInline(m[2])}</em>
        </Fragment>
      ),
    },
    {
      re: /`([^`]+)`/,
      build: (m) => (
        <code
          key={key++}
          className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] text-ink-900"
        >
          {m[1]}
        </code>
      ),
    },
    {
      re: /\[([^\]]+)\]\(([^)]+)\)/,
      build: (m) => {
        const href = m[2];
        const external = /^https?:/.test(href);
        return (
          <a
            key={key++}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline"
          >
            {renderInline(m[1])}
          </a>
        );
      },
    },
  ];

  while (rest.length) {
    let best: { idx: number; len: number; node: ReactNode } | null = null;
    for (const { re, build } of patterns) {
      const m = re.exec(rest);
      if (m) {
        const idx = m.index;
        if (best === null || idx < best.idx) {
          best = { idx, len: m[0].length, node: build(m) };
        }
      }
    }
    if (!best) {
      nodes.push(rest);
      break;
    }
    if (best.idx > 0) nodes.push(rest.slice(0, best.idx));
    nodes.push(best.node);
    rest = rest.slice(best.idx + best.len);
  }
  return nodes;
}

export function extractToc(src: string): TocItem[] {
  return tokenize(src)
    .filter((t): t is Extract<Token, { type: "h2" }> => t.type === "h2")
    .map((t) => ({ id: t.id, title: t.text }));
}

export function Markdown({ content }: { content: string }) {
  const tokens = tokenize(content);
  let h1Seen = false;

  return (
    <div className="space-y-5 text-base leading-relaxed text-ink-700/85">
      {tokens.map((t, idx) => {
        switch (t.type) {
          case "h1": {
            // First H1 is the page title — render large; suppress subsequent H1s
            if (h1Seen) return null;
            h1Seen = true;
            return null; // page hero already shows the title
          }
          case "h2":
            return (
              <h2
                key={idx}
                id={t.id}
                className="scroll-mt-24 border-t border-black/5 pt-10 mt-4 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl"
              >
                {renderInline(t.text)}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={idx}
                id={t.id}
                className="scroll-mt-24 mt-6 text-lg font-semibold tracking-tight text-ink-900"
              >
                {renderInline(t.text)}
              </h3>
            );
          case "p":
            return (
              <p key={idx} className="text-ink-700/85">
                {renderInline(t.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="space-y-2.5 pl-1">
                {t.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
                    />
                    <span>{renderInline(it)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="space-y-3">
                {t.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                      {i + 1}
                    </span>
                    <span>{renderInline(it)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={idx}
                className="rounded-2xl border-l-4 border-brand-500 bg-brand-50/60 px-5 py-4 text-ink-900"
              >
                <div className="space-y-2">
                  {t.lines.map((l, i) => (
                    <p key={i}>{renderInline(l)}</p>
                  ))}
                </div>
              </blockquote>
            );
          case "hr":
            return (
              <hr
                key={idx}
                className="my-8 border-0 border-t border-black/5"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
