import { cn } from "@/lib/utils";

type VerificationCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function VerificationCard({ children, className }: VerificationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}
