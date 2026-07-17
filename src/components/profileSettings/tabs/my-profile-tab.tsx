"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Pencil, Eye, EyeOff } from "lucide-react";

const profileSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Phone is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  identificationNo: z.string().min(1, "Identification number is required"),
  level: z.string().min(1, "Level is required"),
  highestEducation: z.string().min(1, "Highest education is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const passwordSchema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z
      .string()
      .min(8, "Must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

function ProfileInput({
  label,
  type = "text",
  ...props
}: {
  label: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block font-poppins text-[13px] font-medium text-[#333]">
        {label}
      </label>
      <input
        type={type}
        className="h-11 w-full rounded-lg border border-[#E2E2E8] bg-white px-3.5 font-poppins text-[14px] text-[#0B0B0B] outline-none transition-colors focus:border-[#F5A000]"
        {...props}
      />
    </div>
  );
}

function ProfileSelect({
  label,
  options,
  ...props
}: {
  label: string;
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="mb-1.5 block font-poppins text-[13px] font-medium text-[#333]">
        {label}
      </label>
      <select
        className="h-11 w-full rounded-lg border border-[#E2E2E8] bg-white px-3.5 font-poppins text-[14px] text-[#0B0B0B] outline-none transition-colors focus:border-[#F5A000]"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function MyProfileTab() {
  const [summary, setSummary] = useState(
    "Experienced Human Resource Manager with 8+ years in talent acquisition, employee relations, and organizational development."
  );
  const [editingSummary, setEditingSummary] = useState(false);
  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "John Adam",
      email: "john.adam@email.com",
      phone: "+1 416 555 0123",
      country: "CA",
      state: "Ontario",
      city: "Toronto",
      postalCode: "M5V 2T6",
      gender: "male",
      dateOfBirth: "1992-05-14",
      identificationNo: "AB12345678",
      level: "advanced",
      highestEducation: "masters",
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    watch,
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  });

  const newPasswordValue = watch("newPassword", "");

  const onSubmitProfile = (data: ProfileFormValues) => {
    console.log("Profile saved:", data);
  };

  const onSubmitPassword = (data: PasswordFormValues) => {
    console.log("Password changed:", data);
  };

  return (
    <div className="space-y-8">
      {/* Summary */}
      <section className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between">
          <h3 className="font-poppins text-[16px] font-semibold text-[#0B0B0B]">
            Summary
          </h3>
          <button
            onClick={() => setEditingSummary(!editingSummary)}
            className="text-[#999] hover:text-[#F5A000]"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
        {editingSummary ? (
          <div className="mt-3">
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-[#E2E2E8] bg-[#F9F9FB] p-3.5 font-poppins text-[14px] text-[#333] outline-none focus:border-[#F5A000]"
            />
            <button
              onClick={() => setEditingSummary(false)}
              className="mt-2 rounded-lg bg-[#F5A000] px-4 py-1.5 font-poppins text-[13px] font-medium text-white hover:bg-[#E08E00]"
            >
              Save
            </button>
          </div>
        ) : (
          <p className="mt-2 font-poppins text-[14px] leading-[22px] text-[#555]">
            {summary}
          </p>
        )}
      </section>

      {/* Basic Info */}
      <section className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <h3 className="mb-5 font-poppins text-[16px] font-semibold text-[#0B0B0B]">
          Basic Information
        </h3>
        <form
          onSubmit={handleSubmitProfile(onSubmitProfile)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <ProfileInput label="Full name" {...registerProfile("fullName")} />
          <ProfileInput label="Email" type="email" {...registerProfile("email")} />
          <ProfileInput label="Phone no." {...registerProfile("phone")} />
          <ProfileSelect
            label="Country"
            {...registerProfile("country")}
            options={[
              { value: "", label: "Select country" },
              { value: "CA", label: "Canada" },
              { value: "US", label: "United States" },
              { value: "UK", label: "United Kingdom" },
            ]}
          />
          <ProfileInput label="State/Province" {...registerProfile("state")} />
          <ProfileInput label="City" {...registerProfile("city")} />
          <ProfileInput label="Postal code" {...registerProfile("postalCode")} />
          <ProfileSelect
            label="Gender"
            {...registerProfile("gender")}
            options={[
              { value: "", label: "Select gender" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
          <ProfileInput label="Date of birth" type="date" {...registerProfile("dateOfBirth")} />
          <ProfileInput label="Identification No" {...registerProfile("identificationNo")} />
          <ProfileSelect
            label="Level"
            {...registerProfile("level")}
            options={[
              { value: "", label: "Select level" },
              { value: "beginner", label: "Beginner" },
              { value: "intermediate", label: "Intermediate" },
              { value: "advanced", label: "Advanced" },
            ]}
          />
          <ProfileSelect
            label="Highest Education"
            {...registerProfile("highestEducation")}
            options={[
              { value: "", label: "Select education" },
              { value: "highschool", label: "High School" },
              { value: "bachelors", label: "Bachelor's Degree" },
              { value: "masters", label: "Master's Degree" },
              { value: "phd", label: "PhD" },
            ]}
          />

          {Object.keys(profileErrors).length > 0 && (
            <p className="col-span-full text-[13px] text-red-500">
              Please fill in all required fields.
            </p>
          )}

          <div className="col-span-full">
            <button
              type="submit"
              className="rounded-lg bg-[#0B0B0B] px-6 py-2.5 font-poppins text-[14px] font-medium text-white hover:bg-[#333]"
            >
              Save Profile
            </button>
          </div>
        </form>
      </section>

      {/* Change Password */}
      <section className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <h3 className="mb-5 font-poppins text-[16px] font-semibold text-[#0B0B0B]">
          Change Password
        </h3>
        <form
          onSubmit={handleSubmitPassword(onSubmitPassword)}
          className="max-w-[480px] space-y-4"
        >
          <div className="relative">
            <ProfileInput
              label="Old Password"
              type={showOldPw ? "text" : "password"}
              {...registerPassword("oldPassword")}
            />
            <button
              type="button"
              onClick={() => setShowOldPw(!showOldPw)}
              className="absolute right-3 top-9 text-[#999]"
            >
              {showOldPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            {passwordErrors.oldPassword && (
              <p className="mt-1 text-[12px] text-red-500">{passwordErrors.oldPassword.message}</p>
            )}
          </div>

          <div className="relative">
            <ProfileInput
              label="New Password"
              type={showNewPw ? "text" : "password"}
              {...registerPassword("newPassword")}
            />
            <button
              type="button"
              onClick={() => setShowNewPw(!showNewPw)}
              className="absolute right-3 top-9 text-[#999]"
            >
              {showNewPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            {passwordErrors.newPassword && (
              <p className="mt-1 text-[12px] text-red-500">{passwordErrors.newPassword.message}</p>
            )}
            {newPasswordValue && (
              <div className="mt-1.5 space-y-0.5">
                <p className={`text-[11px] ${newPasswordValue.length >= 8 ? "text-green-500" : "text-[#999]"}`}>
                  At least 8 characters
                </p>
                <p className={`text-[11px] ${/[A-Z]/.test(newPasswordValue) ? "text-green-500" : "text-[#999]"}`}>
                  One uppercase letter
                </p>
                <p className={`text-[11px] ${/[0-9]/.test(newPasswordValue) ? "text-green-500" : "text-[#999]"}`}>
                  One number
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <ProfileInput
              label="Confirm Password"
              type={showConfirmPw ? "text" : "password"}
              {...registerPassword("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPw(!showConfirmPw)}
              className="absolute right-3 top-9 text-[#999]"
            >
              {showConfirmPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            {passwordErrors.confirmPassword && (
              <p className="mt-1 text-[12px] text-red-500">
                {passwordErrors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#0B0B0B] px-6 py-2.5 font-poppins text-[14px] font-medium text-white hover:bg-[#333]"
          >
            Save Profile
          </button>
        </form>
      </section>
    </div>
  );
}
