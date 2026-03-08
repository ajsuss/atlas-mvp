"use client";

import { resolutions } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export function ResolutionSelector({
  current,
  onChange,
}: {
  current: (typeof resolutions)[number];
  onChange: (value: (typeof resolutions)[number]) => void;
}) {
  return (
    <div className="atlas-panel absolute bottom-28 right-4 z-20 flex flex-wrap gap-1 p-2">
      {resolutions.map((r) => (
        <Button key={r} variant={current === r ? "default" : "ghost"} className="h-8 px-2 text-xs" onClick={() => onChange(r)}>
          {r}
        </Button>
      ))}
    </div>
  );
}
