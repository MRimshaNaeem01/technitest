"use client";

import { useState } from "react";
import Image from "next/image";

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
    <VerificationCard className="flex-1 p-20">
      <div className="mb-5 flex justify-center">
        <Image
          src="/verify-certificate/verify-id.png"
          alt="Verify certificate by ID"
          width={130}
          height={100}
          className="h-auto object-contain"
        />
      </div>

      <h3 className="mb-10 text-center font-poppins text-[30px] font-medium text-black">
        Verify by Certificate ID
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter your certificate ID"
          className="w-full rounded-lg border border-[#E2E2E8] bg-[#F9F9FB] px-4 py-3 font-poppins text-[14px] text-[#111] outline-none transition-colors placeholder:text-[#A0A0AA] focus:border-[#2F45FF]"
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}

        <p className="mt-6 text-center font-poppins text-[18px] leading-[25px] text-black">
          Please enter the Certificate ID exactly as it appears on your
          certificate. This ID is unique and helps us confirm the authenticity
          of your achievement.
        </p>

        <div className="mt-12">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#2F45FF] px-6 py-3 font-poppins text-[14px] font-medium text-white transition-colors hover:bg-[#1a30e0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </button>
        </div>
      </form>
    </VerificationCard>
  );
}
