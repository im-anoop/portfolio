"use client";

import { useState } from "react";

type Project = {
  title: string;
  year: string;
  category: "Backend" | "Infra" | "Full-stack";
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Ledger",
    year: "2025",
    category: "Backend",
    description:
      "Double-entry accounting engine handling reconciliation for a payments platform processing 12M transactions/day.",
    stack: ["Go", "PostgreSQL", "Kafka"],
    href: "#",
  },
  {
    title: "Routewise",
    year: "2024",
    category: "Infra",
    description:
      "Auto-scaling delivery routing service that cut fleet idle time by 31% across three logistics hubs.",
    stack: ["Python", "Redis", "Kubernetes"],
    href: "#",
  },
  {
    title: "Fieldnote",
    year: "2024",
    category: "Full-stack",
    description:
      "Offline-first inspection app for warehouse teams, syncing structured reports over unreliable networks.",
    stack: ["TypeScript", "Next.js", "SQLite"],
    href: "#",
  },
  {
    title: "Pulsecheck",
    year: "2023",
    category: "Infra",
    description:
      "Internal observability stack that replaced three separate vendor dashboards with one alerting pipeline.",
    stack: ["Rust", "Prometheus", "Grafana"],
    href: "#",
  },
  {
    title: "Cardvault",
    year: "2022",
    category: "Backend",
    description:
      "PCI-scoped tokenization service for storing and rotating payment credentials across microservices.",
    stack: ["Go", "gRPC", "Vault"],
    href: "#",
  },
];

const filters = ["All", "Backend", "Infra", "Full-stack"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
          Selected work
        </h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                active === f
                  ? "border-brand bg-brand text-white"
                  : "border-ink-150 text-ink-700 hover:border-ink-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-10 divide-y divide-ink-150 border-t border-ink-150">
        {visible.map((p) => (
          <li key={p.title} className="group py-7 first:pt-0">
            <a
              href={p.href}
              className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-sm text-ink-500">{p.year}</span>

              <div>
                <h3 className="font-head text-xl font-semibold text-ink-900 transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-700">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-ink-100 px-2 py-1 font-mono text-xs text-ink-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <span className="hidden font-mono text-sm text-ink-500 transition-colors group-hover:text-brand sm:block">
                View project
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
