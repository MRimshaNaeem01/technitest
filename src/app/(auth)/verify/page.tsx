"use client";

import { useState } from "react";
import { z } from "zod";
import Link from "next/link";

import { AuthShell } from "@/components/authComponents/auth-shell";
import { AuthButton } from "@/components/authComponents/auth-button";
import { OtpInput } from "@/components/authComponents/otp-input";

export default function VerifyPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    const result = z
      .string()
      .length(6, "Code must be exactly 6 digits")
      .regex(/^\d{6}$/, "Code must contain only numbers")
      .safeParse(code);

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    setLoading(true);
    console.log("OTP data:", { code });
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <AuthShell imageSrc="/auth/auth1.png" imageAlt="Student writing notes with headphones">
      <h1 className="mb-6 text-2xl font-semibold text-[#0B0B0B]">
        Verify Your Account
      </h1>

      <div className="mb-6 rounded-lg border-l-4 border-[#2945FF] bg-blue-50 px-4 py-3">
        <p className="text-sm text-gray-600">
          We&apos;ve sent a 6-digit code to your email address
        </p>
        <p className="mt-1 text-sm font-medium text-[#2945FF]">
          user@example.com
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <OtpInput value={otp} onChange={setOtp} error={error} />

        <p className="text-center text-sm text-gray-500">
          Didn&apos;t get the code?{" "}
          <button
            type="button"
            className="font-medium text-[#EA9700] hover:underline"
          >
            Resend it
          </button>
        </p>

        <AuthButton loading={loading}>Verify Account</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Back to{" "}
        <Link href="/login" className="font-medium text-[#EA9700] hover:underline">
          Sign In
        </Link>
      </p>
    </AuthShell>
  );
}
