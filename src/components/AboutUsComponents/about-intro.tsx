import Image from "next/image";

import { Container } from "@/components/common/container";

type AboutIntroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
};

function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle, #B8B8CC 1.5px, transparent 1.5px)",
        backgroundSize: "11px 11px",
      }}
    />
  );
}

function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M10 54C22 36 30 58 42 42C54 26 60 14 70 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M62 16L72 24L64 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportChatBadge({ className }: { className?: string }) {
  return (
    <span
      className={`flex size-14 items-center justify-center rounded-full bg-[#2945FF] shadow-[0_8px_24px_rgba(41,69,255,0.35)] ${className ?? ""}`}
    >
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
  );
}

function AboutIntroVisual({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-147.5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[20%] rounded-[28px] bg-[#F2F3FE] sm:rounded-[32px] sm:top-[18%] lg:top-[4%]"
      />

      <SquiggleArrow className="pointer-events-none absolute right-[8%] top-[38%] z-[1] h-14 w-14 text-[#F5A623] sm:h-18 sm:w-18" />

      <DotGrid className="pointer-events-none absolute -left-2 top-[54%] z-[3] size-[66px] -translate-y-1/2 sm:-left-3 sm:size-[77px]" />

      <Image
        src={imageSrc}
        alt={imageAlt}
        width={440}
        height={560}
        priority
        sizes="(max-width: 640px) 360px, 480px"
        className="relative z-[4] mx-auto block h-auto w-full max-w-[420px] object-contain"
      />
    </div>
  );
}

export function AboutIntro({
  eyebrow = "About Us",
  title,
  paragraphs,
  imageSrc,
  imageAlt = "About us",
}: AboutIntroProps) {
  return (
    <section className="relative bg-white pb-6 pt-10 sm:pb-8 sm:pt-14 lg:pb-10 lg:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0 w-full overflow-visible lg:justify-self-start">
            <AboutIntroVisual imageSrc={imageSrc} imageAlt={imageAlt} />
          </div>

          <div className="relative min-w-0 lg:py-4 lg:pr-20">
            <SupportChatBadge className="pointer-events-none absolute -top-2 right-0 hidden lg:flex" />

            {eyebrow && (
              <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
            )}
            <h2 className="type-section max-w-[560px]">{title}</h2>
            <div className="mt-5 space-y-4 type-body leading-relaxed text-[#5F6368] sm:mt-6">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
