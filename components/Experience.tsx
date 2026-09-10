const roles = [
  {
    period: "2024 — Present",
    title: "Senior Backend Engineer",
    org: "Capgemini",
    description:
      "Working on a global enterprise application for a leading financial and health tech services company, building scalable backend services and APIs.",
  },
   {
    period: "2023 — 2024",
    title: "Software Engineer",
    org: "Virtusa Polaris",
    description:
      "Worked on full-stack development for global enterprise applications, building APIs, dashboards, and supporting production fixes.",
  },
  {
    period: "2021 — 2023",
    title: "Backend Engineer",
    org: "Espire Infolabs",
    description:
      "Built backend services for a tax consulting firm, taking the application from initial development to production.",
  }
];


export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
      <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
        Experience
      </h2>

      <ol className="mt-10 flex flex-col">
        {roles.map((r) => (
          <li
            key={r.title + r.org}
            className="grid gap-2 border-t border-ink-150 py-7 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-sm text-ink-500">{r.period}</p>
            <div>
              <h3 className="font-head text-lg font-semibold text-ink-900">
                {r.title} <span className="font-body font-normal text-ink-500">— {r.org}</span>
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-700">
                {r.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
