import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";

type QuizInfoCardProps = {
  label?: string;
  title: string;
  category: string;
  rating: number;
  difficulty: string;
  description: string;
  details: { label: string; value: string }[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
};

export function QuizInfoCard({
  label = "LinkedIn or Resume skill",
  title,
  category,
  rating,
  difficulty,
  description,
  details,
  ctaText = "Start Quiz",
  ctaHref,
  onCtaClick,
}: QuizInfoCardProps) {
  return (
    <section className="relative bg-white pb-20 pt-8">
      <Container>
        <div className="rounded-xl bg-white p-4 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
            {label}
          </p>
          <h1 className="type-section text-[24px] md:text-[32px]">
            {title}
          </h1>
          <p className="mt-1 text-sm text-indigo-500">{category}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-md bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
              <svg
                className="size-4 fill-brand"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {rating}
            </span>
            <span className="rounded-md bg-red-50 px-3 py-1 text-sm font-medium text-red-500">
              {difficulty}
            </span>
          </div>

          <p className="mt-6 leading-relaxed type-body">{description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="flex gap-2 text-sm">
                <span className="font-medium text-black">{d.label}:</span>
                <span className="text-gray-500">{d.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <AppButton href={ctaHref} onClick={onCtaClick} size="lg">
              {ctaText}
            </AppButton>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-12 right-8 hidden lg:block">
        <span className="flex size-14 items-center justify-center rounded-full bg-[#2945FF] shadow-lg">
          <svg
            className="size-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 15C21 15 21 19 17 19C13 19 13 15 13 15" />
            <path d="M21 15V11C21 7 17 7 17 7" />
            <path d="M3 9C3 9 3 5 7 5C11 5 11 9 11 9" />
            <path d="M3 9V13C3 17 7 17 7 17" />
          </svg>
        </span>
      </div>
    </section>
  );
}
