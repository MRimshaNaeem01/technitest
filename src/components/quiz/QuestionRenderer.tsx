"use client";

import type { QuizQuestion } from "@/types/quiz";
import { cn } from "@/lib/utils";

type QuestionRendererProps = {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelect: (answerId: string) => void;
  isLocked: boolean;
};

export function QuestionRenderer({
  question,
  selectedAnswer,
  onSelect,
  isLocked,
}: QuestionRendererProps) {
  return (
    <div>
      <p className="mb-10 text-[24px] font-medium leading-[1.4] text-[#111111] sm:text-[28px]">
        {question.question}
      </p>

      <div className="space-y-1">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;

          return (
            <label
              key={option.id}
              className={cn(
                "flex cursor-pointer items-center gap-6 rounded-lg py-4 transition-colors",
                !isLocked && "hover:bg-gray-50",
                isLocked && "cursor-not-allowed opacity-60"
              )}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={isSelected}
                onChange={() => !isLocked && onSelect(option.id)}
                disabled={isLocked}
                className="h-6 w-6 shrink-0 accent-[#2F3CFF]"
              />
              <span className="text-[18px] text-black sm:text-[20px]">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {isLocked && (
        <p className="mt-6 text-center text-sm text-red-500">
          Time expired for this question.
        </p>
      )}
    </div>
  );
}
