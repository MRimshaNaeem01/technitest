type CategoryInnerHeroProps = {
  breadcrumb: React.ReactNode;
  title: string;
  description?: string;
};

export function CategoryInnerHero({
  breadcrumb,
  title,
  description,
}: CategoryInnerHeroProps) {
  return (
    <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-[#F7F7FF] md:min-h-[260px]">
      <div className="px-4 py-10 text-center md:px-6 md:py-14">
        <div className="mb-4">{breadcrumb}</div>
        <h1 className="type-page text-[36px] md:text-[48px]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-[620px] type-body">
            {description}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-[6%] top-1/4 h-8 w-8 text-brand opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <svg
          className="absolute right-[8%] top-[30%] h-10 w-10 text-brand opacity-15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M4 4L20 20" strokeDasharray="3 3" />
          <path d="M20 4L4 20" strokeDasharray="3 3" />
        </svg>
      </div>
    </section>
  );
}
