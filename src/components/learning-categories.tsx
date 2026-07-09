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
    <section className="py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium text-brand">{eyebrow}</p>
        <h2 className="text-3xl font-semibold text-black md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <Link key={category.title} href={category.href}>
            <Card className="border-none bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <CardContent className="flex h-[140px] flex-col items-center justify-center text-center">
                <div className="mb-3 text-4xl">{category.icon}</div>
                <h3 className="text-base font-medium text-black">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{category.quizzes}</p>
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