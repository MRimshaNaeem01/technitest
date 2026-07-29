import Image from "next/image";

import { Container } from "@/components/common/container";

export type JourneyCard = {
  title: string;
  description: string;
  variant?: "light" | "blue";
};

type AboutJourneyProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cards: JourneyCard[];
  imageSrc: string;
  imageAlt?: string;
};

export function AboutJourney({
  eyebrow = "Our Journey",
  title,
  description,
  cards,
  imageSrc,
  imageAlt = "Journey image",
}: AboutJourneyProps) {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        {eyebrow && (
          <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
        )}
        <h2 className="type-section">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[620px] type-body">{description}</p>
        )}

        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:gap-14">
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-8 ${
                  card.variant === "blue"
                    ? "bg-[#2945FF] text-white"
                    : "bg-[#F5F5FF] text-black"
                }`}
              >
                <h3 className="text-[17px] font-semibold text-[#111111] sm:text-[20px]">{card.title}</h3>
                <p
                  className={`mt-3 text-[15px] leading-relaxed ${
                    card.variant === "blue"
                      ? "text-white/80"
                      : "text-[#5F6368]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={540}
              height={380}
              className="h-full w-full rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
