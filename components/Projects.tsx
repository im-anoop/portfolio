"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Amgen Inc.",
    year: "2025",
    category: "Sitecore XM Cloud",
    description:
      "Public medical-science portal built with Sitecore 10.4.1, XM Cloud, Next.js, GraphQL and JAMstack architecture, supporting 3M monthly visitors.",
    stack: [
      "Sitecore 10.4.1",
      "XM Cloud",
      "Next.js",
      "React.js",
      "GraphQL",
      "JAMstack",
      "C#",
      "ASP.NET Core",
    ],
    href: "#",
  },
  {
    title: "Kimberly-Clark / Huggies",
    year: "2024",
    category: "Sitecore XM Cloud",
    description:
      "High-traffic consumer portal using Sitecore Helix, XM Cloud, Next.js, Content Hub and GraphQL, with Solr search and Workday API integrations.",
    stack: [
      "Sitecore",
      "XM Cloud",
      "Helix",
      "Next.js",
      "React.js",
      "GraphQL",
      "Content Hub",
      "Solr",
      "Workday API",
    ],
    href: "#",
  },
  {
    title: "Reliance Standard Life Insurance",
    year: "2024",
    category: "Sitecore Headless",
    description:
      "Insurance web platforms and digital services built with Sitecore Helix, Next.js, JSS and Layout Service, including API-driven sitemap and JSON endpoint implementations.",
    stack: [
      "Sitecore",
      "Helix",
      "Next.js",
      "JSS",
      "Layout Service",
      "C#",
      "Web API",
      "REST",
      "SQL Server",
    ],
    href: "#",
  },
  {
    title: "KTM India",
    year: "2023",
    category: "Sitecore MVC",
    description:
      "Reusable Sitecore MVC components and CMS customizations for official automotive websites, following a maintainable Helix-aligned architecture.",
    stack: [
      "Sitecore",
      "ASP.NET MVC",
      "C#",
      "Helix",
      "JavaScript",
      "REST APIs",
      "CMS Customization",
    ],
    href: "#",
  },
  {
    title: "RSM UK",
    year: "2023",
    category: "Sitecore SXA",
    description:
      "Content-rich professional-services platform using Sitecore SXA, Scriban and Solr to deliver reusable components and high-quality content search.",
    stack: [
      "Sitecore SXA 10.1",
      "Scriban",
      "Solr",
      "Helix",
      "C#",
      "ASP.NET MVC",
      "SEO",
    ],
    href: "#",
  },
  {
    title: "Johnson & Johnson",
    year: "2022",
    category: "Headless CMS",
    description:
      "Headless CMS implementation using Contentstack with Salesforce Marketing Cloud and Aprimo DAM integrations for structured content and digital asset management.",
    stack: [
      "Contentstack",
      "SFMC",
      "Aprimo DAM",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "Headless CMS",
    ],
    href: "#",
  },
];

export default function Projects() {
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
          Work Experience
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
