"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  isPassword?: boolean;
};

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, type = "text", placeholder, error, isPassword, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const inputType = isPassword ? (show ? "text" : "password") : type;

    return (
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className={`h-11 w-full rounded-lg border bg-white px-4 text-sm text-[#0B0B0B] outline-none transition-colors placeholder:text-gray-400 ${
              error ? "border-red-500" : "border-gray-200 focus:border-[#EA9700]"
            }`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              tabIndex={-1}
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";
