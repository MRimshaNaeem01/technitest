import Image from "next/image";

type CartItemImageProps = {
  src: string;
  alt: string;
};

export function CartItemImage({ src, alt }: CartItemImageProps) {
  return (
    <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="120px"
      />
    </div>
  );
}
