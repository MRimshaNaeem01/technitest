"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuizTimer } from "./QuizTimer";

type QuizHeaderProps = {
  quizTitle: string;
  currentQuestion: number;
  totalQuestions: number;
  percentage: number;
  onPrev: () => void;
  onNext: () => void;
  timerDuration: number;
  onTimerTimeUp: () => void;
  timerKey: string;
  isTimerLocked: boolean;
};

export function QuizHeader({
  quizTitle,
  currentQuestion,
  totalQuestions,
  percentage,
  onPrev,
  onNext,
  timerDuration,
  onTimerTimeUp,
  timerKey,
  isTimerLocked,
}: QuizHeaderProps) {
  return (
    <header className="grid  grid-cols-[1fr_1.4fr_1fr] items-center border-b border-[#ECECF5] px-8 py-6 lg:px-14">
      {/* Left — Quiz Name */}
      <div className="min-w-0">
        <p className="mb-1 text-sm font-medium text-brand-link">Quiz Name</p>
        <h1 className="truncate text-[16px] font-semibold text-[#111111]">
          {quizTitle}
        </h1>
      </div>

      {/* Center — Question Navigation + Progress */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            disabled={currentQuestion <= 1}
            aria-label="Previous question"
            className="flex size-9 items-center justify-center rounded-full bg-[#F0F0FF] text-gray-500 transition-colors hover:bg-[#E0E0FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="min-w-[80px] text-center text-sm font-medium text-gray-700">
            {currentQuestion} of {totalQuestions}
          </span>
          <button
            onClick={onNext}
            disabled={currentQuestion >= totalQuestions}
            aria-label="Next question"
            className="flex size-9 items-center justify-center rounded-full bg-[#F0F0FF] text-gray-500 transition-colors hover:bg-[#E0E0FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="w-full max-w-md">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#ECECFF]">
            <div
              className="h-full rounded-full bg-brand-link transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-1.5 text-left text-xs font-medium text-gray-400">
            {percentage}%
          </p>
        </div>
      </div>

      {/* Right — Timer */}
      <div className="flex justify-end">
        <QuizTimer
          key={timerKey}
          duration={timerDuration}
          onTimeUp={onTimerTimeUp}
          isLocked={isTimerLocked}
        />
      </div>
    </header>
  );
}
