"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { QuizOption } from "@/types/quiz";

type ImageQuestionOptionsProps = {
  options: QuizOption[];
  selectedAnswer: string | null;
  onSelect: (answerId: string) => void;
  isLocked: boolean;
};

export function ImageQuestionOptions({
  options,
  selectedAnswer,
  onSelect,
  isLocked,
}: ImageQuestionOptionsProps) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-2">
      {options.map((option, index) => {
        const isSelected = selectedAnswer === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => !isLocked && onSelect(option.id)}
            disabled={isLocked}
            className={cn(
              "relative h-[150px] w-[210px] overflow-hidden rounded-[9px] border-2 transition sm:h-[150px] sm:w-[210px]",
              isLocked && "cursor-not-allowed opacity-60",
              isSelected
                ? "border-[#F59E0B]"
                : "border-transparent hover:border-gray-200"
            )}
          >
            {option.image && (
              <Image
                src={option.image}
                alt={option.label || `Image answer ${index + 1}`}
                fill
                sizes="210px"
                className="object-cover"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
