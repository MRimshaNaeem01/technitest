"use client";

import { use, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuestionRenderer } from "@/components/quiz/QuestionRenderer";
import { QuizPagination } from "@/components/quiz/QuizPagination";
import { getQuizBySlug } from "@/data/quiz";

type QuizAttemptPageProps = {
  params: Promise<{ slug: string }>;
};

export default function QuizAttemptPage({ params }: QuizAttemptPageProps) {
  const { slug } = use(params);
  const router = useRouter();

  const quiz = getQuizBySlug(slug);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string>>(
    new Set()
  );
  const [expiredQuestions, setExpiredQuestions] = useState<Set<string>>(
    new Set()
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!quiz) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F6F7FF]">
        <div className="text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-900">
            Quiz Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white hover:bg-brand-hover"
          >
            Go Home
          </button>
        </div>
      </main>
    );
  }

  const isVerified =
    sessionStorage.getItem(`quiz-face-verified-${slug}`) === "true";

  if (!isVerified) {
    router.replace(`/quiz/${slug}/face-authentication`);
    return null;
  }

  const currentQuestion = quiz.questions[currentIndex];
  const isExpired = expiredQuestions.has(currentQuestion.id);
  const selectedAnswer = selectedAnswers[currentQuestion.id] ?? null;
  const isBookmarked = bookmarkedQuestions.has(currentQuestion.id);

  const answeredCount = Object.keys(selectedAnswers).length;
  const percentage = Math.round(
    (answeredCount / quiz.questions.length) * 100
  );

  const handleTimeUp = useCallback(() => {
    setExpiredQuestions((prev) => new Set([...prev, currentQuestion.id]));
  }, [currentQuestion.id]);

  const handleSelectAnswer = (answerId: string) => {
    if (isExpired || isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion.id]: answerId }));
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1)
      setCurrentIndex((i) => i + 1);
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleToggleBookmark = () => {
    setBookmarkedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) {
        next.delete(currentQuestion.id);
      } else {
        next.add(currentQuestion.id);
      }
      return next;
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F7FF] px-10 py-8">
      <div className="w-full overflow-hidden rounded-[16px] bg-white shadow-sm">
        {/* Header */}
        <QuizHeader
          quizTitle={quiz.title}
          currentQuestion={currentIndex + 1}
          totalQuestions={quiz.questions.length}
          percentage={percentage}
          onPrev={handlePrev}
          onNext={handleNext}
          timerDuration={quiz.durationPerQuestion}
          onTimerTimeUp={handleTimeUp}
          timerKey={currentQuestion.id}
          isTimerLocked={isExpired || isSubmitted}
        />

        {/* Question Area */}
        <main className="relative mx-auto w-full max-w-[720px] px-6 pb-[65px] pt-[64px]">
          {/* Bookmark */}
          <button
            onClick={handleToggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
            className="absolute right-[-80px] top-[38px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] max-lg:hidden"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isBookmarked
                  ? "fill-brand text-brand"
                  : "text-gray-800"
              }`}
            />
          </button>

          {/* Mobile bookmark */}
          <button
            onClick={handleToggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
            className="absolute right-6 top-6 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isBookmarked
                  ? "fill-brand text-brand"
                  : "text-gray-800"
              }`}
            />
          </button>

          <QuestionRenderer
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onSelect={handleSelectAnswer}
            isLocked={isExpired || isSubmitted}
          />

          {/* Actions */}
          {!isSubmitted && (
            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={handleSkip}
                disabled={currentIndex >= quiz.questions.length - 1}
                className="h-[46px] min-w-[100px] rounded-full bg-[#F1F1F1] px-8 text-[14px] font-medium text-[#4B5563] transition-colors hover:bg-[#E5E5E5] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Skip
              </button>

              {currentIndex === quiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="h-[46px] min-w-[100px] rounded-full bg-[#F59E0B] px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#D97706]"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="h-[46px] min-w-[100px] rounded-full bg-[#F59E0B] px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#D97706]"
                >
                  Next
                </button>
              )}
            </div>
          )}

          {/* Submission Result */}
          {isSubmitted && (
            <div className="mt-12 rounded-2xl bg-[#F8F8FF] p-8 text-center">
              <h2 className="mb-2 text-lg font-bold text-gray-900">
                Quiz Submitted!
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                You answered {answeredCount} out of {quiz.questions.length}{" "}
                questions.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => router.push("/")}
                  className="rounded-full border-2 border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Go Home
                </button>
                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setSelectedAnswers({});
                    setBookmarkedQuestions(new Set());
                    setExpiredQuestions(new Set());
                    setIsSubmitted(false);
                  }}
                  className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-hover"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Pagination Footer */}
        <div className="border-t border-[#DDE1FF] px-8 py-[26px] text-center">
          <QuizPagination
            totalQuestions={quiz.questions.length}
            currentQuestionIndex={currentIndex}
            questionIds={quiz.questions.map((q) => q.id)}
            answeredQuestionIds={Object.keys(selectedAnswers)}
            expiredQuestionIds={Array.from(expiredQuestions)}
            visiblePageCount={15}
            onQuestionChange={setCurrentIndex}
            onPrevious={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
