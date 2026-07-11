"use client";

import { useRef, type ClipboardEvent, type KeyboardEvent } from "react";

type OtpInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
};

export function OtpInput({ value, onChange, error }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;
    const next = [...value];
    next[i] = digit.slice(-1);
    onChange(next);
    if (digit && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    const next = [...value];
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    onChange(next);
    const focusIdx = Math.min(text.length, 5);
    refs.current[focusIdx]?.focus();
  };

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        Enter Code
      </label>
      <div className="flex gap-2" onPaste={handlePaste}>
        {value.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`h-11 w-full max-w-[48px] rounded-lg border text-center text-lg font-semibold text-[#0B0B0B] outline-none transition-colors ${
              error ? "border-red-500" : "border-gray-200 focus:border-[#EA9700]"
            }`}
          />
        ))}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
