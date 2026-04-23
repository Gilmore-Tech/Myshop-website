import { useState, type FormEvent } from "react";
import { Mail, Send, Check, BellRing } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-white pb-24 pt-12 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950 px-6 py-16 shadow-2xl shadow-ink-900/20 sm:px-12 sm:py-20 lg:px-16">
          {/* Decorative gradient blobs */}
          <div
            aria-hidden
            className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-16 -z-10 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl"
          />
          {/* Grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
          />

          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Left: Copy */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                <BellRing className="h-3.5 w-3.5 text-brand-300" />
                Stay in the loop
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Subscribe to{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-emerald-300 bg-clip-text text-transparent">
                  our newsletter
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Get monthly updates on launch dates, new cities, exclusive
                provider perks, and stories from the MyShop community —
                straight to your inbox.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-300" strokeWidth={3} />
                  Once a month
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-300" strokeWidth={3} />
                  No spam, ever
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-300" strokeWidth={3} />
                  Unsubscribe anytime
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {subscribed ? (
                <div className="rounded-2xl border border-brand-400/30 bg-brand-500/10 p-6 text-center backdrop-blur">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40">
                    <Check className="h-6 w-6" strokeWidth={3} />
                  </div>
                  <div className="mt-4 font-semibold text-white">
                    You're subscribed!
                  </div>
                  <p className="mt-1 text-sm text-white/70">
                    Check your inbox for a welcome message.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-3">
                  <label className="relative block">
                    <span className="sr-only">Email address</span>
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 backdrop-blur outline-none transition focus:border-brand-400 focus:bg-white/15 focus:ring-2 focus:ring-brand-400/30"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-ink-900 shadow-lg shadow-brand-500/10 transition-all hover:bg-brand-50 hover:shadow-xl hover:shadow-brand-500/20"
                  >
                    Subscribe
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-xs text-white/50">
                    By subscribing you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
