"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

import { VerificationCard } from "./VerificationCard";

type QRCodeUploadFormProps = {
  onVerify: (file: File) => void;
  loading: boolean;
};

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export function QRCodeUploadForm({ onVerify, loading }: QRCodeUploadFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);

  const processFile = (f: File) => {
    setError("");
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setError("Please upload a .png, .jpg, or .jpeg file");
      return;
    }
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) processFile(f);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) processFile(f);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a QR code image");
      return;
    }
    onVerify(file);
  };

  return (
    <VerificationCard className="flex-1 p-6 sm:p-10 md:p-20">
      <div className="mb-5 flex justify-center">
        <div className="relative mx-auto h-[110px] w-[170px]">
          <Image
            src="/verify-certificate/verify-qr-left.png"
            alt=""
            className="absolute left-2 top-5 -rotate-6"
            width={90}
            height={90}
          />
          <Image
            src="/verify-certificate/verify-qr-right.png"
            alt="Verify certificate by QR code"
            className="absolute right-2 top-0 rotate-6"
            width={95}
            height={95}
          />
        </div>
      </div>

      <h3 className="mb-6 text-center font-poppins text-[22px] font-medium text-black sm:mb-10 sm:text-[30px]">
        Verify by QR Code
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <input
          ref={inputRef}
          type="file"
          accept=".png,.jpg,.jpeg"
          className="hidden"
          onChange={handleFileChange}
        />

        {preview ? (
          <div className="relative mb-4 flex items-center gap-4 rounded-lg border border-[#E2E2E8] bg-[#FAFAFA] p-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={preview}
                alt="QR code preview"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-poppins text-[14px] font-medium text-[#111]">
                {file?.name}
              </p>
              <p className="font-poppins text-[12px] text-[#999]">
                {file ? `${(file.size / 1024).toFixed(1)} KB` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#999] transition-colors hover:bg-red-50 hover:text-red-500"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => inputRef.current?.click()}
            className={`mb-4 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#F9F9FB] py-6 transition-colors ${
              isDragOver ? "bg-[#F0F0FF]" : "hover:bg-[#F5F5FF]"
            }`}
          >
            <Upload className="mb-2 size-5 text-[#A0A0AA]" />
            <p className="font-poppins text-[13px] font-medium text-[#111]">
              Upload or Drag and Drop
            </p>
            <p className="mt-0.5 font-poppins text-[11px] text-[#999]">or</p>
            <button
              type="button"
              className="mt-1.5 rounded-full bg-white px-4 py-1 font-poppins text-[12px] font-medium text-[#2F45FF] shadow-sm hover:underline"
            >
              Browse Files
            </button>
          </div>
        )}

        {error && (
          <p className="mb-2 text-xs text-red-500">{error}</p>
        )}

        <div className="mt-2">
          <button
            type="submit"
            disabled={loading || !file}
            className="w-full rounded-full bg-[#2F45FF] px-6 py-3 font-poppins text-[14px] font-medium text-white transition-colors hover:bg-[#1a30e0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </button>
        </div>
      </form>
    </VerificationCard>
  );
}
