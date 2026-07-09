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
    <section className="bg-white py-16">
      <Container>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={300}
          className="h-[300px] w-full rounded-xl object-cover"
        />
      </Container>
    </section>
  );
}
