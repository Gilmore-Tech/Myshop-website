import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Providers", href: "#earn" },
  { label: "Services", href: "#features" },
  { label: "Safety", href: "#safety" },
  { label: "Download", href: "#download" },
  { label: "About", href: "#footer" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/80 backdrop-blur-lg"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            Sign In
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ink-800 hover:shadow-md"
          >
            Join Waitlist
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 hover:bg-ink-900/5 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-900/5"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-black/5 pt-3">
              <a
                href="#"
                className="flex-1 rounded-xl border border-black/10 px-4 py-2.5 text-center text-sm font-semibold text-ink-800"
              >
                Sign In
              </a>
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl bg-ink-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
