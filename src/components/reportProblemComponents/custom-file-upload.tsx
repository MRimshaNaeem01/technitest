"use client";

import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";

type CustomFileUploadProps = {
  value: File | null;
  onChange: (file: File | null) => void;
};

export function CustomFileUpload({ value, onChange }: CustomFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
    setFileName(file?.name ?? null);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg border border-[#E2E2E8] bg-white px-5 py-2.5 text-sm text-[#666] transition-colors hover:border-[#2F45FF] hover:text-[#2F45FF]"
      >
        <Paperclip className="size-4" />
        Upload file
      </button>
      <span className="text-sm text-[#999]">
        {fileName || "No file chosen"}
      </span>
    </div>
  );
}
