import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BlogHeroProps = {
  title: string;
};

export function BlogHero({ title }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f5f0f8] px-4 pb-28 pt-24 md:pt-32">
      <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#d8c4e8]/30 blur-3xl" />
      <div className="pointer-events-none absolute left-[12%] top-16 hidden h-16 w-16 rounded-lg border-2 border-[#b8d4f0]/40 md:block" />
      <div className="pointer-events-none absolute right-[15%] bottom-12 hidden h-8 w-8 rounded bg-brand/20 md:block" />

      <div className="relative mx-auto max-w-3xl text-center">
        <nav className="mb-5 flex items-center justify-center gap-1 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-muted-foreground">Blogs</span>
        </nav>

        <h1 className="text-[28px] font-bold leading-tight text-[#111] md:text-[38px] lg:text-[42px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
