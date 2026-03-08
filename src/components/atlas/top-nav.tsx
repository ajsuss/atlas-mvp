"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <header className="atlas-panel absolute inset-x-4 top-4 z-20 flex items-center gap-4 px-4 py-3">
      <Link href="/" className="text-lg font-semibold tracking-wide text-indigo-200">
        Atlas
      </Link>
      <div className="relative max-w-md flex-1">
        <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input className="pl-9" placeholder="Search events, entities, topics..." />
      </div>
      <nav className="ml-auto flex gap-2 text-sm text-slate-300">
        <Link className="rounded px-3 py-2 hover:bg-white/10" href="/topics">
          Topics
        </Link>
        <Link className="rounded px-3 py-2 hover:bg-white/10" href="/entities/countries/germany">
          Countries
        </Link>
        <Link className="rounded px-3 py-2 hover:bg-white/10" href="/entities/people/neil-armstrong">
          People
        </Link>
      </nav>
    </header>
  );
}
