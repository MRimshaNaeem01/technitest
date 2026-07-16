import Image from "next/image";

import { Container } from "@/components/common/container";

type AboutIntroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
};

export function AboutIntro({
  eyebrow = "About Us",
  title,
  paragraphs,
  imageSrc,
  imageAlt = "About us",
}: AboutIntroProps) {
  return (
    <section className="relative bg-white py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={360}
              height={400}
              className="h-auto w-full max-w-[360px] rounded-xl object-cover"
            />
            <svg
              className="absolute -bottom-4 -right-4 h-10 w-10 text-brand opacity-30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12H19M12 5L12 19" />
            </svg>
          </div>

          <div className="max-w-[560px]">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
            )}
            <h2 className="type-section">
              {title}
            </h2>
            <div className="mt-6 space-y-4 type-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 right-8 hidden lg:block">
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
