# Atlas MVP (Frontend Prototype)

Production-style Next.js App Router prototype for Atlas, an interactive world event intelligence product.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn-style UI primitives (local reusable components)
- Framer Motion micro-interactions
- Local typed mock seed data

## Pages
- `/` full-screen explore experience with map surface, marker navigation, filters, timeline bar, and time resolution selector.
- `/events/[slug]` full event dossier page.
- `/topics` popular topic/discussion index.
- `/entities/countries/[slug]` country entity page.
- `/entities/people/[slug]` person entity page.

## Run
```bash
npm install
npm run dev
```

## Notes
This MVP intentionally uses local mock data and includes TODO markers for backend, search, source provenance, AI context generation, and discussions.
