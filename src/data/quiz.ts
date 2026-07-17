import type { Quiz } from "@/types/quiz";

export const dummyQuiz: Quiz = {
  id: "advanced-marketing-quiz-bba",
  slug: "advanced-marketing-quiz-bba",
  title: "Advanced Marketing Quiz BBA",
  category: "Business & Management",
  rating: 4.9,
  level: "Trending",
  duration: "45 Minutes",
  questionCount: 4,
  durationPerQuestion: 40,
  description:
    "Test your knowledge of advanced marketing principles, strategies, and best practices. This comprehensive quiz covers brand management, digital marketing, consumer behavior, and market analysis.",
  imageSrc: "/trendingQuiz/quiz1.png",
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the primary purpose of market segmentation?",
      options: [
        { id: "a", label: "To increase production efficiency" },
        { id: "b", label: "To identify and target specific customer groups" },
        { id: "c", label: "To reduce marketing expenses" },
        { id: "d", label: "To improve internal communication" },
      ],
      correctAnswer: "b",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "Is guerrilla marketing typically a low-cost strategy that relies on creative, unconventional methods?",
      options: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
      ],
      correctAnswer: "yes",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Which factor is most important when defining a target audience?",
      options: [
        { id: "a", label: "Office location only" },
        { id: "b", label: "Customer needs and behavior" },
        { id: "c", label: "Company logo color" },
        { id: "d", label: "Number of employees" },
      ],
      correctAnswer: "b",
    },
    {
      id: "q4",
      type: "image",
      question: 'Which image represents "Guerrilla Marketing"?',
      options: [
        { id: "img-1", image: "/quiz11 (1).png" },
        { id: "img-2", image: "/quiz11 (2).png" },
        { id: "img-3", image: "/quiz11 (1).png" },
        { id: "img-4", image: "/quiz11 (3).png" },
      ],
      correctAnswer: "img-1",
    },
  ],
};

export function getQuizBySlug(slug: string): Quiz | undefined {
  if (slug === dummyQuiz.slug) return dummyQuiz;
  return undefined;
}
