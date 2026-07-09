import Image from "next/image";
import { BarChart3, Star, Trophy } from "lucide-react";

import { Container } from "@/components/common/container";

export type Achiever = {
  id: string;
  name: string;
  certificate: string;
  level: string;
  score: string;
  imageSrc: string;
  imageAlt?: string;
  rating?: number;
};

type HallOfAchieversProps = {
  eyebrow?: string;
  title?: string;
  achievers: Achiever[];
};

export function HallOfAchievers({
  eyebrow = "Scorers",
  title = "Hall of Achievers",
  achievers,
}: HallOfAchieversProps) {
  return (
    <section className="bg-[#F7F7FF] py-20">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievers.map((achiever) => (
            <div key={achiever.id} className="text-center sm:text-left">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={achiever.imageSrc}
                  alt={achiever.imageAlt ?? achiever.name}
                  width={400}
                  height={250}
                  className="h-[250px] w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-start justify-between">
                <h3 className="text-base font-semibold text-black">
                  {achiever.name}
                </h3>
                <span className="flex shrink-0 items-center gap-0.5">
                  {Array.from({ length: achiever.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-brand text-brand"
                    />
                  ))}
                </span>
              </div>

              <p className="mt-1 text-sm italic text-indigo-500">
                {achiever.certificate}
              </p>

              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <BarChart3 className="size-3.5" />
                  {achiever.level}
                </span>
                <span className="h-3 w-px bg-gray-300" />
                <span className="flex items-center gap-1">
                  <Trophy className="size-3.5" />
                  {achiever.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="size-2.5 rounded-full bg-brand" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
        </div>
      </Container>
    </section>
  );
}
