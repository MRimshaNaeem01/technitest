export type CheckoutItem = {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  originalPrice: number;
  discountPercentage?: number;
  finalPrice: number;
};

export const dummyCheckoutItems: CheckoutItem[] = [
  {
    id: "cert-1",
    title: "Advanced Marketing Quiz BBA",
    type: "New Certificate",
    description:
      "Join thousands of learners taking step-by-step skill-based quizzes.",
    image: "/trendingQuiz/quiz1.png",
    originalPrice: 340,
    discountPercentage: 10,
    finalPrice: 306,
  },
  {
    id: "quiz-1",
    title: "Engineering Fundamentals Quiz",
    type: "Quiz Attempt",
    description:
      "Test your knowledge with comprehensive skill assessments.",
    image: "/trendingQuiz/quiz2.png",
    originalPrice: 50,
    finalPrice: 50,
  },
];
