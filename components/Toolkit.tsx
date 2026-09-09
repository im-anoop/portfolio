const groups = [
  {
    name: "Languages",
    items: ["Go", "TypeScript", "Python", "Rust", "SQL"],
  },
  {
    name: "Backend",
    items: ["Node.js", "gRPC", "REST", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    name: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "Kafka"],
  },
  {
    name: "Practice",
    items: ["System design", "Observability", "CI/CD", "Load testing"],
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="border-t border-ink-150 bg-ink-100">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
          Toolkit
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.name}>
              <h3 className="font-mono text-sm text-accent">{g.name}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
