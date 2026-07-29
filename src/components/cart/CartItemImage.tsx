import Image from "next/image";

type CartItemImageProps = {
  src: string;
  alt: string;
};

export function CartItemImage({ src, alt }: CartItemImageProps) {
  return (
    <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
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
