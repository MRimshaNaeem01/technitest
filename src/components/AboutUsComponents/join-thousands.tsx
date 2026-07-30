import Image from "next/image";

import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";

type JoinThousandsProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function JoinThousands({
  eyebrow,
  title,
  paragraphs,
  buttonText = "Get Started",
  buttonHref = "/",
  imageSrc,
  imageAlt = "Community image",
}: JoinThousandsProps) {
  return (
    <section className="bg-[#F7F7FF] py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={560}
              height={420}
              className="h-auto w-full rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            />
          </div>

          <div className="min-w-0">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
            ) : null}
            <h2 className="type-section">{title}</h2>
            <div className="mt-5 space-y-4 type-body leading-relaxed text-[#5F6368] sm:mt-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 sm:mt-10">
              <AppButton href={buttonHref} size="lg">
                {buttonText}
              </AppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
