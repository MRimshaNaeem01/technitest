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
};

export function TrendingQuizzes({
  eyebrow = "Quizzes",
  title = "Trending Quizzes",
  quizzes,
}: TrendingQuizzesProps) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => {
            const card = (
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-white">
                <div className="relative overflow-hidden">
                  <Image
                    src={quiz.imageSrc}
                    alt={quiz.imageAlt ?? quiz.title}
                    width={400}
                    height={230}
                    className="h-[230px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm">
                    <Heart className="size-5 text-gray-600" />
                  </span>
                </div>

                <div className="px-4 pb-5 pt-4">
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="text-base font-semibold text-black">
                      {quiz.title}
                    </h3>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-brand">
                      <Star className="size-4 fill-brand text-brand" />
                      {quiz.rating}
                    </span>
                  </div>

                  <p className="mb-4 text-sm italic text-indigo-500">
                    {quiz.category}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500">
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
