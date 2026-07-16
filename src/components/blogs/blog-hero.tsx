import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";

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
        <div className="mb-5">
          <BannerBreadcrumb currentPage="Blogs" />
        </div>

        <h1 className="type-page text-[28px] md:text-[38px] lg:text-[42px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
