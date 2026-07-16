"use client";

import { useEffect, useCallback } from "react";
import { AlertTriangle, X } from "lucide-react";

type ImportantNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
};

export function ImportantNoteModal({
  isOpen,
  onClose,
  onProceed,
}: ImportantNoteModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="important-note-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[440px] rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
        >
          <X className="size-4" />
        </button>

        <div className="mb-5 flex justify-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="size-7 text-red-500" />
          </span>
        </div>

        <h2
          id="important-note-title"
          className="mb-5 text-center text-[20px] font-bold text-[#111111]"
        >
          Important Note!
        </h2>

        <ul className="space-y-3 text-sm leading-relaxed text-gray-600">
          <li className="flex gap-2">
            <span className="shrink-0">⏱</span>
            <span>Time per Question: 40 seconds only.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">🔀</span>
            <span>You can skip or go back anytime.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">🔒</span>
            <span>
              Once time is up, you won&apos;t be able to answer that question.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">👀</span>
            <span>Review before submitting.</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">✅</span>
            <span>Answer carefully, time matters.</span>
          </li>
        </ul>

        <button
          onClick={onProceed}
          className="mt-8 w-full rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Proceed to Quiz
        </button>
      </div>
    </div>
  );
}
