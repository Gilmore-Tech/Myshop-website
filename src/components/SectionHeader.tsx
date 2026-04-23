type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-700/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
