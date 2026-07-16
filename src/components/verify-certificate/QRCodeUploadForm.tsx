"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { QrCode, Upload, X } from "lucide-react";

import { VerificationCard } from "./VerificationCard";

type QRCodeUploadFormProps = {
  onVerify: (file: File) => void;
  loading: boolean;
};

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

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
    if (f.size > MAX_SIZE) {
      setError("File size must be less than 5MB");
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
    <VerificationCard className="flex-1">
      <div className="mb-6 flex justify-center">
        <div className="flex h-[140px] w-[140px] items-center justify-center rounded-2xl bg-[#F0F0FF]">
          <QrCode className="h-16 w-16 text-[#2F45FF]" strokeWidth={1.2} />
        </div>
      </div>

      <h3 className="mb-2 text-center text-xl font-semibold text-[#111]">
        Verify by QR Code
      </h3>
      <p className="mb-6 text-center text-sm text-[#666]">
        Upload an image of the QR code from your certificate.
      </p>

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
              <p className="truncate text-sm font-medium text-[#111]">
                {file?.name}
              </p>
              <p className="text-xs text-[#999]">
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
            className={`mb-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
              isDragOver
                ? "border-[#2F45FF] bg-[#F0F0FF]"
                : "border-[#E2E2E8] bg-[#FAFAFA] hover:border-[#2F45FF] hover:bg-[#F5F5FF]"
            }`}
          >
            <Upload className="mb-3 size-8 text-[#A0A0AA]" />
            <p className="text-sm font-medium text-[#111]">
              Drag & drop your QR code here
            </p>
            <p className="mt-1 text-xs text-[#999]">or</p>
            <button
              type="button"
              className="mt-2 text-sm font-medium text-[#2F45FF] hover:underline"
            >
              Browse Files
            </button>
            <p className="mt-2 text-xs text-[#999]">
              Accepted: .png, .jpg, .jpeg (max 5MB)
            </p>
          </div>
        )}

        {error && (
          <p className="mb-2 text-xs text-red-500">{error}</p>
        )}

        <div className="mt-auto pt-4">
          <button
            type="submit"
            disabled={loading || !file}
            className="w-full rounded-lg bg-[#2F45FF] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a30e0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </button>
        </div>
      </form>
    </VerificationCard>
  );
}
