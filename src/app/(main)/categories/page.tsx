import { CategoryHero } from "@/components/categories/category-hero";
import { LearningCategories } from "@/components/learning-categories";
import { TrendingQuizzes } from "@/components/trending-quizzes";

const categories = [
  {
    title: "Health & Wellness",
    quizzes: "120 Quizzes",
    icon: "💖",
    href: "/categories/health-wellness",
  },
  {
    title: "Language Logic",
    quizzes: "120 Quizzes",
    icon: "🔠",
    href: "/categories/language-logic",
  },
  {
    title: "Management",
    quizzes: "120 Quizzes",
    icon: "👥",
    href: "/categories/management",
  },
  {
    title: "Smart Engineering",
    quizzes: "120 Quizzes",
    icon: "⚙️",
    href: "/categories/smart-engineering",
  },
  {
    title: "Information Technology",
    quizzes: "120 Quizzes",
    icon: "👨‍💻",
    href: "/categories/information-technology",
  },
  {
    title: "Digital Marketing",
    quizzes: "120 Quizzes",
    icon: "👍",
    href: "/categories/digital-marketing",
  },
  {
    title: "Accounting IQ",
    quizzes: "120 Quizzes",
    icon: "🧮",
    href: "/categories/accounting-iq",
  },
  {
    title: "Development",
    quizzes: "120 Quizzes",
    icon: "🖥️",
    href: "/categories/development",
  },
  {
    title: "Data Science",
    quizzes: "120 Quizzes",
    icon: "📊",
    href: "/categories/data-science",
  },
];

const trendingQuizzes = [
  {
    id: "1",
    title: "Advanced Marketing Quiz",
    category: "Digital Marketing",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz1.png",
    href: "/quizzes/advanced-marketing-quiz",
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
    href: "/quizzes/engineering-fundamentals",
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
    href: "/quizzes/computer-science-basics",
  },
];

const newQuizzes = [
  {
    id: "4",
    title: "Advanced Marketing Quiz",
    category: "Digital Marketing",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz3.png",
    href: "/quizzes/computer-science-basics",
  },
  {
    id: "5",
    title: "Engineering Fundamentals",
    category: "Information Technology",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz2.png",
    href: "/quizzes/engineering-fundamentals",
  },
  {
    id: "6",
    title: "Computer Science Basics",
    category: "Digital Marketing",
    rating: 4.8,
    level: "Beginner",
    duration: "60 min",
    questions: "44 Q/A",
    imageSrc: "/trendingQuiz/quiz1.png",
    href: "/quizzes/advanced-marketing-quiz",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <CategoryHero
        title="Choose Your Quiz Category"
        description="Browse from a wide range of quiz topics designed for students, professionals, and lifelong learners. Pick a category to get started!"
      />
      <LearningCategories
        eyebrow="Categories"
        title="Test Your Knowledge"
        categories={categories}
        viewAllHref="#"
        className="px-16"
      />
      <TrendingQuizzes
        eyebrow="Quizzes"
        title="Trending Quizzes"
        quizzes={trendingQuizzes}
      />
      <TrendingQuizzes
        eyebrow="Quizzes"
        title="New Quizzes"
        quizzes={newQuizzes}
        className="bg-[#F7F7FF] py-20"
      />
    </>
  );
}
