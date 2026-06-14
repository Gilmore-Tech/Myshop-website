import logoUrl from "../assets/logo.png";
import { COMPANY } from "../siteConfig";

type Props = {
  className?: string;
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: Props) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoUrl}
        alt={`${COMPANY.name} logo`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl shadow-sm"
      />
      <span
        className={`text-lg font-bold tracking-tight ${
          invert ? "text-white" : "text-ink-900"
        }`}
      >
        {COMPANY.shortName}
        <span className="font-medium text-ink-700/60"> Technologies</span>
      </span>
    </a>
  );
}
