type HeroBannerProps = {
  title: string;
  description: string;
  ctaLabel: string;
  resumeUrl: string;
  resumeFileName: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HeroBanner({
  title,
  description,
  ctaLabel,
  resumeUrl,
  resumeFileName,
  imageSrc,
  imageAlt,
}: HeroBannerProps) {
  return (
    <section className="border-t border-ink-150 bg-paper">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-10 md:py-24">
        <div className="order-2 md:order-1">
          <h2 className="font-head text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-700">
            {description}
          </p>

          {/* `download` makes the browser save the file instead of navigating to it */}
          <a
            href={resumeUrl}
            download={resumeFileName}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1.5v9M8 10.5 4.5 7M8 10.5 11.5 7M2 13h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {ctaLabel}
          </a>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-md border border-ink-150 bg-ink-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
