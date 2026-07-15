"use client";

import { use, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuestionRenderer } from "@/components/quiz/QuestionRenderer";
import { QuizPagination } from "@/components/quiz/QuizPagination";
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
  const [showReviewScreen, setShowReviewScreen] = useState(false);

  if (!quiz) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
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
  const unansweredCount = quiz.questions.length - answeredCount;
  const percentage = Math.round(
    (answeredCount / quiz.questions.length) * 100
  );

  const handleTimeUp = useCallback(() => {
    setExpiredQuestions((prev) => new Set([...prev, currentQuestion.id]));
  }, [currentQuestion.id]);

  const handleSelectAnswer = (answerId: string) => {
    if (isExpired) return;
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

  const handleFinalSubmit = () => {
    const totalQuestions = quiz.questions.length;
    const correctAnswers = quiz.questions.reduce((count, question) => {
      return selectedAnswers[question.id] === question.correctAnswer
        ? count + 1
        : count;
    }, 0);
    const skippedQuestions = totalQuestions - Object.keys(selectedAnswers).length;
    const incorrectAnswers = totalQuestions - correctAnswers - skippedQuestions;
    const calcPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = calcPercentage >= 60;

    const result: QuizResult = {
      quizId: quiz.id,
      quizSlug: quiz.slug,
      quizName: quiz.title,
      level: quiz.level,
      category: quiz.category,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      skippedQuestions,
      percentage: calcPercentage,
      passed,
      durationSeconds: totalQuestions * quiz.durationPerQuestion,
      dateTaken: new Date().toISOString(),
      attemptsTaken: 1,
      attemptsRemaining: 2,
      answers: { ...selectedAnswers },
    };

    sessionStorage.setItem(`quiz-result-${quiz.slug}`, JSON.stringify(result));
    router.push(`/quiz/${quiz.slug}/result`);
  };

  const handleSubmitClick = () => {
    if (unansweredCount > 0) {
      setShowReviewScreen(true);
    } else {
      handleFinalSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
        isTimerLocked={showReviewScreen}
      />

      {/* Question Area */}
      <main className="relative min-h-[calc(100vh-140px)] px-6 py-16 sm:px-10 lg:px-16">
        {/* Bookmark */}
        {!showReviewScreen && (
          <button
            onClick={handleToggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
            className="absolute right-6 top-10 flex size-12 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:shadow-lg sm:right-12"
          >
            <Heart
              className={`size-5 transition-colors ${
                isBookmarked
                  ? "fill-brand text-brand"
                  : "text-gray-800"
              }`}
            />
          </button>
        )}

        <div className="mx-auto w-full max-w-[760px]">
          {/* Review Screen */}
          {showReviewScreen ? (
            <div className="flex flex-col items-center py-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-[#07104F]">
                You have not answered {unansweredCount} questions
              </h2>

              <p className="mb-8 text-base text-[#777]">
                Attempted Questions{" "}
                <span className="font-semibold text-[#2F3CFF]">
                  {answeredCount}
                </span>{" "}
                out of {quiz.questions.length}
              </p>

              <p className="mb-8 max-w-md text-sm leading-relaxed text-[#777]">
                Questions left unanswered will be marked as incorrect. You can
                continue the quiz or end it now.
              </p>

              <button
                onClick={handleFinalSubmit}
                className="rounded-full bg-[#F5A000] px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E09000]"
              >
                Proceed Anyway
              </button>
            </div>
          ) : (
            <>
              <QuestionRenderer
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelect={handleSelectAnswer}
                isLocked={isExpired}
              />

              {/* Actions */}
              <div className="mt-14 flex items-center gap-4">
                <button
                  onClick={handleSkip}
                  disabled={currentIndex >= quiz.questions.length - 1}
                  className="min-w-[140px] rounded-full bg-[#F1F1F1] px-8 py-4 text-[16px] font-medium text-gray-600 transition-colors hover:bg-[#E5E5E5] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Skip
                </button>

                {currentIndex === quiz.questions.length - 1 ? (
                  <button
                    onClick={handleSubmitClick}
                    className="min-w-[140px] rounded-full bg-[#F5A000] px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#E09000]"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="min-w-[140px] rounded-full bg-[#F5A000] px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#E09000]"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}

          {/* Pagination */}
          <div className="mt-12 border-t border-gray-100 pt-6">
            <QuizPagination
              totalQuestions={quiz.questions.length}
              currentQuestionIndex={currentIndex}
              questionIds={quiz.questions.map((q) => q.id)}
              answeredQuestionIds={Object.keys(selectedAnswers)}
              expiredQuestionIds={Array.from(expiredQuestions)}
              visiblePageCount={15}
              onQuestionChange={(idx) => {
                setShowReviewScreen(false);
                setCurrentIndex(idx);
              }}
              onPrevious={() => {
                setShowReviewScreen(false);
                handlePrev();
              }}
              onNext={() => {
                setShowReviewScreen(false);
                handleNext();
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
