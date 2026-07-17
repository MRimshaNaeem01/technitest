"use client";

import { CreditCard, Star, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SavedPaymentMethod } from "../profile-types";

const providerLabels: Record<SavedPaymentMethod["provider"], string> = {
  stripe: "Stripe",
  paypal: "PayPal",
  jazzcash: "JazzCash",
  easypaisa: "Easypaisa",
};

const providerColors: Record<SavedPaymentMethod["provider"], string> = {
  stripe: "bg-[#635BFF]",
  paypal: "bg-[#003087]",
  jazzcash: "bg-[#E41E31]",
  easypaisa: "bg-[#1BA44C]",
};

type SavedPaymentCardProps = {
  method: SavedPaymentMethod;
  onSetDefault: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function SavedPaymentCard({
  method,
  onSetDefault,
  onEdit,
  onDelete,
}: SavedPaymentCardProps) {
  return (
    <div
      className={cn(
        "rounded-[6px] border bg-white px-6 py-5",
        method.isDefault ? "border-[#2945FF]" : "border-[#E7E9F5]"
      )}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              providerColors[method.provider]
            )}
          >
            <CreditCard className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-poppins text-[14px] font-semibold text-[#0B0B0B]">
              {providerLabels[method.provider]}
            </p>
            <p className="font-poppins text-[12px] text-[#999]">
              {method.maskedNumber}
            </p>
          </div>
        </div>
        {method.isDefault && (
          <span className="flex items-center gap-1 rounded-full bg-[#E8F5E9] px-3 py-1 font-poppins text-[11px] font-medium text-[#2E7D32]">
            <Star className="h-3 w-3 fill-[#2E7D32]" />
            Default
          </span>
        )}
      </div>

      {/* Info row */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="font-poppins text-[11px] text-[#999]">Holder Name</p>
          <p className="mt-0.5 font-poppins text-[13px] font-medium text-[#333]">
            {method.holderName}
          </p>
        </div>
        <div>
          <p className="font-poppins text-[11px] text-[#999]">Added On</p>
          <p className="mt-0.5 font-poppins text-[13px] text-[#333]">
            {method.date}
          </p>
        </div>
      </div>

      {/* Actions row */}
      <div className="mt-4 flex items-center gap-2 border-t border-[#F0F0F5] pt-4">
        {!method.isDefault && (
          <button
            type="button"
            onClick={() => onSetDefault(method.id)}
            className="flex items-center gap-1.5 rounded-full bg-[#2945FF] px-4 py-1.5 font-poppins text-[12px] font-medium text-white transition-colors hover:bg-[#1a30e0]"
          >
            <Star className="h-3.5 w-3.5" />
            Set as Default
          </button>
        )}
        <button
          type="button"
          onClick={() => onEdit(method.id)}
          className="flex items-center gap-1.5 rounded-full border border-[#D1D5DB] bg-white px-4 py-1.5 font-poppins text-[12px] font-medium text-[#333] transition-colors hover:bg-[#F9F9FB]"
        >
          <Pencil className="h-3.5 w-3.5" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(method.id)}
          className="flex items-center gap-1.5 rounded-full border border-[#F5C6C6] bg-[#FFF5F5] px-4 py-1.5 font-poppins text-[12px] font-medium text-[#E05A5A] transition-colors hover:bg-[#FDECEC]"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>
    </div>
  );
}
