"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import { AuthShell } from "@/components/authComponents/auth-shell";
import { AuthInput } from "@/components/authComponents/auth-input";
import { AuthButton } from "@/components/authComponents/auth-button";
import { SocialLogin } from "@/components/authComponents/social-login";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    country: z.string().min(1, "Country is required"),
    phone: z.string().min(1, "Phone number is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupData) => {
    console.log("Signup data:", data);
  };

  return (
    <AuthShell imageSrc="/auth/auth2.png" imageAlt="Students studying together" formSize="wide">
      <h1 className="mb-7 text-2xl font-semibold text-[#0B0B0B]">
        Sign Up &amp; Unlock Your Potential
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[18px]">
        <AuthInput
          label="Full name"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <AuthInput
          label="Email address"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            className={`h-11 w-full rounded-lg border bg-white px-4 text-sm text-[#0B0B0B] outline-none transition-colors ${
              errors.country ? "border-red-500" : "border-gray-200 focus:border-[#EA9700]"
            }`}
            {...register("country")}
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="PK">Pakistan</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
          {errors.country && (
            <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Phone No. <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex h-11 shrink-0 items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-600">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <rect x="8" y="2" width="8" height="20" rx="1" />
                <circle cx="12" cy="18" r="1" fill="white" />
              </svg>
              +92
            </div>
            <input
              className={`h-11 flex-1 rounded-lg border bg-white px-4 text-sm text-[#0B0B0B] outline-none transition-colors ${
                errors.phone ? "border-red-500" : "border-gray-200 focus:border-[#EA9700]"
              }`}
              placeholder="Enter phone number"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <AuthInput
          label="Password"
          isPassword
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />
        <AuthInput
          label="Confirm Password"
          isPassword
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="mt-0.5 size-4 accent-[#EA9700]"
            {...register("terms")}
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-[#2945FF] hover:underline">
              Terms &amp; Conditions
            </Link>
          </span>
        </label>
        {errors.terms && (
          <p className="text-xs text-red-500">{errors.terms.message}</p>
        )}

        <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <div className="flex size-8 items-center justify-center rounded border border-gray-300 bg-white">
            <svg className="size-4 text-[#EA9700]" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">I&apos;m not a robot</span>
        </div>

        <AuthButton>Create an Account</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#EA9700] hover:underline">
          Sign In
        </Link>
      </p>

      <div className="my-6 flex items-center gap-3">
        <hr className="flex-1 border-gray-200" />
        <span className="text-sm text-gray-400">or</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      <SocialLogin />
    </AuthShell>
  );
}
