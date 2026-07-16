import Image from "next/image";
import { Container } from "@/components/common/container";
import { AppButton } from "@/components/common/app-button";

type BannerProps = {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Banner({
  badge = "🏆 The Leader in Online Learning",
  title,
  highlightedText,
  description,
  buttonText = "Start Quiz Now",
  buttonHref = "/dashboard",
  imageSrc,
  imageAlt = "Banner image",
}: BannerProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="py-10">
      <Container>
        <div
          className={`grid items-center gap-10 ${
            hasImage ? "lg:grid-cols-2" : "place-items-center text-center"
          }`}
        >
          {/* Left Content */}
          <div className={hasImage ? "max-w-xl" : "max-w-3xl"}>
            {badge && (
              <div className="mb-6 inline-flex items-center bg-white px-5 py-2 text-sm font-medium shadow-sm">
                {badge}
              </div>
            )}

            <h1 className="type-hero text-[36px] md:text-[52px]">
              {title}{" "}
              {highlightedText && (
                <span className="relative text-[#2945FF]">
                  {highlightedText}
                </span>
              )}
            </h1>

            {description && (
              <p className="mt-5 max-w-lg type-body">
                {description}
              </p>
            )}

            {buttonText && (
              <div className="mt-7 flex items-center gap-5">
                <AppButton href={buttonHref} className="rounded-full px-7">
                  {buttonText}
                </AppButton>

                {hasImage && (
                  <p className="text-sm font-medium text-black">
                    <span className="font-bold">24k+</span> Happy Students
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Right Image */}
          {hasImage && (
            <div className="relative hidden justify-end lg:flex">
              <Image
                src={imageSrc!}
                alt={imageAlt}
                width={540}
                height={520}
                priority
                className="h-auto w-full max-w-[540px] object-contain"
              />

              <div className="absolute left-0 top-28 rounded-xl bg-white/90 px-5 py-4 shadow-md">
                <p className="text-2xl font-semibold">⭐ 99%</p>
                <p className="text-xs text-gray-600">Satisfied Students</p>
              </div>

              <div className="absolute bottom-28 right-0 rounded-xl bg-white/90 px-5 py-4 shadow-md">
                <p className="text-2xl font-semibold">🎓 36k+</p>
                <p className="text-xs text-gray-600">Enrolled Students</p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}