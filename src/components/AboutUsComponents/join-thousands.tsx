import Image from "next/image";

import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";

type JoinThousandsProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function JoinThousands({
  eyebrow = "Community",
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/",
  imageSrc,
  imageAlt = "Community image",
}: JoinThousandsProps) {
  return (
    <section className="bg-[#F7F7FF] py-24">
      <Container>
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <div className="shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={420}
              height={380}
              className="h-auto w-full max-w-[420px] rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            />
          </div>

          <div>
            {eyebrow && (
              <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
            )}
            <h2 className="type-section">
              {title}
            </h2>
            <p className="mt-4 max-w-[520px] type-body">{description}</p>
            <div className="mt-10">
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
