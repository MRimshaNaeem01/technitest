import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";
import { Container } from "@/components/common/container";
import { CategoryInnerHero } from "@/components/categoryInnerComponents/category-inner-hero";
import { CategoryFilterSidebar } from "@/components/categoryInnerComponents/category-filter-sidebar";
import { CategoryQuizList } from "@/components/categoryInnerComponents/category-quiz-list";

const categoryLabels: Record<string, string> = {
  "health-wellness": "Health & Wellness",
  "language-logic": "Language Logic",
  management: "Management",
  "smart-engineering": "Smart Engineering",
  "information-technology": "Information Technology",
  "digital-marketing": "Digital Marketing",
  "accounting-iq": "Accounting IQ",
  development: "Development",
  "data-science": "Data Science",
};

const allQuizzes = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  title: [
    "Advanced Marketing Quiz",
    "Engineering Fundamentals",
    "Computer Science Basics",
    "Digital Marketing 101",
    "Business Management Quiz",
    "Data Analytics Fundamentals",
    "Web Development Basics",
    "Network Security Essentials",
  ][i],
  category: [
    "Digital Marketing",
    "Information Technology",
    "Digital Marketing",
    "Digital Marketing",
    "Management",
    "Data Science",
    "Development",
    "Information Technology",
  ][i],
  rating: (4.5 + Math.random() * 0.5).toFixed(1) as unknown as number,
  level: ["Beginner", "Intermediate", "Advanced"][i % 3],
  duration: `${30 + i * 15} min`,
  questions: `${30 + i * 5} Q/A`,
  imageSrc: `/trendingQuiz/quiz${(i % 3) + 1}.png`,
  href: `/categories/health-wellness/advanced-marketing-quiz`,
}));

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = categoryLabels[slug] ?? slug.replace(/-/g, " ");

  const filterCategories = [
    { label: "Health & Wellness", count: 24 },
    { label: "Language", count: 18 },
    { label: "Management", count: 12 },
    { label: "Business", count: 15 },
    { label: "Smart Engineering", count: 20 },
    { label: "IT", count: 22 },
    { label: "Digital Marketing", count: 14 },
    { label: "Math", count: 10 },
  ];

  const filterLevels = [
    { label: "Beginner", count: 45 },
    { label: "Advanced", count: 30 },
    { label: "Medium", count: 25 },
    { label: "Expert Access", count: 15 },
  ];

  return (
    <>
      <CategoryInnerHero
        breadcrumb={<BannerBreadcrumb currentPage={label} />}
        title={`${label} Quizzes`}
        description={`Browse our collection of ${label.toLowerCase()} quizzes designed to test and improve your knowledge.`}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row">
            <CategoryFilterSidebar
              categories={filterCategories}
              levels={filterLevels}
            />
            <CategoryQuizList quizzes={allQuizzes} />
          </div>
        </Container>
      </section>
    </>
  );
}
