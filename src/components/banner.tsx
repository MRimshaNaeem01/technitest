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
          className={`grid items-center gap-10 ${hasImage ? "lg:grid-cols-2" : "place-items-center text-center"
            }`}
        >
          {/* Left Content */}
          <div className={hasImage ? "max-w-xl" : "max-w-3xl"}>
            {badge && (
              <div className="mb-6 inline-flex items-center bg-white px-5 py-2 text-sm font-medium shadow-sm">
                {badge}
              </div>
            )}

<h1 className="max-w-[700px] font-urbanist text-[50px] font-medium leading-[62px] tracking-normal text-[#0F172A]">
  {title}{" "}
  {highlightedText && (
    <span className="font-semibold text-[#2945FF]">
      {highlightedText}
    </span>
  )}
</h1>

{description && (
  <p className="mt-6 max-w-[620px] font-poppins text-[24px] font-normal leading-[36px] tracking-normal text-[#3F3F46]">
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
                className="h-auto w-full z-0 max-w-[540px] object-contain"
              />

              <div className="absolute left-0 top-40">
                <div
                  className="
      flex items-center gap-4
      rounded-xl
      border-[1.5px] border-white
  bg-[#F3F4F6]
      px-5 py-4
      shadow-sm
      backdrop-blur-[13px]
            opacity-80

    "
                >
                  <div className="flex h-[72px] w-12 shrink-0 items-center justify-center">
                    <span className="text-6xl leading-none">⭐</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-none text-gray-900">
                      99%
                    </h3>

                    <p className="mt-1 whitespace-nowrap text-sm font-medium text-gray-600">
                      Satisfied Students
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-28 -right-18">
                <div
                  className="
      flex items-center gap-4
      rounded-xl
      border-[1.5px] border-white
      bg-[#F3F4F6]
      px-5 py-4
      shadow-sm
      backdrop-blur-[30px]
      opacity-80
    "
                >
                  <div className="flex h-[72px] w-12 shrink-0 items-center justify-center">
                    <span className="text-6xl leading-none">🎓</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-none text-gray-900">
                      36k+
                    </h3>

                    <p className="mt-1 whitespace-nowrap text-sm font-medium text-gray-600">
                      Enrolled Students
                    </p>
                  </div>
                </div>
              </div>


            </div>
          )}
        </div>
      </Container>
    </section>
  );
}