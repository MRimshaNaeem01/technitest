import Link from "next/link";

import { cn } from "@/lib/utils";

type AppButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantStyles = {
  primary:
    "bg-brand text-brand-primary-foreground hover:bg-brand-hover",
  outline:
    "border border-border bg-white text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

const sizeStyles = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-6 text-sm",
  lg: "h-11 px-8 text-sm",
};

export function AppButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: AppButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
