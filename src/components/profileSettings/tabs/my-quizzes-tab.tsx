"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Filter, Clock, BarChart3, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProfileQuiz } from "../profile-types";
import { profileQuizzes } from "../profile-data";

const ITEMS_PER_PAGE = 3;

export function MyQuizzesTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(profileQuizzes.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleQuizzes = profileQuizzes.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
          My Quizzes
        </h3>
        <button className="flex items-center gap-2 rounded-lg border border-[#E2E2E8] bg-white px-4 py-2 font-poppins text-[13px] font-medium text-[#555] transition-colors hover:border-[#F5A000] hover:text-[#F5A000]">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Quiz Cards */}
      <div className="space-y-4">
        {visibleQuizzes.map((quiz) => (
          <QuizHistoryCard key={quiz.id} quiz={quiz} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E2E8] bg-white text-[#666] disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-poppins text-[13px] text-[#666]">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E2E8] bg-white text-[#666] disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function QuizHistoryCard({ quiz }: { quiz: ProfileQuiz }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#ECEEFF] bg-white p-4 sm:flex-row sm:items-center">
      {/* Thumbnail */}
      <div className="relative h-[80px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[80px] sm:w-[120px]">
        <Image
          src={quiz.image}
          alt={quiz.title}
          fill
          className="object-cover"
          sizes="120px"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#F0F0FF] px-2 py-0.5 font-poppins text-[11px] font-medium text-[#2945FF]">
            {quiz.category}
          </span>
          <span className="rounded bg-[#FFF8E6] px-2 py-0.5 font-poppins text-[11px] font-medium text-[#F5A000]">
            {quiz.level}
          </span>
        </div>
        <h4 className="mt-1.5 truncate font-poppins text-[15px] font-semibold text-[#0B0B0B]">
          {quiz.title}
        </h4>
        <p className="mt-0.5 line-clamp-1 font-poppins text-[12px] text-[#888]">
          {quiz.description}
        </p>

        {/* Stats */}
        <div className="mt-2.5 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 text-[#F5A000]" />
            <span className="font-poppins text-[12px] font-medium text-[#333]">
              {quiz.score}/{quiz.maxScore}
            </span>
            <span className="font-poppins text-[12px] text-[#999]">
              ({quiz.percentage}%)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5 text-[#2945FF]" />
            <span className="font-poppins text-[12px] text-[#666]">
              {quiz.totalQuestions} questions
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#999]" />
            <span className="font-poppins text-[12px] text-[#666]">
              {quiz.duration}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {quiz.reportUrl && (
            <button className="font-poppins text-[12px] font-medium text-[#2945FF] hover:underline">
              View Report
            </button>
          )}
          {quiz.certificateUrl && (
            <button className="font-poppins text-[12px] font-medium text-[#2945FF] hover:underline">
              View Certificate
            </button>
          )}
          <button className="rounded-full bg-[#F5A000] px-4 py-1.5 font-poppins text-[12px] font-medium text-white hover:bg-[#E08E00]">
            Re-Attempt
          </button>
        </div>
      </div>

      {/* Status + Date */}
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 font-poppins text-[11px] font-semibold",
            quiz.status === "passed"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-500"
          )}
        >
          {quiz.status === "passed" ? "Passed" : "Failed"}
        </span>
        <span className="font-poppins text-[11px] text-[#999]">
          {quiz.lastAttemptDate}
        </span>
        <span className="font-poppins text-[11px] text-[#999]">
          Attempt {quiz.attemptNumber}/{quiz.totalAttempts}
        </span>
      </div>
    </div>
  );
}
