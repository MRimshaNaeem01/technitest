"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#ECECFF] to-[#F5F5FF] px-4 py-12">
      <div className="relative w-full rounded-3xl bg-white p-6 pb-8 mx-4 shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:mx-10 sm:p-10 sm:pb-12 sm:shadow-[0_8px_40px_rgba(0,0,0,0.08)] md:p-12">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="absolute left-6 top-6 flex size-8 items-center justify-center rounded-full text-[#111827] transition-colors hover:bg-gray-100"
        >
          <ArrowLeft className="size-8" />
        </button>

        <h1 className="mb-2 text-center font-urbanist text-[28px] font-semibold leading-tight text-black sm:text-[40px]">
          Face Authentication
        </h1>

        <FaceAuthenticationCamera onVerified={handleVerified} />
      </div>
    </main>
  );
}
