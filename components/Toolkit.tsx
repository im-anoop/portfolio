const groups = [
  {
    name: "Languages",
    items: ["C#", "SQL","TypeScript", "JavaScript", "Powershell", "Python", "HTML", "CSS"],
  },
  {
    name: "Backend",
    items: ["ASP.NET MVC", "ASP.NET Core", "gRPC", "REST", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    name: "Frontend",
    items: ["TypeScript", "JavaScript", "React.js", "Next.js", "TailwindCSS", "SASS", "HTML", "CSS"],
  },
  {
    name: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "Azure", "AWS", "Kafka"],
  },
  {
    name: "CMS",
    items: ["Sitecore", "Sitecore XM Cloud", "ContentStack", "ContentFul", "Strapi"],
  },
  {
    name: "Practice",
    items: ["System design", "Observability", "CI/CD", "Load testing", "Performance", "Security", "TDD", "DDD"],
  },
  {
    name: "Artificial Intelligence",
    items: ["Generative AI", "GenAI", "RAG", "LLM", "Vector DBs", "OpenAI API", "Azure OpenAI Service"],
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
