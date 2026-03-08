"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Event } from "@/types/models";

export function MapPanel({ events }: { events: Event[] }) {
  return (
    <section className="absolute inset-0 mx-64 mb-24 mt-24 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-grid bg-[length:28px_28px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(93,120,255,.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(54,201,255,.2),transparent_35%)]" />
      <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.2em] text-slate-400">World Event Surface</p>
      {events.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.slug}`}
          style={{ left: `${event.map.x}%`, top: `${event.map.y}%` }}
          className="absolute"
        >
          <motion.div whileHover={{ scale: 1.1 }} className="group relative">
            <span className="block h-3 w-3 rounded-full bg-indigo-300 shadow-glow" />
            <div className="pointer-events-none absolute left-4 top-1/2 w-52 -translate-y-1/2 rounded-md border border-white/15 bg-slate-900/95 p-2 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100">
              <p className="font-semibold">{event.title}</p>
              <p className="text-slate-400">{event.date}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </section>
  );
}
