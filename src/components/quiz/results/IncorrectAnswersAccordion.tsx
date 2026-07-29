"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Quiz, QuizResult } from "@/types/quiz";

type IncorrectAnswersAccordionProps = {
  quiz: Quiz;
  result: QuizResult;
};

export function IncorrectAnswersAccordion({
  quiz,
  result,
}: IncorrectAnswersAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const incorrectQuestions = quiz.questions.filter((q) => {
    const userAnswer = result.answers[q.id];
    return userAnswer !== q.correctAnswer;
  });

  if (incorrectQuestions.length === 0) return null;

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold text-[#07104F]">
          Review Your Incorrect Answers ({String(incorrectQuestions.length).padStart(2, "0")})
        </h3>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-[#777] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 px-6 py-4 sm:px-8">
          {incorrectQuestions.map((q, idx) => {
            const userAnswer = result.answers[q.id];
            const userOption = q.options.find((o) => o.id === userAnswer);
            const correctOption = q.options.find((o) => o.id === q.correctAnswer);

            return (
              <div
                key={q.id}
                className={cn(
                  "min-w-0 py-4",
                  idx > 0 && "border-t border-gray-50"
                )}
              >
                <p className="mb-3 text-sm font-medium text-[#07104F]">
                  {idx + 1}. {q.question}
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-red-500">
                    Your answer: <span className="font-medium">{userOption?.label ?? "N/A"}</span>
                  </p>
                  <p className="text-green-600">
                    Correct answer: <span className="font-medium">{correctOption?.label ?? "N/A"}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
