"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Container } from "@/components/common/container";
import { getQuizBySlug } from "@/data/quiz";
import type { QuizResult } from "@/types/quiz";
import { QuizResultSummary } from "@/components/quiz/results/QuizResultSummary";
import { QuizDetailsCard } from "@/components/quiz/results/QuizDetailsCard";
import { CertificateSection } from "@/components/quiz/results/CertificateSection";
import { ResultShareActions } from "@/components/quiz/results/ResultShareActions";
import { IncorrectAnswersAccordion } from "@/components/quiz/results/IncorrectAnswersAccordion";

type ResultPageProps = {
  params: Promise<{ slug: string }>;
};

export default function QuizResultPage({ params }: ResultPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const quiz = getQuizBySlug(slug);

  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(`quiz-result-${slug}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as QuizResult;
        setResult(parsed);
      } catch {
        router.replace(`/categories`);
      }
    } else {
      router.replace(`/categories`);
    }
  }, [slug, router]);

  const handleReAttempt = () => {
    sessionStorage.removeItem(`quiz-result-${slug}`);
    sessionStorage.removeItem(`quiz-face-verified-${slug}`);
    router.push(`/quiz/${slug}/face-authentication`);
  };

  if (!result || !quiz) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-gray-400">Loading results...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#F5F5FF] py-10 sm:py-16">
      <Container>
        <div className="mx-auto max-w-5xl space-y-10">
          {/* Top Result Cards */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <QuizResultSummary result={result} onReAttempt={handleReAttempt} />
            <QuizDetailsCard result={result} />
          </div>

          {/* Certificate Section — Passed Only */}
          {result.passed && (
            <>
              <CertificateSection result={result} />
              <ResultShareActions quizSlug={slug} />
            </>
          )}

          {/* Incorrect Answers Accordion */}
          <IncorrectAnswersAccordion quiz={quiz} result={result} />
        </div>
      </Container>
    </section>
  );
}
