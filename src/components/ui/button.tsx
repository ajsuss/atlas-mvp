import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition",
        variant === "default" && "bg-indigo-500 text-white hover:bg-indigo-400",
        variant === "ghost" && "bg-transparent text-slate-200 hover:bg-white/10",
        variant === "outline" && "border border-white/20 bg-transparent hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
