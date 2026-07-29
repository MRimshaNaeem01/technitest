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
  badge = " The Leader in Online Learning",
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
    <section className="py-8 sm:py-10">
      <Container>
        <div
          className={`grid items-center gap-6 sm:gap-10 ${hasImage ? "lg:grid-cols-2" : "place-items-center text-center"
            }`}
        >
          {/* Left Content */}
          <div className={`min-w-0 ${hasImage ? "max-w-xl" : "max-w-3xl"}`}>
            {badge && (
            <div className="relative mb-4 inline-flex items-center justify-center">
            <div className="absolute -left-5 top-1/2 h-11 w-8 -translate-y-1/2 bg-[#EEF0FF] rounded-xl [clip-path:polygon(0_0,100%_0,72%_50%,100%_100%,0_100%,28%_50%)]" />
          
            <div className="relative z-10 flex h-12 sm:h-[62px] items-center gap-2 sm:gap-3 bg-white px-5 sm:px-10 shadow-[0_12px_35px_rgba(31,41,55,0.08)]">
              <span className="text-xl sm:text-[28px] leading-none">🏆</span>
          
              <span className="font-poppins whitespace-normal sm:whitespace-nowrap text-[13px] sm:text-[18px] font-normal leading-none text-black">
               {badge}
              </span>
            </div>
          
            <div className="absolute -right-5 top-1/2 h-11 w-8 -translate-y-1/2 bg-[#EEF0FF] [clip-path:polygon(0_0,100%_0,72%_50%,100%_100%,0_100%,28%_50%)] rotate-180" />
          </div>
            )}

            <h1 className="max-w-[700px] font-urbanist type-hero font-medium leading-tight sm:leading-[62px] tracking-normal text-[#0F172A]">
              {title}{" "}
              {highlightedText && (
                <span className="font-semibold text-[#2945FF]">
                  {highlightedText}
                </span>
              )}
            </h1>

            {description && (
              <p className="mt-4 sm:mt-6 max-w-[620px] font-poppins type-body-lg font-normal leading-relaxed sm:leading-[36px] tracking-normal text-[#3F3F46]">
                {description}
              </p>
            )}

            {buttonText && (
              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
                <AppButton
                  href={buttonHref}
                  className="h-12 sm:h-14 rounded-full bg-[#2F43F4] px-6 sm:px-8 font-poppins text-base sm:text-lg font-medium text-white shadow-md transition-all hover:bg-[#2538CC] hover:shadow-lg"
                >
                  {buttonText}
                </AppButton>

                {hasImage && (
                  <div className="flex items-center min-w-0">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-[3px] border-white shadow-sm">
                        <Image
                          src="/user1.png"
                          alt="User 1"
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="relative -ml-4 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-[3px] border-white shadow-sm">
                        <Image
                          src="/user2.png"
                          alt="User 2"
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="relative -ml-4 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-[3px] border-white shadow-sm">
                        <Image
                          src="/user3.png"
                          alt="User 3"
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    </div>
                    <p className="ml-2 sm:ml-3 whitespace-nowrap font-poppins text-xs sm:text-sm text-[#111827]">
                      <span className="font-bold">24k+</span>{" "}
                      <span className="font-medium">Happy Students</span>
                    </p>
                  </div>
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

              <div className="absolute left-26 top-40">
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