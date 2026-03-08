import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-slate-200">{children}</span>;
}
