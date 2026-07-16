"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type UserRole = "student" | "professional";

type RoleSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (role: UserRole) => void;
};

export function RoleSelectionModal({
  isOpen,
  onClose,
  onSave,
}: RoleSelectionModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    setSelectedRole(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!selectedRole) return;
    localStorage.setItem("technitest-user-role", selectedRole);
    onSave(selectedRole);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="role-selection-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[540px] rounded-2xl bg-white px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close role selection modal"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
        >
          <X className="size-4" />
        </button>

        <h2
          id="role-selection-title"
          className="mb-2 text-center text-xl font-bold text-[#07104F]"
        >
          Select Your Role to Personalize
          <br />
          Your Experience
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedRole("student")}
            className={cn(
              "h-14 rounded-lg border bg-white px-5 text-left text-sm font-medium text-[#07104F] transition-all focus:outline-none focus:ring-2 focus:ring-[#F5A000] focus:ring-offset-2",
              selectedRole === "student"
                ? "border-[#F5A000] bg-orange-50"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole("professional")}
            className={cn(
              "h-14 rounded-lg border bg-white px-5 text-left text-sm font-medium text-[#07104F] transition-all focus:outline-none focus:ring-2 focus:ring-[#F5A000] focus:ring-offset-2",
              selectedRole === "professional"
                ? "border-[#F5A000] bg-orange-50"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            Professional
          </button>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={!selectedRole}
          className={cn(
            "mt-6 h-12 w-full rounded-full text-sm font-medium text-white transition-colors",
            selectedRole
              ? "bg-[#F5A000] hover:bg-[#DD9000]"
              : "cursor-not-allowed bg-gray-300"
          )}
        >
          Save & Continue
        </button>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-xs text-[#777] transition-colors hover:text-[#07104F]"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}
