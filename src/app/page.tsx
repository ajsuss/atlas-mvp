"use client";

import { useMemo, useState } from "react";
import { FilterSidebar } from "@/components/atlas/filter-sidebar";
import { MapPanel } from "@/components/atlas/map-panel";
import { ResolutionSelector } from "@/components/atlas/resolution-selector";
import { TimelineBar } from "@/components/atlas/timeline-bar";
import { TopNav } from "@/components/atlas/top-nav";
import { events, resolutions } from "@/data/mock-data";
import { EventType, TrustState } from "@/types/models";

export default function HomePage() {
  const [timelineValue, setTimelineValue] = useState(40);
  const [selectedResolution, setSelectedResolution] = useState<(typeof resolutions)[number]>("year");
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>(["science", "politics", "economy"]);
  const [selectedTrust, setSelectedTrust] = useState<TrustState[]>(["verified", "contested"]);

  const visibleEvents = useMemo(
    () => events.filter((event) => selectedTypes.includes(event.type) && selectedTrust.includes(event.trust)),
    [selectedTrust, selectedTypes],
  );

  const toggleType = (value: EventType) => {
    setSelectedTypes((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]));
  };

  const toggleTrust = (value: TrustState) => {
    setSelectedTrust((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]));
  };

  return (
    <main className="relative h-screen overflow-hidden bg-[#02040b]">
      <TopNav />
      <FilterSidebar
        selectedTypes={selectedTypes}
        selectedTrust={selectedTrust}
        onToggleType={toggleType}
        onToggleTrust={toggleTrust}
      />
      <MapPanel events={visibleEvents} />
      <ResolutionSelector current={selectedResolution} onChange={setSelectedResolution} />
      <TimelineBar value={timelineValue} onValueChange={setTimelineValue} />
    </main>
  );
}
