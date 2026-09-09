const stats = [
  { value: "5", label: "years in production" },
  { value: "20+", label: "systems shipped" },
  { value: "12M", label: "requests / day handled" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink-150 bg-ink-100">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-10 md:py-24">
        <div>
          <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
            I care more about what happens after launch than the launch itself.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
            I started out fixing a slow checkout flow that was losing a retailer
            real money, and got hooked on the part of engineering most people
            skip: what a system does under load, at 2am, when something you
            didn&apos;t expect finally happens. Since then I&apos;ve worked across
            fintech and logistics, mostly on the backend, occasionally pulled
            into the frontend when a product needs it end-to-end.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-700">
            I write clear code, document decisions I&apos;ll forget the reasoning
            for, and would rather ship something small and correct than
            something large and fragile.
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-6 self-start md:grid-cols-1 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand pl-4">
              <dt className="font-head text-3xl font-semibold text-ink-900">{s.value}</dt>
              <dd className="mt-1 text-sm text-ink-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
