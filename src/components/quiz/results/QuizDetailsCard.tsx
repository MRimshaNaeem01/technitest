import { ArrowRight } from "lucide-react";
import type { QuizResult } from "@/types/quiz";

type QuizDetailsCardProps = {
  result: QuizResult;
};

export function QuizDetailsCard({ result }: QuizDetailsCardProps) {
  const dateObj = new Date(result.dateTaken);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const durationText =
    result.durationSeconds >= 3600
      ? `${Math.floor(result.durationSeconds / 3600)}h ${Math.floor((result.durationSeconds % 3600) / 60)}m`
      : `${Math.floor(result.durationSeconds / 60)}m ${String(result.durationSeconds % 60).padStart(2, "0")}s`;

  const details = [
    { label: "Quiz Level", value: result.level },
    { label: "Quiz Category", value: result.category },
    { label: "Quiz Taking Time", value: formattedTime },
    { label: "Date Taken", value: formattedDate },
    { label: "Quiz Duration", value: durationText },
    { label: "Attempts Taken", value: String(result.attemptsTaken).padStart(2, "0") },
  ];

  return (
    <div className="flex min-h-0 flex-col rounded-[20px] bg-white px-8 py-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] lg:min-h-[600px]">
      <h2 className="mb-2 text-xl font-semibold text-[#07104F]">
        Quiz Details
      </h2>

      <div className="mb-6">
        <p className="text-sm text-gray-500">Quiz Name</p>
        <p className="mt-1 text-base font-semibold text-[#F5A000]">
          {result.quizName}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
        {details.map((d) => (
          <div key={d.label}>
            <p className="text-sm text-gray-500">{d.label}</p>
            <p className="mt-1 text-base font-semibold text-[#07104F]">
              {d.value}
            </p>
          </div>
        ))}

        <div>
          <p className="text-sm text-gray-500">Attempts Remaining</p>
          <p className="mt-1 text-base font-semibold text-[#07104F]">
            {String(result.attemptsRemaining).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Spacer pushes the button to the bottom */}
      <div className="flex-1" />

      {result.passed && (
        <button className="mt-8 w-full rounded-full bg-[#F5A000] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E09000]">
          <span className="inline-flex items-center gap-2">
            Proceed to Advance Level
            <ArrowRight className="size-4" />
          </span>
        </button>
      )}
    </div>
  );
}
