type ContactHeroProps = {
  breadcrumb: React.ReactNode;
  title: string;
  description?: string;
};

export function ContactHero({ breadcrumb, title, description }: ContactHeroProps) {
  return (
    <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#F6F6FF] md:min-h-[300px]">
      <div className="px-4 py-10 text-center md:px-6 md:py-16">
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
          className="absolute left-[6%] top-1/4 h-8 w-8 text-[#F5A000] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <svg
          className="absolute right-[8%] top-[30%] h-10 w-10 text-[#F5A000] opacity-15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M4 4L20 20" strokeDasharray="3 3" />
          <path d="M20 4L4 20" strokeDasharray="3 3" />
        </svg>
        <svg
          className="absolute bottom-8 left-[12%] h-5 w-5 text-[#F5A000] opacity-20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg
          className="absolute right-[15%] bottom-8 h-3 w-3 text-[#F5A000] opacity-20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </section>
  );
}
