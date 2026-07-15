"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { FaceAuthenticationCamera } from "@/components/quiz/FaceAuthenticationCamera";

type FaceAuthPageProps = {
  params: Promise<{ slug: string }>;
};

export default function FaceAuthenticationPage({ params }: FaceAuthPageProps) {
  const { slug } = use(params);
  const router = useRouter();

  const handleVerified = () => {
    sessionStorage.setItem(`quiz-face-verified-${slug}`, "true");
    router.push(`/quiz/${slug}/attempt`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#ECECFF] px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        Face Authentication
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        Verify your identity to start the quiz
      </p>

      <FaceAuthenticationCamera onVerified={handleVerified} />
    </main>
  );
}
