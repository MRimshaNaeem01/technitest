import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import type { QuizResult } from "@/types/quiz";

type QuizResultSummaryProps = {
  result: QuizResult;
  onReAttempt: () => void;
};

export function QuizResultSummary({ result, onReAttempt }: QuizResultSummaryProps) {
  return (
    <div className="flex min-h-0 flex-col rounded-[20px] bg-white px-8 py-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] lg:min-h-[600px]">
      <div>
        <h2 className="mb-1 text-[20px] font-bold text-[#07104F]">Your Quiz Results</h2>
        <p className="mb-8 text-sm text-[#777]">Well done! Here&apos;s how you performed.</p>

        {/* Pass/Fail Icon */}
        <div className="mb-8 flex flex-col items-center">
          {result.passed ? (
            <>
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="size-12 text-green-500" />
              </div>
              <span className="text-2xl font-bold text-green-600">Passed</span>
            </>
          ) : (
            <>
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-red-50">
                <XCircle className="size-12 text-red-500" />
              </div>
              <span className="text-2xl font-bold text-red-500">Failed</span>
            </>
          )}
        </div>

        {/* Score Boxes */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#F5F5FF] px-4 py-5 text-center">
            <p className="mb-1 text-xs font-medium text-[#777]">Score Achieved</p>
            <p className="text-2xl font-bold text-[#2F3CFF]">
              {result.correctAnswers} / {result.totalQuestions}
            </p>
          </div>
          <div className="rounded-xl bg-[#F5F5FF] px-4 py-5 text-center">
            <p className="mb-1 text-xs font-medium text-[#777]">Percentage</p>
            <p className="text-2xl font-bold text-[#2F3CFF]">{result.percentage}%</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-y-5 border-t border-gray-100 pt-6">
          <div className="text-center">
            <p className="text-xs text-[#777]">Total Questions</p>
            <p className="mt-1 text-xl font-bold text-[#07104F]">{result.totalQuestions}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#777]">Skipped Questions</p>
            <p className="mt-1 text-xl font-bold text-[#07104F]">
              {String(result.skippedQuestions).padStart(2, "0")}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#777]">Incorrect Answers</p>
            <p className="mt-1 text-xl font-bold text-[#07104F]">
              {String(result.incorrectAnswers).padStart(2, "0")}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#777]">Right Questions</p>
            <p className="mt-1 text-xl font-bold text-[#07104F]">{result.correctAnswers}</p>
          </div>
        </div>
      </div>

      {/* Re-Attempt */}
      <div className="mt-auto pt-8">
        <button
          onClick={onReAttempt}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2F3CFF] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2530CC]"
        >
          <RotateCcw className="size-4" />
          Re-Attempt
        </button>
      </div>
    </div>
  );
}
