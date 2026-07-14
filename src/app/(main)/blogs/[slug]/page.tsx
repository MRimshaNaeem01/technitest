import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, User } from "lucide-react";

import { Container } from "@/components/common/container";
import { BlogHero } from "@/components/blogs/blog-hero";
import { TableOfContents } from "@/components/blogs/table-of-contents";
import { BlogSearch } from "@/components/blogs/blog-search";

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

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Blog Not Found</h1>
          <p className="mt-2 text-gray-500">The blog post you are looking for does not exist.</p>
          <Link href="/blogs" className="mt-6 inline-block text-brand hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogHero title={post.title} />

      <div className="relative z-10 -mt-20">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="min-w-0">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="h-3 w-px bg-gray-300" />
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-gray-600">
                Taking online quizzes before applying for jobs can give you a
                significant edge in today&apos;s competitive market. Here are
                the top reasons why you should start testing your skills today
                before submitting your next job application.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Employers are increasingly looking for candidates who can
                demonstrate their knowledge through verified assessments rather
                than just listing qualifications on a resume.
              </p>

              <h2 className="mt-10 flex items-center gap-2 text-xl font-bold text-[#111]">
                <ArrowRight className="h-5 w-5 text-brand" />
                Insights That Make You Smarter
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Online quizzes help you identify knowledge gaps, reinforce what
                you already know, and build confidence in your abilities. They
                provide immediate feedback so you can focus your learning where
                it matters most.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Whether you are preparing for a certification exam, brushing up
                on industry fundamentals, or exploring a new field, structured
                quizzes offer a proven path to mastery.
              </p>

              <h2 className="mt-10 flex items-center gap-2 text-xl font-bold text-[#111]">
                <ArrowRight className="h-5 w-5 text-brand" />
                Insights That Transform Your Skills
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Skill-based learning is transforming how professionals grow
                their careers. By taking targeted quizzes, you can validate your
                expertise and earn certificates that employers trust.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                TechniTest offers a wide range of quiz categories from IT and
                Data Science to Digital Marketing and Business Management. Each
                quiz is designed by industry professionals to ensure relevance
                and quality.
              </p>

              <h2 className="mt-10 flex items-center gap-2 text-xl font-bold text-[#111]">
                <ArrowRight className="h-5 w-5 text-brand" />
                Learn, Grow, and Succeed
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The journey of learning never stops. With TechniTest, you can
                track your progress, earn verified certificates, and showcase
                your achievements with confidence.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Join thousands of learners taking step-by-step skill-based
                quizzes in IT, English, Business, and more. Start your learning
                journey today.
              </p>

              <h2 className="mt-10 flex items-center gap-2 text-xl font-bold text-[#111]">
                <ArrowRight className="h-5 w-5 text-brand" />
                The Future of Learning Is Here
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Micro-learning, instant feedback, and digital certification are
                reshaping education. TechniTest is at the forefront of this
                transformation, making quality assessment accessible to
                everyone, anywhere.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Whether you are a student, job-seeker, or curious learner,
                TechniTest helps you level up with every click. Take your first
                quiz today and see the difference.
              </p>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </article>

            <aside className="flex flex-col gap-6 lg:pt-12">
              <div className="lg:sticky lg:top-28 lg:space-y-6">
                <TableOfContents />
                <BlogSearch />
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
