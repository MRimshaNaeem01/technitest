import Image from "next/image";

import { Container } from "@/components/common/container";

type AboutIntroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
};

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
          <div className="flex min-w-0 justify-center lg:justify-start">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={520}
              height={520}
              priority
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px] lg:max-w-[430px]"
            />
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
