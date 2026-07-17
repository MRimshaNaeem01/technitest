"use client";

import Image from "next/image";
import { Heart, Clock, Star, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FavoriteQuiz } from "../profile-types";

type FavoriteQuizCardProps = {
  quiz: FavoriteQuiz;
  onToggleFavorite: (id: string) => void;
  onViewResult: (resultUrl: string) => void;
};

export function FavoriteQuizCard({
  quiz,
  onToggleFavorite,
  onViewResult,
}: FavoriteQuizCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[6px] border border-[#E7E9F5] bg-white">
      {/* Image */}
      <div className="relative h-[160px] w-full shrink-0">
        <Image
          src={quiz.image}
          alt={quiz.title}
          fill
          className="object-cover"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(quiz.id)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              quiz.isFavorite ? "fill-[#E05A5A] text-[#E05A5A]" : "text-[#CCC]"
            )}
          />
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-[#2945FF] px-3 py-0.5 font-poppins text-[11px] font-medium text-white">
          {quiz.level}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="font-poppins text-[11px] font-medium text-[#F5A000]">
          {quiz.category}
        </p>
        <h4 className="mt-1 font-poppins text-[15px] font-semibold leading-snug text-[#0B0B0B]">
          {quiz.title}
        </h4>
        <p className="mt-1 font-poppins text-[12px] leading-relaxed text-[#888] line-clamp-2">
          {quiz.description}
        </p>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[#666]">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#999]" />
            <span className="font-poppins text-[11px]">{quiz.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-[#999]" />
            <span className="font-poppins text-[11px]">
              {quiz.totalQuestions} Qs
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#F5A000] text-[#F5A000]" />
            <span className="font-poppins text-[11px] font-medium text-[#333]">
              {quiz.rating}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onViewResult(quiz.resultUrl)}
            className="w-full rounded-full bg-[#2945FF] py-2 font-poppins text-[13px] font-medium text-white transition-colors hover:bg-[#1a30e0]"
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
}
