import Image from "next/image";
import Link from "next/link";
import { BarChart3, CircleHelp, Clock3, Heart, Star } from "lucide-react";

import { Container } from "@/components/common/container";

export type TrendingQuiz = {
  id: string;
  title: string;
  category: string;
  rating: number;
  level: string;
  duration: string;
  questions: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

type TrendingQuizzesProps = {
  eyebrow?: string;
  title?: string;
  quizzes: TrendingQuiz[];
  className?: string;
};

export function TrendingQuizzes({
  eyebrow = "Quizzes",
  title = "Trending Quizzes",
  quizzes,
  className,
}: TrendingQuizzesProps) {
  return (
    <section className={className ?? "bg-white py-10 sm:py-16 lg:py-20"}>
      <Container>
        <div className="mb-8 sm:mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="type-section font-medium">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => {
            const card = (
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-white min-w-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={quiz.imageSrc}
                    alt={quiz.imageAlt ?? quiz.title}
                    width={400}
                    height={230}
                    className="h-[180px] sm:h-[230px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm">
                    <Heart className="size-5 text-gray-600" />
                  </span>
                </div>

                <div className="px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="type-card font-semibold text-[#111111] min-w-0 truncate">
                      {quiz.title}
                    </h3>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-brand">
                      <Star className="size-4 fill-brand text-brand" />
                      {quiz.rating}
                    </span>
                  </div>

                  <p className="mb-3 sm:mb-4 text-sm italic text-indigo-500">
                    {quiz.category}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 type-small">
                    <span className="flex items-center gap-1">
                      <BarChart3 className="size-3.5" />
                      {quiz.level}
                    </span>
                    <span className="h-3 w-px bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <Clock3 className="size-3.5" />
                      {quiz.duration}
                    </span>
                    <span className="h-3 w-px bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <CircleHelp className="size-3.5" />
                      {quiz.questions}
                    </span>
                  </div>
                </div>
              </div>
            );

            if (quiz.href) {
              return (
                <Link key={quiz.id} href={quiz.href}>
                  {card}
                </Link>
              );
            }

            return <div key={quiz.id}>{card}</div>;
          })}
        </div>

        {/* Carousel dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="size-2.5 rounded-full bg-brand" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
          <span className="size-2.5 rounded-full bg-gray-300" />
        </div>
      </Container>
    </section>
  );
}
