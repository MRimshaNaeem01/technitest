"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type QuizPaginationProps = {
  totalQuestions: number;
  currentQuestionIndex: number;
  questionIds: string[];
  answeredQuestionIds: string[];
  skippedQuestionIds?: string[];
  expiredQuestionIds?: string[];
  visiblePageCount?: number;
  onQuestionChange: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function QuizPagination({
  totalQuestions,
  currentQuestionIndex,
  questionIds,
  answeredQuestionIds,
  skippedQuestionIds = [],
  expiredQuestionIds = [],
  visiblePageCount = 15,
  onQuestionChange,
  onPrevious,
  onNext,
}: QuizPaginationProps) {
  const attemptedCount = useMemo(
    () =>
      answeredQuestionIds.filter(
        (id) => id !== undefined && id !== null && id !== ""
      ).length,
    [answeredQuestionIds]
  );

  const rangeStart = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    let start = currentQuestionIndex - half;
    if (start < 0) start = 0;
    if (start + visiblePageCount > totalQuestions) {
      start = Math.max(0, totalQuestions - visiblePageCount);
    }
    return start;
  }, [currentQuestionIndex, visiblePageCount, totalQuestions]);

  const visibleQuestions = useMemo(() => {
    const end = Math.min(rangeStart + visiblePageCount, totalQuestions);
    const items: number[] = [];
    for (let i = rangeStart; i < end; i++) {
      items.push(i);
    }
    return items;
  }, [rangeStart, visiblePageCount, totalQuestions]);

  const answeredSet = useMemo(
    () => new Set(answeredQuestionIds),
    [answeredQuestionIds]
  );
  const skippedSet = useMemo(
    () => new Set(skippedQuestionIds),
    [skippedQuestionIds]
  );
  const expiredSet = useMemo(
    () => new Set(expiredQuestionIds),
    [expiredQuestionIds]
  );

  return (
    <div className="mt-10">
      <div className="flex items-center gap-1 overflow-x-auto pb-2 sm:justify-center">
        <button
          onClick={onPrevious}
          disabled={currentQuestionIndex <= 0}
          aria-label="Previous question"
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors",
            currentQuestionIndex <= 0
              ? "cursor-not-allowed bg-gray-300"
              : "bg-gray-900 hover:bg-gray-700"
          )}
        >
          <ChevronLeft className="size-4" />
        </button>

        {visibleQuestions.map((idx) => {
          const questionId = questionIds[idx];
          const isCurrent = idx === currentQuestionIndex;
          const isAnswered = answeredSet.has(questionId);
          const isSkipped = skippedSet.has(questionId);
          const isExpired = expiredSet.has(questionId);

          let bgClass = "bg-[#F0F0FF] text-gray-700";
          if (isCurrent) {
            bgClass = "bg-brand-link text-white";
          } else if (isAnswered) {
            bgClass = "bg-brand-link/10 text-brand-link";
          } else if (isSkipped) {
            bgClass = "bg-[#FFF3E0] text-[#E67E22]";
          } else if (isExpired) {
            bgClass = "bg-red-50 text-red-400";
          }

          return (
            <button
              key={idx}
              onClick={() => onQuestionChange(idx)}
              aria-label={`Go to question ${idx + 1}`}
              aria-current={isCurrent ? "true" : undefined}
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors",
                bgClass
              )}
            >
              {String(idx + 1).padStart(2, "0")}
            </button>
          );
        })}

        <button
          onClick={onNext}
          disabled={currentQuestionIndex >= totalQuestions - 1}
          aria-label="Next question"
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors",
            currentQuestionIndex >= totalQuestions - 1
              ? "cursor-not-allowed bg-gray-300"
              : "bg-gray-900 hover:bg-gray-700"
          )}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        Attempted Question {attemptedCount} out of {totalQuestions}
      </p>
    </div>
  );
}
