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
    <section className="bg-white py-20">
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

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl p-7 ${
                  card.variant === "blue"
                    ? "bg-[#2945FF] text-white"
                    : "bg-[#F5F5FF] text-black"
                }`}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p
                  className={`mt-2 leading-relaxed ${
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
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
