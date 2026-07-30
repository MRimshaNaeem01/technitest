import type { Metadata } from "next";
import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";

export const metadata: Metadata = {
  title: "About Us | Technitest",
  description:
    "Learn about Technitest — our mission to make skill-based learning accessible and rewarding. Discover how we help learners earn certificates and track their progress.",
  openGraph: {
    title: "About Us | Technitest",
    description:
      "Learn about Technitest — our mission to make skill-based learning accessible and rewarding.",
    type: "website",
  },
  keywords: [
    "about Technitest",
    "skill-based learning",
    "online education platform",
    "mission and vision",
    "learning certificates",
    "career growth",
    "Technitest about",
  ],
};
import { AboutHero } from "@/components/AboutUsComponents/about-hero";
import { AboutIntro } from "@/components/AboutUsComponents/about-intro";
import { AboutJourney } from "@/components/AboutUsComponents/about-journey";
import { AboutStats } from "@/components/AboutUsComponents/about-stats";
import { AboutSuccessFeatures } from "@/components/AboutUsComponents/about-success-features";
import { AboutWideImage } from "@/components/AboutUsComponents/about-wide-image";
import { JoinThousands } from "@/components/AboutUsComponents/join-thousands";
import { Testimonials } from "@/components/testimonials";

const stats = [
  { value: "850K", label: "Free Courses" },
  { value: "85+", label: "Courses" },
  { value: "8+", label: "Experience" },
  { value: "10k", label: "Students Enrolled" },
];

const journeyCards = [
  {
    title: "Our Mission",
    description:
      "To empower individuals with accessible, engaging, and skill-focused quizzes that make learning practical, measurable, and rewarding for everyone.",
    variant: "light" as const,
  },
  {
    title: "Our Vision",
    description:
      "To become the leading global platform where knowledge is celebrated, skills are certified, and lifelong learning is accessible to all.",
    variant: "blue" as const,
  },
];

const successFeatures = [
  {
    title: "Skill-Focused Quizzes",
    description:
      "Each quiz targets real-world skills, helping you learn faster and remember longer.",
    icon: (
      <svg
        className="size-10 text-brand"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12L11 14L15 10" />
      </svg>
    ),
  },
  {
    title: "Official Certificates",
    description:
      "Earn verified certificates upon completion to showcase your achievements with confidence.",
    icon: (
      <svg
        className="size-10 text-brand"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21C20 17.134 16.418 14 12 14C7.582 14 4 17.134 4 21" />
        <path d="M16 19L18 21L22 17" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed stats, scores, and improvement insights.",
    icon: (
      <svg
        className="size-10 text-brand"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 12H18L15 21L9 3L6 12H2" />
      </svg>
    ),
  },
  {
    title: "Expertly Crafted",
    description:
      "All quizzes are designed by industry professionals to ensure relevance and quality.",
    icon: (
      <svg
        className="size-10 text-brand"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    id: "1",
    name: "Owen Phillips",
    role: "Learner",
    review:
      "I've always struggled with language apps that felt too robotic or repetitive. But this one truly stands out — the lessons are interactive, the voice recognition actually works, and I love how it tracks my streak. I've only been using it for a month and I already feel more confident speaking French!",
    rating: 5,
    platform: "Clutch",
    imageSrc: "/testimonials/girl4.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero
        breadcrumb={<BannerBreadcrumb currentPage="About Us" />}
        title="Empowering You Through Knowledge."
        description="We are dedicated to providing high-quality, skill-based quizzes that help learners grow, earn certificates, and achieve their goals."
      />
      <AboutIntro
        title="Built for Learners, Backed by Vision"
        paragraphs={[
          "TechniTest is your go-to platform for smart, skill-based learning. We offer carefully crafted quizzes in IT, English, Business, and more — designed to help you grow, test yourself, and track your progress.",
          "Our mission is to make education accessible and practical. After completing a quiz, preview your customized certificate — and when you're ready, unlock it officially with a simple payment. It's learning with purpose, results, and recognition.",
          "Whether you're a student, job-seeker, or curious learner — TechniTest helps you level up with every click.",
        ]}
        imageSrc="/aboutUs/img1.png"
      />
      <AboutStats stats={stats} />
      <AboutJourney
        title="The Journey Behind the Technitest"
        description="Every great platform starts with a vision. Ours was simple: make learning accessible, measurable, and rewarding for everyone."
        cards={journeyCards}
        imageSrc="/aboutUs/img2.png"
      />
      <AboutSuccessFeatures features={successFeatures} />
      <AboutWideImage imageSrc="/aboutUs/img3.png" />
      <JoinThousands
        title="Join Thousands Who Trust Us"
        paragraphs={[
          "In today's fast-paced digital world, learning doesn't have to be slow, boring, or expensive. Technitest is designed to help you learn faster, smarter, and more effectively — anytime, anywhere.",
          "If you're ready to take control of your learning, test your skills, and prove your knowledge — join thousands of satisfied learners and get started today.",
        ]}
        imageSrc="/aboutUs/img4.png"
      />
       <Testimonials
        eyebrow="Testimonials"
        title="Real People, Real Reviews!"
        testimonials={testimonials}
      />
    </>
  );
}
