"use client";

import { use, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuestionRenderer } from "@/components/quiz/QuestionRenderer";
import { QuizPagination } from "@/components/quiz/QuizPagination";
import { QuizSubmitConfirmation } from "@/components/quiz/quiz-submit-confirmation";
import { getQuizBySlug } from "@/data/quiz";
import type { QuizResult } from "@/types/quiz";

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
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);

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

  const submitQuiz = () => {
    const totalQuestions = quiz.questions.length;
    const correctAnswers = quiz.questions.filter(
      (q) => selectedAnswers[q.id] === q.correctAnswer
    ).length;
    const skippedQuestions = totalQuestions - answeredCount;
    const incorrectAnswers = answeredCount - correctAnswers;
    const pct = Math.round((correctAnswers / totalQuestions) * 100);

    const result: QuizResult = {
      quizId: quiz.id,
      quizSlug: slug,
      quizName: quiz.title,
      level: quiz.level,
      category: quiz.category,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      skippedQuestions,
      percentage: pct,
      passed: pct >= 60,
      durationSeconds: 0,
      dateTaken: new Date().toISOString(),
      attemptsTaken: 1,
      attemptsRemaining: 2,
      answers: selectedAnswers,
    };

    sessionStorage.setItem(`quiz-result-${slug}`, JSON.stringify(result));
    setIsSubmitted(true);
    setShowSubmitConfirmation(false);
    router.push(`/quiz/${slug}/result`);
  };

  const handleSubmit = () => {
    if (answeredCount < quiz.questions.length) {
      setShowSubmitConfirmation(true);
    } else {
      submitQuiz();
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6F7FF] px-10 py-8 max-md:px-4 max-md:py-4">
      <div className="flex h-[calc(100vh-110px)] min-h-[700px] max-h-[820px] w-full max-md:h-auto max-md:min-h-screen max-md:rounded-none flex-col overflow-hidden rounded-[12px] border border-[#E8E9F8] bg-white max-md:border-0">
        {/* Header — fixed */}
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

        {/* Main Content — flexible */}
        {showSubmitConfirmation ? (
          <div className="flex min-h-0 flex-1 flex-col border-t border-[#E8E9F8]">
            <QuizSubmitConfirmation
              answeredQuestions={answeredCount}
              totalQuestions={quiz.questions.length}
              onProceed={submitQuiz}
            />
          </div>
        ) : !isSubmitted ? (
          <main className="relative flex min-h-0 flex-1 overflow-y-auto max-md:overflow-y-auto">
            <div className="mx-auto w-full max-w-[900px] px-8 py-12 max-md:px-5 max-md:py-8">
              <div className="relative mx-auto w-full max-w-[760px]">
                {/* Bookmark */}
                <button
                  onClick={handleToggleBookmark}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
                  className="absolute right-[-60px] top-0 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] max-lg:hidden"
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
                  className="absolute right-0 top-0 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] lg:hidden"
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
                  isLocked={isExpired}
                />

                {/* Actions */}
                <div className="mt-10 flex items-center gap-3">
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
              </div>
            </div>
          </main>
        ) : (
          <div className="flex min-h-0 flex-1" />
        )}

        {/* Pagination Footer — fixed */}
        <footer className="flex min-h-[100px] shrink-0 flex-col items-center justify-center border-t border-[#E8E9F8] px-6 py-5">
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
        </footer>
      </div>
    </div>
  );
}
