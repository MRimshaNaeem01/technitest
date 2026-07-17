import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1540px] px-8 xl:px-10 2xl:px-12", className)}>
      {children}
    </div>
  );
}
