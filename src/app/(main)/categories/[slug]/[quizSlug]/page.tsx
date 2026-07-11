"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, CircleHelp, Clock3, Heart, Star } from "lucide-react";

import { Container } from "@/components/common/container";
import { QuizDetailHero } from "@/components/categoryInnerComponents/quiz-detail-hero";
import { QuizInfoCard } from "@/components/categoryInnerComponents/quiz-info-card";
import { QuizNoteModal } from "@/components/categoryInnerComponents/quiz-note-modal";
import { QuizReviews } from "@/components/categoryInnerComponents/quiz-reviews";

const reviews = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "SJ",
    rating: 5,
    date: "2 weeks ago",
    text: "This quiz was incredibly well-structured and challenging. I learned a lot about marketing principles that I can apply directly to my work.",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "MC",
    rating: 5,
    date: "1 month ago",
    text: "Great selection of questions that really test your understanding. The detailed feedback after each question is very helpful.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "ER",
    rating: 4,
    date: "2 months ago",
    text: "I enjoyed the practical approach to the quiz. It covers both foundational and advanced topics thoroughly.",
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "DK",
    rating: 5,
    date: "3 months ago",
    text: "Perfect for anyone looking to validate their skills. The certificate is a great addition to my LinkedIn profile.",
  },
  {
    id: "5",
    name: "Jessica Patel",
    avatar: "JP",
    rating: 5,
    date: "3 months ago",
    text: "The quiz difficulty is well-balanced. It's challenging enough to be meaningful but not overwhelming.",
  },
];

const relatedQuizzes = [
  {
    id: "1",
    title: "Advanced Marketing Quiz",
    category: "Digital Marketing",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz1.png",
  },
  {
    id: "2",
    title: "Engineering Fundamentals",
    category: "Information Technology",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz2.png",
  },
  {
    id: "3",
    title: "Computer Science Basics",
    category: "Digital Marketing",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz3.png",
  },
];

export default function QuizDetailPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <QuizDetailHero
        breadcrumb={
          <>
            Home <span className="mx-1">›</span> Categories{" "}
            <span className="mx-1">›</span> Health & Wellness{" "}
            <span className="mx-1">›</span>{" "}
            <span className="text-black">Advanced Marketing Quiz</span>
          </>
        }
        imageSrc="/trendingQuiz/quiz1.png"
      />
      <QuizInfoCard
        title="Advanced Marketing Quiz BBA Marketing Principles"
        category="Business & Management"
        rating={4.9}
        difficulty="Trending"
        description="Test your knowledge of advanced marketing principles, strategies, and best practices. This comprehensive quiz covers brand management, digital marketing, consumer behavior, and market analysis."
        details={[
          { label: "Quiz Category", value: "Business & Management" },
          { label: "Skill Category", value: "Marketing Principles" },
          { label: "Quiz Question", value: "30" },
          { label: "Quiz Duration", value: "45 Minutes" },
          { label: "Certificate Level", value: "Advanced" },
        ]}
        ctaText="Start Quiz"
        ctaHref="#"
      />
      <section className="bg-white pb-20">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold text-black">
            Related Quizzes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={quiz.imageSrc}
                    alt={quiz.title}
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm">
                    <Heart className="size-5 text-gray-600" />
                  </span>
                </div>
                <div className="px-4 pb-5 pt-4">
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="text-base font-semibold text-black">
                      {quiz.title}
                    </h3>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-brand">
                      <Star className="size-4 fill-brand text-brand" />
                      {quiz.rating}
                    </span>
                  </div>
                  <p className="mb-4 text-sm italic text-indigo-500">
                    {quiz.category}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BarChart3 className="size-3.5" />
                      {quiz.level}
                    </span>
                    <span className="h-3 w-px bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <Clock3 className="size-3.5" />
                      {quiz.duration}
                    </span>
                    <span className="h-3 w-px bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <CircleHelp className="size-3.5" />
                      {quiz.questions}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-gray-300" />
            <span className="size-2.5 rounded-full bg-gray-300" />
            <span className="size-2.5 rounded-full bg-gray-300" />
            <span className="size-2.5 rounded-full bg-gray-300" />
          </div>
        </Container>
      </section>
      <QuizReviews reviews={reviews} />
      <QuizNoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onProceed={() => setModalOpen(false)}
      />
    </>
  );
}
