"use client";

import { useCallback } from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

type ResultShareActionsProps = {
  quizSlug: string;
};

export function ResultShareActions({ quizSlug }: ResultShareActionsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shareUrl).catch(() => {});
  }, [shareUrl]);

  return (
    <div className="w-full">
      <h3 className="mb-4 text-center text-base font-semibold text-[#07104F]">
        Share your Result
      </h3>
      <div className="flex items-center justify-center gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex size-11 items-center justify-center rounded-full bg-[#F5F5FF] text-[#1877F2] transition-colors hover:bg-[#E8E8FF]"
        >
          <FaFacebook className="size-5" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex size-11 items-center justify-center rounded-full bg-[#F5F5FF] text-[#0A66C2] transition-colors hover:bg-[#E8E8FF]"
        >
          <FaLinkedinIn className="size-5" />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&su=My Quiz Result&body=Check out my quiz result: ${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share via Gmail"
          className="flex size-11 items-center justify-center rounded-full bg-[#F5F5FF] text-[#EA4335] transition-colors hover:bg-[#E8E8FF]"
        >
          <SiGmail className="size-5" />
        </a>
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="flex size-11 items-center justify-center rounded-full bg-[#F5F5FF] text-[#07104F] transition-colors hover:bg-[#E8E8FF]"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>
      </div>
    </div>
  );
}
