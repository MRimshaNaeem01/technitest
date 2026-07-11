"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import { AuthShell } from "@/components/authComponents/auth-shell";
import { AuthInput } from "@/components/authComponents/auth-input";
import { AuthButton } from "@/components/authComponents/auth-button";
import { SocialLogin } from "@/components/authComponents/social-login";

const loginSchema = z.object({
  email: z.string().min(1, "Email or username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log("Login data:", data);
  };

  return (
    <AuthShell imageSrc="/auth/auth3.png" imageAlt="Student studying with headphones">
      <h1 className="mb-7 text-2xl font-semibold text-[#0B0B0B]">
        Sign In to Your Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[18px]">
        <AuthInput
          label="Username / Email address"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />
        <AuthInput
          label="Password"
          isPassword
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="size-4 accent-[#EA9700]"
              {...register("remember")}
            />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-[#2945FF] hover:underline">
            Forgot Password
          </Link>
        </div>

        <AuthButton>Sign In</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-[#EA9700] hover:underline">
          Sign Up
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
