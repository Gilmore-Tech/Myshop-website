import { useState, type FormEvent } from "react";
import { Check, Sparkles } from "lucide-react";

const BENEFITS = [
  "0% Commission for 3 months",
  "Verified Badge Status",
  "Priority Search Placement",
  "Free Welcome Toolkit",
];

export function Waitlist() {
  const [role, setRole] = useState<"artisan" | "driver">("artisan");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy + benefits */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Limited Spots
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Be First in Line.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/70 sm:text-lg">
              We're launching pilot programs in{" "}
              <span className="font-semibold text-ink-900">Accra</span> and{" "}
              <span className="font-semibold text-ink-900">Kumasi</span> soon.
              Join the provider waiting list today to secure your early partner
              status and unlock special commissions.
            </p>

            <div className="mt-10 rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50 to-white p-6">
              <div className="text-sm font-semibold text-brand-800">
                Waiting List Benefits
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-ink-800"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-600 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-400/20 blur-2xl"
            />
            <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-xl shadow-ink-900/5 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-ink-900">
                  Provider Waiting List
                </h3>
                <span className="text-xs font-medium text-brand-700">
                  2,500+ joined
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-700/70">
                Join artisans and drivers already signed up.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-brand-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-6 w-6" strokeWidth={3} />
                  </div>
                  <div className="mt-4 font-semibold text-brand-900">
                    You're on the list!
                  </div>
                  <p className="mt-1 text-sm text-brand-800/80">
                    We'll be in touch with launch updates soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name">
                      <input
                        required
                        type="text"
                        placeholder="Kwesi Appiah"
                        className="input"
                      />
                    </Field>
                    <Field label="Email Address">
                      <input
                        required
                        type="email"
                        placeholder="kwesi@example.com"
                        className="input"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <input
                        required
                        type="tel"
                        placeholder="+233 XX XXX XXXX"
                        className="input"
                      />
                    </Field>
                    <Field label="Preferred Region">
                      <select required className="input" defaultValue="">
                        <option value="" disabled>
                          Select region
                        </option>
                        <option>Greater Accra</option>
                        <option>Ashanti</option>
                        <option>Western</option>
                        <option>Central</option>
                        <option>Eastern</option>
                      </select>
                    </Field>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink-700/70">
                      Primary Role
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl bg-zinc-100 p-1">
                      {(["artisan", "driver"] as const).map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`rounded-lg px-3 py-2 text-sm font-medium capitalize transition-all ${
                            role === r
                              ? "bg-white text-ink-900 shadow-sm"
                              : "text-ink-700/70 hover:text-ink-900"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none rounded border-black/15 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-xs leading-relaxed text-ink-700/70">
                      I agree to the{" "}
                      <a className="font-medium text-ink-900 underline-offset-2 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a className="font-medium text-ink-900 underline-offset-2 hover:underline">
                        Privacy Policy
                      </a>
                      . We'll only contact you about launch updates.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className="mt-2 w-full rounded-2xl bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-900/15 transition-all hover:bg-ink-800 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-ink-900/40 disabled:shadow-none"
                  >
                    Register My Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(0 0 0 / 0.1);
          background: white;
          padding: 0.7rem 0.875rem;
          font-size: 0.875rem;
          color: var(--color-ink-900);
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        .input::placeholder { color: rgb(17 24 39 / 0.4); }
        .input:focus {
          border-color: var(--color-brand-500);
          box-shadow: 0 0 0 3px rgb(245 166 35 / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-700/70">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
