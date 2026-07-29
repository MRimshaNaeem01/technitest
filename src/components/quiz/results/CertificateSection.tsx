import type { QuizResult } from "@/types/quiz";

type CertificateSectionProps = {
  result: QuizResult;
};

export function CertificateSection({ result }: CertificateSectionProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-[20px] font-bold text-[#07104F]">Certificates</h2>

      {/* Certificate Preview */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="relative bg-gradient-to-br from-[#F8F8FF] to-[#EEEEFF] px-8 py-12 text-center sm:px-16 sm:py-16">
          {/* Decorative corners */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-[#2F3CFF]/20" />
            <div className="absolute right-4 top-4 h-16 w-16 border-r-2 border-t-2 border-[#2F3CFF]/20" />
            <div className="absolute bottom-4 left-4 h-16 w-16 border-b-2 border-l-2 border-[#2F3CFF]/20" />
            <div className="absolute bottom-4 right-4 h-16 w-16 border-b-2 border-r-2 border-[#2F3CFF]/20" />
          </div>

          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#777]">
            Certificate of Achievement
          </p>
          <div className="mx-auto mb-4 h-px w-24 bg-[#2F3CFF]/30" />
          <h3 className="mb-1 text-2xl font-bold text-[#07104F]">Technitest</h3>
          <p className="mb-6 text-sm text-[#777]">This is to certify that</p>

          <p className="mb-2 text-lg font-semibold text-[#07104F]">Quiz Participant</p>
          <p className="mb-6 text-sm text-[#777]">has successfully completed</p>

          <p className="mb-2 text-base font-semibold text-[#F5A000]">{result.quizName}</p>
          <p className="mb-6 text-sm text-[#777]">
            with a score of <span className="font-semibold text-[#2F3CFF]">{result.correctAnswers}/{result.totalQuestions}</span> ({result.percentage}%)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#777] sm:gap-8">
            <div>
              <p className="font-semibold text-[#07104F]">Level</p>
              <p>{result.level}</p>
            </div>
            <div className="hidden h-8 w-px bg-gray-200 sm:block" />
            <div>
              <p className="font-semibold text-[#07104F]">Date</p>
              <p>{new Date(result.dateTaken).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mb-6 rounded-xl bg-[#F5F5FF] px-4 py-3 text-center text-sm text-[#07104F] sm:px-6 sm:py-4">
        🎉 Great job! You&apos;re among our top achievers — enjoy <span className="font-semibold">20% off</span> your premium certificate!
      </div>

      {/* Certificate Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button className="rounded-full bg-[#F5A000] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E09000]">
          Pay Now
        </button>
        <button className="rounded-full bg-[#07104F] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a1560]">
          Add to Cart
        </button>
        <button className="rounded-full bg-[#2F3CFF] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2530CC]">
          Refer Friends
        </button>
      </div>
    </div>
  );
}
