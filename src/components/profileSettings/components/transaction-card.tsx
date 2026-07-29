"use client";

import { Eye, Download, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Transaction } from "../profile-types";

const typeBadgeStyles: Record<Transaction["type"], string> = {
  "re-attempt": "bg-[#FFF3E0] text-[#E67E22]",
  renewal: "bg-[#E8F5E9] text-[#2E7D32]",
  quiz: "bg-[#E3F2FD] text-[#1565C0]",
};

const typeLabels: Record<Transaction["type"], string> = {
  "re-attempt": "Re-Attempt",
  renewal: "Renewal",
  quiz: "Quiz",
};

const statusStyles: Record<Transaction["status"], string> = {
  success: "bg-[#EAF8EA] text-[#2E8B57]",
  cancelled: "bg-[#FDECEC] text-[#E05A5A]",
  pending: "bg-[#FFF8E6] text-[#D4A017]",
};

export function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <div className="rounded-[6px] border border-[#E7E9F5] bg-white px-4 py-4 sm:px-8 sm:py-6">
      {/* Top row: badges + refund status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-3 py-1 font-poppins text-[11px] font-semibold",
              typeBadgeStyles[transaction.type]
            )}
          >
            {typeLabels[transaction.type]}
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 font-poppins text-[11px] font-semibold capitalize",
              statusStyles[transaction.status]
            )}
          >
            {transaction.status}
          </span>
        </div>
        <span className="rounded-full bg-[#F5F5F5] px-3 py-1 font-poppins text-[10px] font-medium text-[#888] capitalize">
          {transaction.refundStatus.replace("-", " ")}
        </span>
      </div>

      {/* Main info row */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <p className="font-poppins text-[11px] text-[#999]">Order ID</p>
          <p className="mt-0.5 font-poppins text-[14px] font-semibold text-[#0B0B0B]">
            {transaction.orderId}
          </p>
        </div>
        <div>
          <p className="font-poppins text-[11px] text-[#999]">Date</p>
          <p className="mt-0.5 font-poppins text-[13px] text-[#333]">
            {transaction.date}
          </p>
        </div>
        <div>
          <p className="font-poppins text-[11px] text-[#999]">Total</p>
          <p className="mt-0.5 font-poppins text-[14px] font-bold text-[#0B0B0B]">
            {transaction.currency} {transaction.amount.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-4 flex flex-col gap-3 border-t border-[#F0F0F5] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[#666]">
          <CreditCard className="h-4 w-4" />
          <span className="font-poppins text-[12px]">{transaction.paymentMethod}</span>
        </div>
        <div className="flex items-center gap-2">
          {transaction.receiptUrl && (
            <button className="flex items-center gap-1.5 rounded-full bg-[#2945FF] px-4 py-1.5 font-poppins text-[12px] font-medium text-white transition-colors hover:bg-[#1a30e0]">
              <Eye className="h-3.5 w-3.5" />
              View Receipt
            </button>
          )}
          {transaction.invoiceUrl && (
            <button className="flex items-center gap-1.5 rounded-full border border-[#D1D5DB] bg-white px-4 py-1.5 font-poppins text-[12px] font-medium text-[#333] transition-colors hover:bg-[#F9F9FB]">
              <Download className="h-3.5 w-3.5" />
              Download Invoice
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
