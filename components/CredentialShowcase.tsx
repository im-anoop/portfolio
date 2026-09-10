"use client";

import { useEffect, useRef } from "react";

type Credential = {
  name: string;
  issuer: string;
  logo: string;
};

const credentials: Credential[] = [
  { name: "Claude Architect Professional Certification", issuer: "Anthropic", logo: "/logos/anthropic.png" },
  { name: "Claude Architect Foundation Certification", issuer: "Anthropic", logo: "/logos/anthropic.png" },
  { name: "Claude Developer Certification", issuer: "Anthropic", logo: "/logos/anthropic.png" },
  { name: "Contentstack Developer Certification", issuer: "Contentstack", logo: "/logos/contentstack.png" },
  { name: "Sitecore .NET Developer Certification", issuer: "Sitecore", logo: "/logos/sitecore.png" },
  { name: "Sitecore AI CMS Certification", issuer: "Sitecore", logo: "/logos/sitecore.png" },
  { name: "Azure Fundamentals (AZ-900) Certification", issuer: "Microsoft", logo: "/logos/azure.png" },
];

const PAUSE_MS = 2000;
const STEP_PX = 1.1;
const FRAME_MS = 16;

export default function CredentialShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);
  const pausedUntilRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      if (time < pausedUntilRef.current) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      track.scrollLeft += STEP_PX * directionRef.current;

      const atEnd = track.scrollLeft >= maxScroll - 1;
      const atStart = track.scrollLeft <= 1;

      if (atEnd || atStart) {
        directionRef.current = atEnd ? -1 : 1;
        pausedUntilRef.current = time + PAUSE_MS;
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Pause on hover/focus so it's easy to read a card, resume after
  const pauseFor = (ms: number) => {
    pausedUntilRef.current = performance.now() + ms;
  };

  return (
    <section id="credentials" className="border-t border-ink-150 bg-paper">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-head text-2xl font-semibold text-ink-900 sm:text-3xl">
          Credentials
        </h2>

        <div
          ref={trackRef}
          onMouseEnter={() => pauseFor(60 * 60 * 1000)}
          onMouseLeave={() => pauseFor(0)}
          onFocus={() => pauseFor(60 * 60 * 1000)}
          onBlur={() => pauseFor(0)}
          className="mt-10 flex gap-5 overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {credentials.map((cred) => (
            <article
              key={cred.name}
              tabIndex={0}
              className="flex w-64 shrink-0 flex-col gap-4 rounded-md border border-ink-150 bg-ink-100 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cred.logo} alt={`${cred.issuer} logo`} className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-head text-base font-semibold leading-snug text-ink-900">
                  {cred.name}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-accent">{cred.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
