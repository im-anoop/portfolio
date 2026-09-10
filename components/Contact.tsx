"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpkwjbd";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!message) next.message = "Add a short message.";

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Form submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-ink-150 bg-ink-900">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <div>
          <h2 className="font-head text-2xl font-semibold text-white sm:text-3xl">
            Have something worth building?
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            I&apos;m open to senior backend and systems roles, plus short
            consulting engagements. Based in Mumbai, happy to work remote
            across time zones.
          </p>
          <div className="mt-8 flex flex-col gap-2 font-mono text-sm text-white/80">
            <a href="mailto:hello@arjunmehta.dev" className="link-reveal w-fit">
              hello@arjunmehta.dev
            </a>
            <a href="https://github.com" className="link-reveal w-fit">
              github.com/arjunmehta
            </a>
            <a href="https://linkedin.com" className="link-reveal w-fit">
              linkedin.com/in/arjunmehta
            </a>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col justify-center rounded-md border border-white/10 bg-white/5 p-8">
            <p className="font-head text-lg font-semibold text-white">Message sent.</p>
            <p className="mt-2 text-sm text-white/60">
              Thanks for reaching out — I&apos;ll reply within a day or two.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="link-reveal mt-6 w-fit font-mono text-sm text-white/80"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="text-sm text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-sm border border-white/15 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-brand-light">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-white/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-sm border border-white/15 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent"
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-brand-light">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-white/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-sm border border-white/15 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent"
                placeholder="What are you building?"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-brand-light">{errors.message}</p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-brand-light">
                Something went wrong sending that — please try again, or email
                me directly at hello@arjunmehta.dev.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
