"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { Container } from "@/components/common/container";
import { BlogCard } from "@/components/blogs/blog-card";
import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";
import { cn } from "@/lib/utils";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Reasons to Take Online Quizzes Before Applying for Jobs",
    image: "/trendingQuiz/quiz1.png",
    date: "02 January 2024",
    author: "Thumanah",
    slug: "top-5-reasons-online-quizzes-before-jobs",
  },
  {
    id: 2,
    title: "How to Earn a Certificate in Under 10 Minutes – No Signup Required!",
    image: "/trendingQuiz/quiz2.png",
    date: "15 December 2023",
    author: "Sarah",
    slug: "earn-certificate-under-10-minutes",
  },
  {
    id: 3,
    title: "Beginner vs. Advanced Quizzes – Which One Should You Take?",
    image: "/trendingQuiz/quiz3.png",
    date: "28 November 2023",
    author: "Ahmed",
    slug: "beginner-vs-advanced-quizzes",
  },
  {
    id: 4,
    title: "How Online Certificates Can Boost Your Resume in 2024",
    image: "/aboutUs/img1.png",
    date: "10 November 2023",
    author: "Thumanah",
    slug: "online-certificates-boost-resume",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Skill-Based Learning for Career Growth",
    image: "/aboutUs/img2.png",
    date: "25 October 2023",
    author: "Amina",
    slug: "ultimate-guide-skill-based-learning",
  },
  {
    id: 6,
    title: "5 Minutes to a New Skill: Micro-Learning in the Digital Age",
    image: "/aboutUs/img3.png",
    date: "12 October 2023",
    author: "John",
    slug: "micro-learning-digital-age",
  },
];

const POSTS_PER_PAGE = 3;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f5f0f8] px-4 pb-20 pt-24 md:pb-28 md:pt-32">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#d8c4e8]/30 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-10 h-40 w-40 rounded-full bg-brand/5 blur-2xl" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 h-32 w-32 rounded-full bg-[#d8c4e8]/20 blur-2xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Breadcrumb */}
          <div className="mb-6 flex justify-center">
            <BannerBreadcrumb currentPage="Blogs" />
          </div>

          <h1 className="text-3xl font-bold leading-tight text-[#111] md:text-4xl lg:text-5xl">
            Latest Insights, Tips & Guides
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Stay updated with quizzes, certifications, career advice & online
            learning trends.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16">
        <Container>
          {/* Section heading */}
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium text-brand">
              Latest From Our Blog
            </p>
            <h2 className="text-2xl font-semibold text-[#111] md:text-3xl">
              Insights That Make You Smarter
            </h2>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-16 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg text-sm transition-colors",
                  currentPage <= 1
                    ? "cursor-not-allowed text-gray-300"
                    : "bg-gray-100 text-foreground hover:bg-gray-200",
                )}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                    page === currentPage
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200",
                  )}
                >
                  {page.toString().padStart(2, "0")}
                </button>
              ))}

              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg text-sm transition-colors",
                  currentPage >= totalPages
                    ? "cursor-not-allowed text-gray-300"
                    : "bg-gray-100 text-foreground hover:bg-gray-200",
                )}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </Container>
      </section>
    </>
  );
}
