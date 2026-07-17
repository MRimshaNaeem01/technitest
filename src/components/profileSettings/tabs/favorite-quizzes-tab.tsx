"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Search } from "lucide-react";
import { profileFavoriteQuizzes } from "../profile-data";
import { FavoriteQuizCard } from "../components/favorite-quiz-card";

export function FavoriteQuizzesTab() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState(profileFavoriteQuizzes);
  const [search, setSearch] = useState("");

  const filtered = quizzes.filter(
    (q) =>
      q.isFavorite &&
      (q.title.toLowerCase().includes(search.toLowerCase()) ||
        q.category.toLowerCase().includes(search.toLowerCase()))
  );

  function toggleFavorite(id: string) {
    setQuizzes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isFavorite: !q.isFavorite } : q))
    );
  }

  function viewResult(resultUrl: string) {
    router.push(resultUrl);
  }

  const hasFavorites = filtered.length > 0;

  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
        Favorite Quizzes
      </h3>

      {/* Search bar */}
      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#AAA]" />
        <input
          type="text"
          placeholder="Search favorite quizzes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#E7E9F5] bg-[#FAFBFE] py-2.5 pl-10 pr-4 font-poppins text-[13px] text-[#333] outline-none transition-colors placeholder:text-[#BBB] focus:border-[#2945FF]"
        />
      </div>

      {/* Grid or empty */}
      {hasFavorites ? (
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((quiz) => (
            <FavoriteQuizCard
              key={quiz.id}
              quiz={quiz}
              onToggleFavorite={toggleFavorite}
              onViewResult={viewResult}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
            <Heart className="h-7 w-7 text-[#CCC]" />
          </div>
          <p className="font-poppins text-[15px] font-medium text-[#333]">
            No favorites found
          </p>
          <p className="mt-1 font-poppins text-[13px] text-[#999]">
            {search
              ? "No results match your search."
              : "Bookmark quizzes to see them here."}
          </p>
        </div>
      )}
    </div>
  );
}
