"use client";

import type { QuizQuestion } from "@/types/quiz";
import { ImageQuestionOptions } from "./image-question-options";

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
      <p className="max-w-[620px] font-poppins text-[20px] font-medium leading-[1.45] text-black sm:text-[26px]">
        {question.question}
      </p>

      {question.type === "image" ? (
        <div className="mt-10">
          <ImageQuestionOptions
            options={question.options}
            selectedAnswer={selectedAnswer}
            onSelect={onSelect}
            isLocked={isLocked}
          />
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;

            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-5 font-poppins text-[16px] font-medium text-black transition-colors sm:text-[20px] ${
                  isLocked ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={isSelected}
                  onChange={() => !isLocked && onSelect(option.id)}
                  disabled={isLocked}
                  className="h-[18px] w-[18px] shrink-0 cursor-pointer accent-[#2945FF]"
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {isLocked && (
        <p className="mt-5 text-center text-[16px] font-normal text-[#FF2D3D]">
          Time expired for this question.
        </p>
      )}
    </div>
  );
}
