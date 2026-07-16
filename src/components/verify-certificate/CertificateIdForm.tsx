"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import { VerificationCard } from "./VerificationCard";

type CertificateIdFormProps = {
  onVerify: (id: string) => void;
  loading: boolean;
};

export function CertificateIdForm({ onVerify, loading }: CertificateIdFormProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Certificate ID is required");
      return;
    }
    if (trimmed.length < 3) {
      setError("Please enter a valid certificate ID");
      return;
    }
    setError("");
    onVerify(trimmed);
  };

  return (
    <VerificationCard className="flex-1">
      <div className="mb-6 flex justify-center">
        <div className="relative h-[140px] w-[140px]">
          <Image
            src="/certificate-achieve.png"
            alt="Certificate verification"
            fill
            className="object-contain"
            sizes="140px"
          />
        </div>
      </div>

      <h3 className="mb-2 text-center text-xl font-semibold text-[#111]">
        Verify by Certificate ID
      </h3>
      <p className="mb-6 text-center text-sm text-[#666]">
        Enter your unique certificate ID to verify its authenticity.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <div className="mb-2 flex items-center gap-2">
          <ShieldCheck className="size-4 text-[#2F45FF]" />
          <label className="text-sm font-medium text-[#111]">
            Certificate ID
          </label>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          placeholder="e.g. TT-2024-ABCD-1234"
          className="w-full rounded-lg border border-[#E2E2E8] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#A0A0AA] focus:border-[#2F45FF]"
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}
        <p className="mt-1.5 text-xs text-[#999]">
          You can find this ID on your certificate document.
        </p>

        <div className="mt-auto pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#2F45FF] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a30e0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </button>
        </div>
      </form>
    </VerificationCard>
  );
}
