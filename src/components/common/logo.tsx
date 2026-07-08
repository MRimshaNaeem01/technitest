import Link from "next/link";
import { BarChart3, GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center">
        <GraduationCap
          className={cn("size-8", isLight ? "text-white" : "text-foreground")}
          strokeWidth={1.5}
        />
        <BarChart3
          className={cn(
            "absolute -bottom-0.5 left-1 size-4 text-brand",
            isLight && "text-brand"
          )}
          strokeWidth={2}
        />
      </div>
      <span
        className={cn(
          "text-xl font-bold tracking-wide",
          isLight ? "text-white" : "text-foreground"
        )}
      >
        TECH<span className="text-brand">NI</span>TEST
      </span>
    </Link>
  );
}
