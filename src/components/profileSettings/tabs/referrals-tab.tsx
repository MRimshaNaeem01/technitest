"use client";

import { Coins, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { profileReferrals } from "../profile-data";
import type { Referral } from "../profile-types";

function ReferralCard({ referral }: { referral: Referral }) {
  return (
    <div className="rounded-[6px] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      {/* Status badge */}
      <span
        className={cn(
          "inline-block rounded-full px-3 py-1 font-poppins text-[11px] font-semibold",
          referral.status === "active"
            ? "bg-[#EAF8EA] text-[#2E8B57]"
            : "bg-[#FDECEC] text-[#E05A5A]"
        )}
      >
        {referral.status === "active" ? "Active" : "Expired"} Until{" "}
        {referral.statusDate}
      </span>

      {/* Name + coins */}
      <div className="mt-3 flex items-center justify-between">
        <h4 className="font-poppins text-[15px] font-semibold text-[#0B0B0B]">
          {referral.name}
        </h4>
        <div className="flex items-center gap-1">
          <Coins className="h-4 w-4 text-[#F5A000]" />
          <span className="font-poppins text-[14px] font-bold text-[#0B0B0B]">
            {referral.coinsEarned}
          </span>
        </div>
      </div>

      {/* Info grid */}
      <div className="mt-4 space-y-2 border-t border-[#F0F0F5] pt-3">
        <div className="flex items-center justify-between">
          <span className="font-poppins text-[12px] text-[#999]">Email</span>
          <span className="font-poppins text-[12px] text-[#333]">
            {referral.email}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-poppins text-[12px] text-[#999]">Phone</span>
          <span className="font-poppins text-[12px] text-[#333]">
            {referral.phone}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-poppins text-[12px] text-[#999]">
            Registered on
          </span>
          <span className="font-poppins text-[12px] text-[#333]">
            {referral.registeredOn}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ReferralsTab() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
        My Referrals
      </h3>

      {/* Referral Grid */}
      {profileReferrals.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
            <Share2 className="h-7 w-7 text-[#CCC]" />
          </div>
          <p className="font-poppins text-[15px] font-medium text-[#333]">
            No referrals found.
          </p>
          <p className="mt-1 font-poppins text-[13px] text-[#999]">
            Share your referral link to invite friends.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileReferrals.map((r) => (
            <ReferralCard key={r.id} referral={r} />
          ))}
        </div>
      )}
    </div>
  );
}
