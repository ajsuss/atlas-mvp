import Link from "next/link";
import { events } from "@/data/mock-data";

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-[#04060a] p-6 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-semibold">Popular Topics & Discussions</h1>
        <p className="text-slate-300">High-signal threads and cluster-level debates across the Atlas graph.</p>
        <div className="grid gap-4">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.slug}`} className="atlas-panel block p-4 hover:bg-white/5">
              <p className="text-lg font-medium">{event.title}</p>
              <p className="text-sm text-slate-400">{event.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
