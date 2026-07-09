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
    <section className="bg-white py-20">
      <Container>
        <div
          className={`grid items-center gap-12 ${
            imageSrc ? "lg:grid-cols-2" : "place-items-center text-center"
          }`}
        >
          {imageSrc && (
            <div className="relative flex justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={520}
                height={520}
                className="h-auto w-full max-w-[430px] object-contain"
              />
            </div>
          )}

          <div className={imageSrc ? "max-w-2xl" : "max-w-3xl"}>
            {eyebrow && (
              <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
            )}

            <h2 className="text-3xl font-semibold leading-tight text-black md:text-4xl">
              {title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-6 text-gray-700">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-4xl font-semibold text-brand">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-sm text-black">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}