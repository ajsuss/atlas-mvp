"use client";

import { EventType, TrustState } from "@/types/models";

type FilterSidebarProps = {
  selectedTypes: EventType[];
  selectedTrust: TrustState[];
  onToggleType: (value: EventType) => void;
  onToggleTrust: (value: TrustState) => void;
};

const eventTypes: EventType[] = ["war", "science", "politics", "culture", "economy"];
const trustStates: TrustState[] = ["verified", "contested", "emerging"];

export function FilterSidebar({ selectedTypes, selectedTrust, onToggleType, onToggleTrust }: FilterSidebarProps) {
  return (
    <aside className="atlas-panel absolute bottom-28 left-4 top-24 z-10 w-56 p-4">
      <h3 className="text-sm font-semibold text-slate-200">Filters</h3>
      <p className="mb-4 text-xs text-slate-400">Refine visible events by type and trust state.</p>
      <div className="mb-4 space-y-2">
        <p className="text-xs uppercase tracking-wider text-slate-400">Event type</p>
        {eventTypes.map((type) => (
          <label key={type} className="flex items-center gap-2 text-sm text-slate-200">
            <input checked={selectedTypes.includes(type)} onChange={() => onToggleType(type)} type="checkbox" />
            {type}
          </label>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-slate-400">Trust state</p>
        {trustStates.map((state) => (
          <label key={state} className="flex items-center gap-2 text-sm text-slate-200">
            <input checked={selectedTrust.includes(state)} onChange={() => onToggleTrust(state)} type="checkbox" />
            {state}
          </label>
        ))}
      </div>
    </aside>
  );
}
