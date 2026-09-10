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
- `components/CredentialShowcase.tsx` — auto-scrolling certification carousel
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

**Credentials carousel** — `components/CredentialShowcase.tsx` auto-scrolls
left to right, pauses 2s at each end, then reverses — and pauses on
hover/keyboard focus so a card can actually be read. Edit the `credentials`
array to add, remove, or reorder certifications.

**Contact form** — `components/Contact.tsx` submits to Formspree
(`https://formspree.io/f/mqpkwjbd`). To point it at your own form, swap the
`FORMSPREE_ENDPOINT` constant at the top of the file, or replace the `fetch`
call with your own API route / email service.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new), or run:

```bash
npm run build
npm start
```
