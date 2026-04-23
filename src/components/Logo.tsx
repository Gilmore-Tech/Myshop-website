import logoUrl from "../assets/logo.png";

type Props = {
  className?: string;
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoUrl}
        alt="MyShop logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl shadow-sm"
      />
      <span
        className={`text-lg font-bold tracking-tight ${
          invert ? "text-white" : "text-ink-900"
        }`}
      >
        MyShop
      </span>
    </div>
  );
}
