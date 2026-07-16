"use client";

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
    <header className="grid min-h-[115px] grid-cols-[1fr_1.2fr_1fr] items-center gap-8 border-b border-[#ECEEFF] px-[60px] py-[24px] max-lg:grid-cols-1 max-lg:gap-6 max-lg:py-6">
      {/* Left — Quiz Name */}
      <div className="min-w-0 max-lg:text-center">
        <p className="font-poppins text-[13px] font-medium text-[#2945FF]">
          Quiz Name
        </p>
        <h1
          className="mt-2 max-w-[280px] truncate font-poppins text-[16px] font-medium text-[#111111] max-lg:mx-auto"
          title={quizTitle}
        >
          {quizTitle}
        </h1>
      </div>

      {/* Center — Progress */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onPrev}
            disabled={currentQuestion <= 1}
            aria-label="Previous question"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4FF] text-gray-500 transition-colors hover:bg-[#E0E0FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="text-[13px] font-medium text-[#111111]">
            {currentQuestion} of {totalQuestions}
          </span>
          <button
            onClick={onNext}
            disabled={currentQuestion >= totalQuestions}
            aria-label="Next question"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4FF] text-gray-500 transition-colors hover:bg-[#E0E0FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="mt-3 h-[8px] w-full max-w-[360px] overflow-hidden rounded-full bg-[#E9EAFF]">
          <div
            className="h-full rounded-full bg-[#2945FF] transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="mt-1 text-[11px] text-[#6B7280]">
          {percentage}%
        </p>
      </div>

      {/* Right — Timer */}
      <div className="flex justify-end max-lg:justify-center">
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
