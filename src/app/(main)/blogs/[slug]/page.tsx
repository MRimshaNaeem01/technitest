import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, User } from "lucide-react";

import { Container } from "@/components/common/container";
import { BlogHero } from "@/components/blogs/blog-hero";
import { TableOfContents } from "@/components/blogs/table-of-contents";
import { BlogSearch } from "@/components/blogs/blog-search";
import { ProsConsSection } from "@/components/blogs/ProsConsSection";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Technitest Blog`,
    description: `Read ${title} on the Technitest blog. Tips, guides, and insights on online quizzes, certifications, and skill-based learning.`,
    openGraph: {
      title: `${title} | Technitest Blog`,
      description: `Read ${title} on the Technitest blog. Tips, guides, and insights on online quizzes and certifications.`,
      type: "article",
    },
    keywords: [
      "Technitest blog",
      "online quizzes",
      "skill learning",
      "certificates",
      "career tips",
      "blog post",
    ],
  };
}

const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Reasons to Take Online Quizzes Before Applying for Jobs",
    image: "/trendingQuiz/quiz1.png",
    date: "02 January 2024",
    author: "Thumanah",
    slug: "top-5-reasons-online-quizzes-before-jobs",
    prosCons: {
      prosDescription:
        "Online quizzes offer a fast, accessible way to validate your skills and stand out in the job market. They provide immediate feedback and verifiable results that employers trust.",
      consDescription:
        "While online quizzes are valuable, they have limitations. They may not fully replace deeper assessments and require careful platform selection to ensure credibility.",
      pros: [
        {
          id: "pros-1",
          text: "24/7 Accessibility: Customers can book services anytime, even outside business hours.",
        },
        {
          id: "pros-2",
          text: "Professional First Impression: A clean, modern site builds trust and credibility.",
        },
        {
          id: "pros-3",
          text: "Showcase Services & Reviews: Helps build customer confidence and transparency.",
        },
        {
          id: "pros-4",
          text: "Before & After Visuals: Real results shown visually increase trust.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Initial setup may require additional planning and implementation time.",
        },
        {
          id: "cons-2",
          text: "Ongoing updates and maintenance may require extra resources.",
        },
        {
          id: "cons-3",
          text: "Some users may need time to adjust to the new experience.",
        },
        {
          id: "cons-4",
          text: "Advanced functionality may increase development costs.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "How to Earn a Certificate in Under 10 Minutes – No Signup Required!",
    image: "/trendingQuiz/quiz2.png",
    date: "15 December 2023",
    author: "Sarah",
    slug: "earn-certificate-under-10-minutes",
    prosCons: {
      prosDescription:
        "Earning a certificate has never been faster. TechniTest lets you complete quizzes and get certified in minutes, with no signup required.",
      consDescription:
        "Quick certifications are convenient but may carry less weight than longer, more comprehensive programs in certain industries.",
      pros: [
        {
          id: "pros-1",
          text: "Fast Completion: Finish a quiz and earn your certificate in under 10 minutes.",
        },
        {
          id: "pros-2",
          text: "No Signup Required: Start immediately without creating an account.",
        },
        {
          id: "pros-3",
          text: "Verified Results: Get a shareable certificate that employers can verify.",
        },
        {
          id: "pros-4",
          text: "Wide Topic Range: Choose from IT, Business, English, and more.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Limited depth: Quick quizzes may not cover topics in full detail.",
        },
        {
          id: "cons-2",
          text: "No structured learning path: Each quiz is standalone.",
        },
        {
          id: "cons-3",
          text: "Recognition varies: Some employers may prefer traditional certifications.",
        },
        {
          id: "cons-4",
          text: "No instructor support: Self-assessment only.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Beginner vs. Advanced Quizzes – Which One Should You Take?",
    image: "/trendingQuiz/quiz3.png",
    date: "28 November 2023",
    author: "Ahmed",
    slug: "beginner-vs-advanced-quizzes",
    prosCons: {
      prosDescription:
        "Choosing the right quiz level ensures you learn effectively. Beginner quizzes build foundations while advanced ones test mastery.",
      consDescription:
        "Selecting the wrong level can lead to frustration or boredom, and not all quizzes clearly indicate difficulty.",
      pros: [
        {
          id: "pros-1",
          text: "Beginner quizzes build confidence and foundational knowledge.",
        },
        {
          id: "pros-2",
          text: "Advanced quizzes validate deep expertise and mastery.",
        },
        {
          id: "pros-3",
          text: "Clear difficulty labels help you choose appropriately.",
        },
        {
          id: "pros-4",
          text: "Progress tracking shows your growth over time.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Difficulty labels may not always match actual complexity.",
        },
        {
          id: "cons-2",
          text: "Advanced quizzes may feel overwhelming without preparation.",
        },
        {
          id: "cons-3",
          text: "No adaptive difficulty to match your exact skill level.",
        },
        {
          id: "cons-4",
          text: "Limited explanations for incorrect answers at advanced levels.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "How Online Certificates Can Boost Your Resume in 2024",
    image: "/aboutUs/img1.png",
    date: "10 November 2023",
    author: "Thumanah",
    slug: "online-certificates-boost-resume",
    prosCons: {
      prosDescription:
        "Online certificates demonstrate initiative and verified skills to potential employers, making your resume stand out in a competitive market.",
      consDescription:
        "Not all online certificates carry equal weight, and some employers may prioritize traditional qualifications.",
      pros: [
        {
          id: "pros-1",
          text: "Shows initiative and commitment to continuous learning.",
        },
        {
          id: "pros-2",
          text: "Provides verifiable proof of specific skills.",
        },
        {
          id: "pros-3",
          text: "Easy to share on LinkedIn and other platforms.",
        },
        {
          id: "pros-4",
          text: "Can differentiate you from other candidates.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Employer recognition varies by industry.",
        },
        {
          id: "cons-2",
          text: "May not replace formal degrees or certifications.",
        },
        {
          id: "cons-3",
          text: "Quality and rigor differ across platforms.",
        },
        {
          id: "cons-4",
          text: "Over-reliance on certificates may overshadow practical experience.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "The Ultimate Guide to Skill-Based Learning for Career Growth",
    image: "/aboutUs/img2.png",
    date: "25 October 2023",
    author: "Amina",
    slug: "ultimate-guide-skill-based-learning",
    prosCons: {
      prosDescription:
        "Skill-based learning focuses on practical, applicable knowledge that directly translates to career advancement and job performance.",
      consDescription:
        "This approach requires self-discipline and may not provide the theoretical depth some roles demand.",
      pros: [
        {
          id: "pros-1",
          text: "Directly applicable to real-world job tasks.",
        },
        {
          id: "pros-2",
          text: "Faster ROI compared to traditional education.",
        },
        {
          id: "pros-3",
          text: "Flexible learning pace and schedule.",
        },
        {
          id: "pros-4",
          text: "Builds a portfolio of demonstrable skills.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Requires strong self-motivation and discipline.",
        },
        {
          id: "cons-2",
          text: "May lack deep theoretical foundations.",
        },
        {
          id: "cons-3",
          text: "Skill relevance can change rapidly in fast-moving fields.",
        },
        {
          id: "cons-4",
          text: "No formal academic recognition in most cases.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "5 Minutes to a New Skill: Micro-Learning in the Digital Age",
    image: "/aboutUs/img3.png",
    date: "12 October 2023",
    author: "John",
    slug: "micro-learning-digital-age",
    prosCons: {
      prosDescription:
        "Micro-learning breaks complex topics into bite-sized sessions, making it easier to fit skill development into a busy schedule.",
      consDescription:
        "Short sessions may not be sufficient for deep understanding of complex subjects.",
      pros: [
        {
          id: "pros-1",
          text: "Fits into any schedule with 5-minute sessions.",
        },
        {
          id: "pros-2",
          text: "High retention through focused, single-topic learning.",
        },
        {
          id: "pros-3",
          text: "Instant feedback keeps you engaged.",
        },
        {
          id: "pros-4",
          text: "Easy to revisit and reinforce specific topics.",
        },
      ],
      cons: [
        {
          id: "cons-1",
          text: "Insufficient for complex or multi-layered topics.",
        },
        {
          id: "cons-2",
          text: "Can feel fragmented without a structured path.",
        },
        {
          id: "cons-3",
          text: "May encourage surface-level learning.",
        },
        {
          id: "cons-4",
          text: "Limited opportunity for deep practice or projects.",
        },
      ],
    },
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

      <div className="relative z-10 -mt-12 md:-mt-20">
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

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
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

              {post.prosCons && (
                <ProsConsSection
                  prosDescription={post.prosCons.prosDescription}
                  consDescription={post.prosCons.consDescription}
                  pros={post.prosCons.pros}
                  cons={post.prosCons.cons}
                  className="mt-10"
                />
              )}

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
