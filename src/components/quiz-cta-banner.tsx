import Image from "next/image";

import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";

type QuizCtaBannerProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
};

const DEFAULT_BG = "#ECECFF";

export default function QuizCtaBanner({
  title,
  description,
  buttonText = "Explore Quizzes",
  buttonHref = "/categories",
  imageSrc,
  imageAlt = "Quiz illustration",
  backgroundColor = DEFAULT_BG,
}: QuizCtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor, minHeight: "340px" }}
    >
      <div className="relative py-12 md:py-16 lg:py-0">
        <Container>
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="flex flex-1 flex-col items-center py-6 lg:items-start lg:py-16">
              <h2 className="max-w-[620px] text-center text-4xl font-bold leading-tight text-black md:text-5xl lg:text-left">
                {title}
              </h2>
              {description && (
                <p className="mt-4 max-w-[520px] text-center text-gray-500 lg:text-left">
                  {description}
                </p>
              )}
              <div className="mt-8">
                <AppButton href={buttonHref} size="lg">
                  {buttonText}
                </AppButton>
              </div>
            </div>

            {imageSrc && (
              <div className="relative mt-8 flex justify-center self-end lg:mt-0 lg:w-[400px] lg:justify-end xl:w-[460px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={460}
                  height={500}
                  className="h-auto w-full max-w-[320px] object-contain sm:max-w-[360px] lg:max-w-none"
                  style={{
                    marginBottom: "-40px",
                  }}
                />
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Paper airplane */}
        <svg
          className="absolute left-[8%] top-[18%] h-8 w-8 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>

        {/* Triangle top-right */}
        <svg
          className="absolute right-[12%] top-[12%] h-6 w-6 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L22 20H2L12 2Z" />
        </svg>

        {/* Triangle bottom-left */}
        <svg
          className="absolute bottom-[20%] left-[5%] h-8 w-8 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 5L19 5L12 19L5 5Z" />
        </svg>

        {/* Vertical dotted line */}
        <svg
          className="absolute right-[28%] top-[10%] h-16 w-4 text-[#B8B8E6] opacity-20"
          viewBox="0 0 4 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        >
          <line x1="2" y1="0" x2="2" y2="64" />
        </svg>

        {/* Paper icon */}
        <svg
          className="absolute bottom-[30%] right-[6%] h-7 w-7 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" />
          <path d="M14 2V8H20" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H9H8" />
        </svg>
      </div>
    </section>
  );
}
