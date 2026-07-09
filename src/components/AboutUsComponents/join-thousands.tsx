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
    <section className="bg-[#F7F7FF] py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={420}
              height={380}
              className="h-auto w-full max-w-[420px] rounded-xl object-cover"
            />
          </div>

          <div>
            {eyebrow && (
              <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
            )}
            <h2 className="text-[32px] font-semibold leading-tight text-black">
              {title}
            </h2>
            <p className="mt-4 max-w-[520px] text-[#5F5F6B]">{description}</p>
            <div className="mt-8">
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
