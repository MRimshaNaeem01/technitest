"use client";

import { useEffect, useCallback } from "react";
import { ScanFace, X } from "lucide-react";

type UserAuthenticationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
};

export function UserAuthenticationModal({
  isOpen,
  onClose,
  onStart,
}: UserAuthenticationModalProps) {
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
      aria-labelledby="user-auth-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[460px] rounded-2xl bg-white p-8 shadow-2xl"
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
          <span className="flex size-16 items-center justify-center rounded-full bg-blue-50">
            <ScanFace className="size-8 text-blue-500" />
          </span>
        </div>

        <h2
          id="user-auth-title"
          className="mb-4 text-center text-xl font-bold text-gray-900"
        >
          User Authentication
        </h2>

        <p className="mb-8 text-center text-sm leading-relaxed text-gray-500">
          Before starting the quiz, turn on your camera and slowly rotate your
          head in all directions for face verification. The system will capture a
          few images and prompt you to upload or scan your ID. Once verification
          is complete, you can begin the quiz.
        </p>

        <button
          onClick={onStart}
          className="w-full rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Start Now
        </button>
      </div>
    </div>
  );
}
