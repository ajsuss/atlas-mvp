import Link from "next/link";
import { events, people } from "@/data/mock-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  const person = people.find((entry) => entry.slug === params.slug);
  if (!person) notFound();

  const relevantEvents = events.filter((event) => person.relatedEvents.includes(event.slug));

  return (
    <main className="min-h-screen bg-[#04060a] p-6 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-semibold">Person: {person.name}</h1>
        <p className="atlas-panel p-5 text-slate-300">{person.profile}</p>
        <section className="atlas-panel p-5">
          <h2 className="text-xl font-semibold">Associated events</h2>
          <div className="mt-3 space-y-3">
            {relevantEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`} className="block rounded border border-white/20 p-3 hover:bg-white/5">
                {event.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
