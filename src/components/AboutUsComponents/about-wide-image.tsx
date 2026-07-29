import Image from "next/image";

import { Container } from "@/components/common/container";

type AboutWideImageProps = {
  imageSrc: string;
  imageAlt?: string;
};

export function AboutWideImage({
  imageSrc,
  imageAlt = "Wide section image",
}: AboutWideImageProps) {
  return (
    <section className="bg-white pb-10 sm:pb-16 lg:pb-24">
      <Container>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={400}
          className="h-[200px] w-full rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:h-[300px] lg:h-[400px]"
        />
      </Container>
    </section>
  );
}
