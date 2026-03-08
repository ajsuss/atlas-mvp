import Link from "next/link";
import { countries, events } from "@/data/mock-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = countries.find((entry) => entry.slug === params.slug);
  if (!country) notFound();

  const keyEvents = events.filter((event) => country.keyEvents.includes(event.slug));

  return (
    <main className="min-h-screen bg-[#04060a] p-6 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-semibold">Country: {country.name}</h1>
        <p className="atlas-panel p-5 text-slate-300">{country.profile}</p>
        <section className="atlas-panel p-5">
          <h2 className="text-xl font-semibold">Key events</h2>
          <div className="mt-3 space-y-3">
            {keyEvents.map((event) => (
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
