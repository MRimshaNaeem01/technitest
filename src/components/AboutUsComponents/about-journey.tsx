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
    <section className="bg-white py-24">
      <Container>
        {eyebrow && (
          <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
        )}
        <h2 className="text-[32px] font-semibold leading-tight text-black">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[620px] text-[#5F5F6B]">{description}</p>
        )}

        <div className="mt-14 flex flex-col gap-14 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${
                  card.variant === "blue"
                    ? "bg-[#2945FF] text-white"
                    : "bg-[#F5F5FF] text-black"
                }`}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    card.variant === "blue"
                      ? "text-white/80"
                      : "text-[#5F5F6B]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-1">
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
