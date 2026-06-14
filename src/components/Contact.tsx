import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Check, Loader2 } from "lucide-react";
import { COMPANY, LIVE_CHAT_URL, WEB3FORMS_ACCESS_KEY } from "../siteConfig";

const DETAILS = [
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: COMPANY.location, href: null },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // No Web3Forms key configured yet → fall back to opening the user's mail app.
    if (!WEB3FORMS_ACCESS_KEY) {
      const body = `From: ${name} <${email}>%0D%0A%0D%0A${encodeURIComponent(
        message,
      )}`;
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `Website enquiry from ${name}`,
      )}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Website enquiry from ${name}`,
          from_name: `${COMPANY.name} website`,
        }),
      });
      const result = await res.json();
      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details + live chat */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-700/55">
              Contact Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Let's talk.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/70 sm:text-lg">
              Send us a message and we'll respond, or start a live chat for a
              quick answer. We're here to help.
            </p>

            <div className="mt-10 space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-ink-900 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-700/60">
                        {label}
                      </span>
                      <span className="block text-base font-medium text-ink-900">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-zinc-50"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 p-2">
                    {inner}
                  </div>
                );
              })}
            </div>

            {LIVE_CHAT_URL && (
              <a
                href={LIVE_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-700"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Start a live chat
              </a>
            )}
          </div>

          {/* Right: message form */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-400/20 blur-2xl"
            />
            <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-xl shadow-ink-900/5 sm:p-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-6 w-6" strokeWidth={3} />
                  </div>
                  <div className="mt-4 font-semibold text-brand-900">
                    {WEB3FORMS_ACCESS_KEY
                      ? "Message sent — thank you!"
                      : "Your email is ready to send."}
                  </div>
                  <p className="mt-1 max-w-xs text-sm text-ink-700/70">
                    {WEB3FORMS_ACCESS_KEY
                      ? "We've received your message and will get back to you shortly."
                      : "We've opened your email app with the message — hit send and we'll get back to you shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <Field label="Full Name">
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Kwesi Appiah"
                      className="cinput"
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="kwesi@example.com"
                      className="cinput"
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="How can we help?"
                      className="cinput resize-none"
                    />
                  </Field>
                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMsg || "Something went wrong. Please try again."}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-900/15 transition-all hover:bg-ink-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cinput {
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
        .cinput::placeholder { color: rgb(17 24 39 / 0.4); }
        .cinput:focus {
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
