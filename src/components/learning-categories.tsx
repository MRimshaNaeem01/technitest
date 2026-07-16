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
};

export function LearningCategories({
  eyebrow = "Categories",
  title = "Unlock Your Learning Potential",
  categories,
  viewAllHref = "/categories",
}: LearningCategoriesProps) {
  return (
    <section className="p-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
        <h2 className="type-section font-medium">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(20%-1rem)]"
          >
            <Card className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <CardContent className="flex h-[140px] flex-col items-center justify-center text-center">
                <div className="mb-3 text-4xl">{category.icon}</div>
                <h3 className="text-[16px] font-medium text-[#111111]">
                  {category.title}
                </h3>
                <p className="mt-1 type-label">{category.quizzes}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href={viewAllHref}
          className="border-b border-black pb-1 text-base font-medium text-black"
        >
          View All Categories
        </Link>
      </div>
    </section>
  );
}