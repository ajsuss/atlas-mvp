import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-white/20 bg-white/[0.03] px-3 text-sm outline-none ring-indigo-400 transition focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
