import Image from "next/image";

import { Container } from "@/components/common/container";

type QuizDetailHeroProps = {
  breadcrumb: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
};

export function QuizDetailHero({
  breadcrumb,
  imageSrc,
  imageAlt = "Quiz banner",
}: QuizDetailHeroProps) {
  return (
    <section className="bg-white pt-8">
      <Container>
        <div className="mb-6">{breadcrumb}</div>
        <div className="overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={260}
            className="h-[160px] w-full object-cover sm:h-[200px] md:h-[260px]"
          />
        </div>
      </Container>
    </section>
  );
}
