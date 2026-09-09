const roles = [
  {
    period: "2023 — Present",
    title: "Senior Backend Engineer",
    org: "Northbeam Logistics",
    description:
      "Own the routing and settlement services powering same-day delivery for three metro regions.",
  },
  {
    period: "2021 — 2023",
    title: "Backend Engineer",
    org: "Paylane",
    description:
      "Built the ledger and reconciliation systems for a card-issuing platform, from zero to production.",
  },
  {
    period: "2020 — 2021",
    title: "Software Engineer",
    org: "Studio Twelve",
    description:
      "Full-stack work for early-stage clients — APIs, dashboards, and the occasional emergency fix.",
  },
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
