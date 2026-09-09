# Portfolio

A clean, minimal developer portfolio built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — fonts (Space Grotesk, Inter, JetBrains Mono) and page metadata
- `app/page.tsx` — assembles the page from the components below
- `components/Header.tsx` — sticky nav, responsive mobile menu
- `components/Hero.tsx` — headline + animated code-snippet panel
- `components/HeroBanner.tsx` — title, description, image, and a CTA that downloads a PDF résumé
- `components/About.tsx` — bio and stats
- `components/Projects.tsx` — filterable project list (client-side)
- `components/Toolkit.tsx` — grouped skills
- `components/Experience.tsx` — role timeline
- `components/Contact.tsx` — validated contact form
- `components/Footer.tsx`

## Customizing

**Content** — Your name, role, bio, projects, experience, and contact details
are plain data in each component file (e.g. the `projects` array in
`components/Projects.tsx`, the `roles` array in `components/Experience.tsx`).
Edit those directly.

**Colors** — Defined once in `tailwind.config.ts` under `theme.extend.colors`:
- `brand` — red, primary accent (buttons, highlights)
- `paper` — white, background
- `ink` — neutral scale for text, borders, muted backgrounds
- `accent` — small pop color used sparingly (labels, focus states)

**Résumé download** — `HeroBanner` uses a plain `<a download>` link, so
clicking the CTA saves the file with no extra JS. Replace
`public/arjun-mehta-resume.pdf` with your own résumé (same filename, or
update `resumeUrl`/`resumeFileName` in `app/page.tsx`), and swap
`public/hero-portrait.svg` for a real photo or graphic if you'd like.

**Contact form** — `components/Contact.tsx` currently simulates a submit.
Wire the `onSubmit` handler to an API route, or a service like Resend or
Formspree, to actually deliver messages.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new), or run:

```bash
npm run build
npm start
```
