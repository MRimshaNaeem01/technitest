export type QuizOption = {
  id: string;
  label?: string;
  image?: string;
};

export type QuizQuestion = {
  id: string;
  type: "multiple-choice" | "true-false" | "image";
  question: string;
  options: QuizOption[];
  correctAnswer: string;
};

export type Quiz = {
  id: string;
  slug: string;
  title: string;
  category: string;
  rating: number;
  level: string;
  duration: string;
  questionCount: number;
  durationPerQuestion: number;
  description: string;
  imageSrc: string;
  questions: QuizQuestion[];
};

export type QuizStartStep = "idle" | "important-note" | "user-authentication";

export type QuizResult = {
  quizId: string;
  quizSlug: string;
  quizName: string;
  level: string;
  category: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  skippedQuestions: number;
  percentage: number;
  passed: boolean;
  durationSeconds: number;
  dateTaken: string;
  attemptsTaken: number;
  attemptsRemaining: number;
  answers: Record<string, string | null>;
};
