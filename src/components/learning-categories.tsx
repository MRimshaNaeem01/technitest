import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export type LearningCategory = {
  title: string;
  quizzes: string;
  icon: string;
  href: string;
};

type LearningCategoriesProps = {
  eyebrow?: string;
  title?: string;
  categories: LearningCategory[];
  viewAllHref?: string;
  className?: string;
};

export function LearningCategories({
  eyebrow = "Categories",
  title = "Unlock Your Learning Potential",
  categories,
  viewAllHref = "/categories",
  className,
}: LearningCategoriesProps) {
  return (
    <section className={`py-10 sm:py-16 ${className ?? ""}`}>
      <div className="mb-8 sm:mb-10 text-center">
        <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
        <h2 className="type-section font-medium">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-1rem)]"
          >
            <Card className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <CardContent className="flex h-[140px] sm:h-[160px] flex-col items-center justify-center text-center min-w-0 overflow-hidden">
                <div className="mb-3 text-3xl">{category.icon}</div>
                <h3 className="whitespace-nowrap type-card font-medium text-[#111111]">
                  {category.title}
                </h3>
                <p className="mt-1 type-label">{category.quizzes}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {viewAllHref !== "#" && (
        <div className="mt-12 flex justify-center">
          <Link
            href={viewAllHref}
            className="border-b border-black pb-1 text-base font-medium text-black"
          >
            View All Categories
          </Link>
        </div>
      )}
    </section>
  );
}