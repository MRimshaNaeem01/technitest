import Image from "next/image";
import Link from "next/link";
import { BarChart3, CircleHelp, Clock3, Heart, Star } from "lucide-react";

export type Quiz = {
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

type CategoryQuizListProps = {
  quizzes: Quiz[];
};

export function CategoryQuizList({ quizzes }: CategoryQuizListProps) {
  return (
    <div className="flex-1">
      <div className="grid gap-6 sm:grid-cols-2">
        {quizzes.map((quiz) => {
          const card = (
            <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <Image
                  src={quiz.imageSrc}
                  alt={quiz.imageAlt ?? quiz.title}
                  width={400}
                  height={200}
                  className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

      <div className="mt-10 flex items-center justify-center gap-2">
        <button className="flex h-10 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-medium text-white">
          1
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50">
          2
        </button>
        <button className="flex h-10 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
