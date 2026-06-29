# Aether — Website

Marketing site and (upcoming) dashboard for **Aether**, the celestial all-in-one
Discord bot. Built with **Next.js 14 (App Router)**, **TypeScript** and
**Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

## Project structure

```
app/
  layout.tsx            Root layout — fonts (Syne + Outfit), metadata
  globals.css           Tailwind layers + celestial utilities
  page.tsx              Landing page (/)
  (legal)/              Privacy & Terms (grouped, shared chrome)
  dashboard/            Dashboard scaffold (to be built out)
    layout.tsx          Dashboard shell
    page.tsx            Server picker
    [serverId]/page.tsx Per-server module view
components/
  icons.tsx             Brand mark + feature/social icons (inline SVG)
  ui/                   Reusable primitives (Button, Reveal)
  landing/              Landing sections (Navbar, Hero, Features, …)
lib/
  site-config.ts        Single source of truth: bot info, links, features, stats
public/
  favicon.svg
```

## Brand system

Defined in `tailwind.config.ts` so colours/fonts are referenced by name:

| Token            | Value     | Usage                  |
| ---------------- | --------- | ---------------------- |
| `night`          | `#0a0b1a` | Page background        |
| `panel`          | `#12142b` | Cards / secondary bg   |
| `gold`           | `#f0c060` | Primary accent         |
| `celeste`        | `#5b8dee` | Secondary accent       |
| `subtext`        | `#8b8fa8` | Muted text             |
| `font-heading`   | Syne      | Headings               |
| `font-body`      | Outfit    | Body copy              |

## Customising

- **Links, copy, features, stats** live in `lib/site-config.ts` — edit there,
  not in the components.
- **Character art**: the hero has a placeholder box (`components/landing/hero.tsx`)
  ready for the Aether PNG.
- The dashboard routes are structural scaffolds; they reuse the shared config and
  palette so real functionality can be layered in without re-theming.
