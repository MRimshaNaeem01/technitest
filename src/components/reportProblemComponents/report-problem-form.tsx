"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "@/components/common/container";
import { CustomFileUpload } from "./custom-file-upload";

type FormValues = {
  typeOfReport: string;
  page: string;
  description: string;
};

export function ReportProblemForm() {
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      typeOfReport: "",
      page: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log({ ...data, screenshot });
  };

  return (
    <section className="bg-white py-10 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[730px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#111]">
                Type Of Report
              </label>
              <select
                {...register("typeOfReport", {
                  required: "Type of report is required",
                })}
                className="w-full rounded-lg border border-[#E2E2E8] bg-white px-4 py-3 text-sm text-[#999] outline-none transition-colors focus:border-[#2F45FF]"
              >
                <option value="" disabled>
                  Bug Report
                </option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Content Issue">Content Issue</option>
                <option value="Other">Other</option>
              </select>
              {errors.typeOfReport && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.typeOfReport.message}
                </p>
              )}
              <p className="mt-1.5 text-xs text-[#999]">
                Why are you reporting this content?
              </p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#111]">
                Page
              </label>
              <select
                {...register("page", { required: "Page is required" })}
                className="w-full rounded-lg border border-[#E2E2E8] bg-white px-4 py-3 text-sm text-[#999] outline-none transition-colors focus:border-[#2F45FF]"
              >
                <option value="" disabled>
                  Bug Report
                </option>
                <option value="Home">Home</option>
                <option value="Categories">Categories</option>
                <option value="Quiz">Quiz</option>
                <option value="Dashboard">Dashboard</option>
                <option value="Contact">Contact</option>
                <option value="About">About</option>
                <option value="Other">Other</option>
              </select>
              {errors.page && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.page.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#111]">
                Provide A Detailed Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={6}
                placeholder="Describe the issue..."
                className="w-full resize-none rounded-lg border border-[#E2E2E8] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#999] focus:border-[#2F45FF]"
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
              <p className="mt-1.5 text-xs leading-relaxed text-[#999]">
                Please enter the details of your request. Remember: Never share
                passwords and don&apos;t provide personal, sensitive or
                confidential information to anyone you don&apos;t know or who
                doesn&apos;t have a legitimate need for it.
              </p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#111]">
                Upload Screenshot
              </label>
              <CustomFileUpload value={screenshot} onChange={setScreenshot} />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2F45FF] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a30e0] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
