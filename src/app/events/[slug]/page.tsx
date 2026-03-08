import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/data/mock-data";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((entry) => entry.slug === params.slug);

  if (!event) {
    notFound();
  }

  const related = events.filter((candidate) => event.relatedEventIds.includes(candidate.id));

  return (
    <main className="min-h-screen bg-[#04060a] p-6 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="atlas-panel p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Event Dossier</p>
          <h1 className="mt-2 text-4xl font-semibold">{event.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-300">{event.hero}</p>
          <div className="mt-4 flex gap-2">
            <Badge>{event.date}</Badge>
            <Badge>{event.type}</Badge>
            <Badge>{event.trust}</Badge>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <article className="atlas-panel p-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-2 text-slate-300">{event.overview}</p>
            </article>
            <article className="atlas-panel p-6">
              <h2 className="text-xl font-semibold">Causes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                {event.causes.map((cause) => (
                  <li key={cause}>{cause}</li>
                ))}
              </ul>
            </article>
            <article className="atlas-panel p-6">
              <h2 className="text-xl font-semibold">Consequences</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                {event.consequences.map((effect) => (
                  <li key={effect}>{effect}</li>
                ))}
              </ul>
            </article>
            <article className="atlas-panel p-6">
              <h2 className="text-xl font-semibold">Related events</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.id} href={`/events/${item.slug}`} className="rounded border border-white/20 p-3 hover:bg-white/5">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
          <aside className="space-y-6">
            <section className="atlas-panel p-6">
              <h3 className="font-semibold">Event timeline</h3>
              <ol className="mt-4 space-y-3 border-l border-white/20 pl-4 text-sm">
                {event.timeline.map((step) => (
                  <li key={step.label}>
                    <p className="font-medium">{step.year}</p>
                    <p className="text-slate-400">{step.label}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="atlas-panel p-6">
              <h3 className="font-semibold">Sources</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {event.sources.map((source) => (
                  <li key={source}>• {source}</li>
                ))}
              </ul>
              {/* TODO: Replace with source provenance and trust graph from backend. */}
            </section>
            <section className="atlas-panel p-6">
              <h3 className="font-semibold text-indigo-200">AI context (experimental)</h3>
              <p className="mt-2 text-sm text-slate-300">{event.aiContext}</p>
              {/* TODO: Connect panel to model-generated context summaries with traceable citations. */}
            </section>
            <section className="atlas-panel p-6">
              <h3 className="font-semibold">Linked keywords & entities</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.keywords.map((keyword) => (
                  <Badge key={keyword}>{keyword}</Badge>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="atlas-panel p-6">
          <h2 className="text-xl font-semibold">Discussion</h2>
          <div className="mt-4 flex gap-2">
            <Button variant="default">Top</Button>
            <Button variant="ghost">Recent</Button>
            <Button variant="ghost">Contrarian</Button>
          </div>
          <p className="mt-4 text-slate-300">Community discussion is in prototype mode and uses local mock threads.</p>
          {/* TODO: Integrate authenticated threaded discussion + moderation APIs. */}
        </section>
      </div>
    </main>
  );
}
