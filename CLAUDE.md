# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 16 app (App Router) for **Silpilate**, a French Pilates Reformer studio in Cergy-Pontoise.

**Page structure** (`app/page.tsx`): one long landing page composed of section components rendered in order — Navbar → Hero → Intro → Studio → Benefits → Experience → Pricing → Location → FAQ → Booking → Footer → MobileCTA.

**Section components** (`components/*.tsx`): each is a self-contained section. Most use `"use client"` and implement scroll-triggered reveal animations via `IntersectionObserver` with `.reveal` + `.animate-in` CSS classes. The pattern is consistent across components.

**Booking** (`components/booking.tsx`): integrates Cal.com via `@calcom/embed-react`, loaded dynamically with `ssr: false` to avoid hydration issues. Cal namespace: `reserver-une-seance-de-pilates-reformer`.

**UI primitives** (`components/ui/`): shadcn/ui components (New York style), configured via `components.json`. Import with `@/components/ui/...`.

**Styling**: Tailwind CSS v4 with custom brand tokens defined as CSS variables in `app/globals.css`. Use brand color names directly in Tailwind classes (e.g., `bg-cream`, `text-deep-brown`, `text-muted-gold`, `bg-warm-beige`).

**Brand colors**:
- `cream` (#F9F6F1) — page background
- `warm-beige` (#E8DCC3) — section backgrounds
- `sand` (#F3EDE3) — card backgrounds
- `blush` (#D97C7C) — secondary/accent
- `muted-gold` (#C9A96E) — accent/highlights
- `cocoa` (#3A2E2A) — primary dark
- `deep-brown` (#2B2B2B) — body text

**Typography**: `font-sans` = Inter, `font-serif` = Cormorant Garamond (used for headings). Both loaded via `next/font/google` and set as CSS variables.

**Path alias**: `@/` maps to the repo root.

**Analytics**: `@vercel/analytics` included in layout, only activated in production.

All content is in French.
