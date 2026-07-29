import Image from "next/image";
import { Container } from "@/components/common/container";

export type AchievementStat = {
  value: string;
  label: string;
};

type AchievementBannerProps = {
  eyebrow?: string;
  title: string;
  description: string[];
  imageSrc?: string;
  imageAlt?: string;
  stats: AchievementStat[];
};

export function AchievementBanner({
  eyebrow = "About Us",
  title,
  description,
  imageSrc,
  imageAlt = "Achievement image",
  stats,
}: AchievementBannerProps) {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <Container>
        <div
          className={`grid items-center gap-8 sm:gap-12 ${
            imageSrc ? "lg:grid-cols-2" : "place-items-center text-center"
          }`}
        >
          {imageSrc && (
            <div className="relative flex justify-center min-w-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={520}
                height={520}
                className="h-auto w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[430px] object-contain"
              />
            </div>
          )}

          <div className={`min-w-0 ${imageSrc ? "max-w-2xl" : "max-w-3xl"}`}>
            {eyebrow && (
              <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
            )}

            <h2 className="type-section">
              {title}
            </h2>

            <div className="mt-4 sm:mt-6 space-y-4 type-body leading-6 sm:leading-7 text-[#5F6368]">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand">
                    {stat.value}
                  </h3>
                  <p className="mt-1 type-label text-[#111111]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}