type AboutHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: React.ReactNode;
};

export function AboutHero({
  eyebrow = "About Us",
  title,
  description,
  breadcrumb,
}: AboutHeroProps) {
  return (
    <section className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-[#F5F5FF]">
      <div className="py-16 text-center">
        {breadcrumb && (
          <div className="mb-6">{breadcrumb}</div>
        )}
        {eyebrow && !breadcrumb && (
          <p className="mb-4 text-sm font-medium text-brand">{eyebrow}</p>
        )}
        <h1 className="mx-auto max-w-3xl type-page text-[36px] md:text-[48px]">
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
          className="absolute left-[8%] top-1/3 h-12 w-12 text-brand opacity-30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12C5 12 9 4 12 4C15 4 19 12 19 12" />
          <path d="M5 12C5 12 9 20 12 20C15 20 19 12 19 12" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <svg
          className="absolute right-[10%] top-1/4 h-10 w-10 text-brand opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4L20 20" strokeDasharray="2 3" />
          <path d="M20 4L4 20" strokeDasharray="2 3" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-16 bg-[#2945FF]" />
    </section>
  );
}
