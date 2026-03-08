"use client";

import { motion } from "framer-motion";

export function TimelineBar({ value, onValueChange }: { value: number; onValueChange: (v: number) => void }) {
  return (
    <div className="atlas-panel absolute bottom-4 left-64 right-4 z-20 p-4">
      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
        <span>Timeline Position</span>
        <span>{Math.round(value)}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className="h-2 w-full cursor-grab appearance-none rounded bg-white/10"
      />
      <motion.div animate={{ x: `${value}%` }} className="mt-2 h-1 w-1 rounded-full bg-indigo-300" />
    </div>
  );
}
