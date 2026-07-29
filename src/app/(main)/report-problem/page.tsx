import type { Metadata } from "next";
import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";
import { ReportProblemForm } from "@/components/reportProblemComponents/report-problem-form";

export const metadata: Metadata = {
  title: "Report a Problem | Technitest",
  description:
    "Encountered an issue on Technitest? Report a problem and describe what went wrong so our team can resolve it promptly.",
  openGraph: {
    title: "Report a Problem | Technitest",
    description:
      "Report an issue on Technitest and help us resolve it quickly.",
    type: "website",
  },
  keywords: [
    "report problem",
    "bug report",
    "Technitest support",
    "issue report",
    "help",
    "report issue",
  ],
};

export default function ReportProblemPage() {
  return (
    <>
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#F7F7FF]">
        <div className="py-14 text-center">
          <div className="mb-4">
            <BannerBreadcrumb currentPage="Report a Problem" />
          </div>
          <h1 className="text-[26px] font-semibold leading-tight text-black sm:text-[34px]">
            Report a Problem
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-[#5F5F6B]">
            Help us understand the issue by describing what went wrong, what
            steps led you here, and what the correct behavior should be, so we
            can resolve it promptly.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-[6%] top-1/4 h-8 w-8 text-brand opacity-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <svg
            className="absolute right-[8%] top-[30%] h-10 w-10 text-brand opacity-15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M4 4L20 20" strokeDasharray="3 3" />
            <path d="M20 4L4 20" strokeDasharray="3 3" />
          </svg>
        </div>
      </section>

      <ReportProblemForm />
    </>
  );
}
