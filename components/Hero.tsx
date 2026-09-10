"use client";

import { useEffect, useState } from "react";

const SNIPPET = [
  { t: "const", c: "text-accent" },
  { t: " engineer", c: "text-ink-900" },
  { t: " = {", c: "text-ink-500" },
  { t: "\n  name", c: "text-ink-900" },
  { t: ": ", c: "text-ink-500" },
  { t: "\"Anoop Kumar\"", c: "text-brand-light" },
  { t: ",", c: "text-ink-500" },
  { t: "\n  focus", c: "text-ink-900" },
  { t: ": ", c: "text-ink-500" },
  { t: "\"backend & systems\"", c: "text-brand-light" },
  { t: ",", c: "text-ink-500" },
  { t: "\n  based_in", c: "text-ink-900" },
  { t: ": ", c: "text-ink-500" },
  { t: "\"Mumbai, IN\"", c: "text-brand-light" },
  { t: ",", c: "text-ink-500" },
  { t: "\n  available", c: "text-ink-900" },
  { t: ": ", c: "text-ink-500" },
  { t: "true", c: "text-accent" },
  { t: ",", c: "text-ink-500" },
  { t: "\n};", c: "text-ink-500" },
];

const FULL_TEXT = SNIPPET.map((s) => s.t).join("");

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= FULL_TEXT.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 18);
    return () => clearTimeout(id);
  }, [count]);

  // Build the visible, colorized snippet up to `count` characters
  let remaining = count;
  const rendered = SNIPPET.map((segment, i) => {
    if (remaining <= 0) return null;
    const slice = segment.t.slice(0, remaining);
    remaining -= segment.t.length;
    return (
      <span key={i} className={segment.c}>
        {slice}
      </span>
    );
  });

  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-8 md:items-center">
        <div>
          <p className="font-mono text-sm text-accent">Software Engineer</p>
          <h1 className="mt-4 font-head text-4xl font-semibold leading-[1.1] text-ink-900 sm:text-5xl lg:text-6xl">
            I build backend systems that don&apos;t fall over at 3am.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
            Five years designing APIs, data pipelines, and infrastructure for
            products used by millions. Currently building distributed systems
            in Mumbai.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-sm bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="link-reveal font-mono text-sm text-ink-900"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-md border border-ink-150 bg-ink-900 shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-xs text-white/40">profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code>
              {rendered}
              {count < FULL_TEXT.length && <span className="caret text-white">▍</span>}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
