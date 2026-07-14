import { AchievementBanner } from "@/components/achievement-banner";
import { Banner } from "@/components/banner";
import { HallOfAchievers } from "@/components/hall-of-achievers";
import { HowItWorks } from "@/components/how-it-works";
import QuizCtaBanner from "@/components/quiz-cta-banner";
import { Testimonials } from "@/components/testimonials";
import { TrendingQuizzes } from "@/components/trending-quizzes";

import { Container } from "@/components/common/container";
import { LearningCategories } from "@/components/learning-categories";

import {
  achievementStats,
  achievers,
  categories,
  howItWorksSteps,
  testimonials,
  trendingQuizzes,
} from "@/data/home";

export default function HomePage() {
  return (
    <>
      <Banner
        title="Attempt Quizzes. Improve Skills."
        highlightedText="Earn Certificates"
        description="Join thousands of learners taking step-by-step skill-based quizzes in IT, English, Business, and more."
        buttonText="Start Quiz Now"
        buttonHref="/dashboard"
        imageSrc="/banner-girl.png"
      />

      <Container>
        <LearningCategories categories={categories} />
      </Container>

      <AchievementBanner
        eyebrow="About Us"
        title="Turning Effort into Achievement"
        imageSrc="/certificate-achieve.png"
        description={[
          "TechniTest is your go-to platform for smart, skill-based learning. We offer carefully crafted quizzes in IT, English, Business, and more — designed to help you grow, test yourself, and track your progress.",
          "Our mission is to make education accessible and practical. After completing a quiz, preview your customized certificate — and when you're ready, unlock it officially with a simple payment. It's learning with purpose, results, and recognition.",
          "Whether you're a student, job-seeker, or curious learner — TechniTest helps you level up with every click.",
        ]}
        stats={achievementStats}
      />
      <HowItWorks
        eyebrow="How it Works"
        title="Simple Steps. Smarter Results"
        steps={howItWorksSteps}
      />
      <QuizCtaBanner
        title="Boost Your Skills Today – Take a Quiz & Get Certified!"
        description="Join thousands who've leveled up with our easy online quizzes and official certificates."
        buttonText="Explore Quizzes"
        buttonHref="/categories"
        imageSrc="/girl2.png"
      />
  <TrendingQuizzes
        eyebrow="Quizzes"
        title="Trending Quizzes"
        quizzes={trendingQuizzes}
      />
      <HallOfAchievers
        eyebrow="Scorers"
        title="Hall of Achievers"
        achievers={achievers}
      />
    

      <Testimonials
        eyebrow="Testimonials"
        title="Real People, Real Reviews!"
        testimonials={testimonials}
      />
    </>
  );
}