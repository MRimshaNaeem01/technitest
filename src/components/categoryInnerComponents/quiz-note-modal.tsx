"use client";

import { X } from "lucide-react";

type QuizNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onProceed?: () => void;
};

export function QuizNoteModal({
  isOpen,
  onClose,
  onProceed,
}: QuizNoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[380px] rounded-2xl bg-white px-6 py-8 shadow-xl sm:px-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
        >
          <X className="size-4" />
        </button>

        <div className="mb-5 flex justify-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-red-50">
            <svg
              className="size-7 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8V12" />
              <path d="M12 16H12.01" />
            </svg>
          </span>
        </div>

        <h2 className="mb-4 text-center text-lg font-semibold text-black">
          Important Note!
        </h2>

        <ul className="space-y-3 text-sm leading-relaxed text-gray-600">
          <li className="flex gap-2">
            <span className="shrink-0 font-semibold text-black">1.</span>
            <span>Once you start, the quiz timer begins.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-semibold text-black">2.</span>
            <span>You need to answer all questions.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-semibold text-black">3.</span>
            <span>
              Once finished, you can preview your certificate.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-semibold text-black">4.</span>
            <span>Please review details carefully.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-semibold text-black">5.</span>
            <span>
              Payment is needed only when unlocking the certificate.
            </span>
          </li>
        </ul>

        <button
          onClick={() => {
            onProceed?.();
            onClose();
          }}
          className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Proceed to Quiz
        </button>
      </div>
    </div>
  );
}
