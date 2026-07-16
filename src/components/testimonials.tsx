import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import { Container } from "@/components/common/container";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  platform?: string;
  imageSrc: string;
  imageAlt?: string;
};

type TestimonialsProps = {
  eyebrow?: string;
  title?: string;
  testimonials: Testimonial[];
};

export function Testimonials({
  eyebrow = "Testimonials",
  title = "Real People, Real Reviews!",
  testimonials,
}: TestimonialsProps) {
  const t = testimonials[0];

  if (!t) return null;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Container>
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="type-section">
            {title}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <div className="shrink-0">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={t.imageSrc}
                alt={t.imageAlt ?? t.name}
                width={300}
                height={410}
                className="h-[410px] w-[300px] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
              <span className="size-2.5 rounded-full bg-indigo-500" />
              <span className="size-2.5 rounded-full bg-gray-300" />
              <span className="size-2.5 rounded-full bg-gray-300" />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#ECECFF]">
              <Quote className="size-5 text-indigo-500" />
            </div>

            <p className="text-[18px] leading-relaxed text-[#5F6368]">
              {t.review}
            </p>

            <hr className="my-8 border-gray-200" />

            <div className="flex flex-wrap items-center gap-3">
              <div>
                <p className="text-[16px] font-semibold text-[#111111]">{t.name}</p>
                <p className="text-sm text-indigo-500">{t.role}</p>
              </div>

              <span className="hidden h-4 w-px bg-gray-300 sm:block" />

              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-indigo-500 text-indigo-500" />
                ))}
                {t.platform && (
                  <span className="ml-1 text-sm text-gray-500">{t.platform}</span>
                )}
              </div>

              <div className="ml-auto flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <ArrowLeft className="size-4" />
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-[15%] left-[5%] h-10 w-10 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L22 20H2L12 2Z" />
        </svg>
        <svg
          className="absolute right-[8%] top-[20%] h-8 w-8 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 5L19 5L12 19L5 5Z" />
        </svg>
        <svg
          className="absolute bottom-[30%] right-[15%] h-6 w-6 text-[#B8B8E6] opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 3H21V21H3V3Z" />
        </svg>
      </div>
    </section>
  );
}
