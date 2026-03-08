# Atlas MVP

Production-style Next.js App Router prototype for Atlas, an interactive world event intelligence product.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn-style UI primitives (local reusable components)
- Framer Motion micro-interactions
- Prisma ORM + PostgreSQL datasource
- Local typed mock seed data

## Pages
- `/` full-screen explore experience with map surface, marker navigation, filters, timeline bar, and time resolution selector.
- `/events/[slug]` full event dossier page.
- `/topics` popular topic/discussion index.
- `/entities/countries/[slug]` country entity page.
- `/entities/people/[slug]` person entity page.

## API
- `GET /api/events` fetches events with parent/child/related relationships.
- `POST /api/events` creates an event with coordinates, content fields, and relationships.

## Run
```bash
npm install
npm run dev
```

## Prisma setup
Create a `.env` file with your database connection string:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/atlas"
```

Then generate the Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init_events
```

## Notes
This MVP intentionally uses local mock data and includes TODO markers for backend, search, source provenance, AI context generation, and discussions.
