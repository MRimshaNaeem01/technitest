"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, MapPin, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProfileUser } from "./profile-types";

type ProfileHeaderProps = {
  user: ProfileUser;
};

const socialLinks = [
  {
    name: "Facebook",
    color: "#1877F2",
    icon: "M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z",
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Instagram",
    color: "#E4405F",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    name: "Gmail",
    color: "#EA4335",
    icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  },
];

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(user.referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-8
          lg:grid-cols-[minmax(340px,1.25fr)_1px_minmax(250px,0.8fr)_1px_minmax(280px,0.9fr)]
          lg:gap-10
        "
      >
        {/* ── Profile Identity ── */}
        <div className="flex items-center gap-6">
          <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#F4D394]">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
              sizes="150px"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="font-poppins text-[20px] font-semibold text-[#0B0B0B]">
                {user.name}
              </h2>
              <button
                className="text-[#BBB] transition-colors hover:text-[#666]"
                aria-label="Edit name"
              >
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            <p className="font-poppins text-[14px] font-medium text-[#2945FF]">
              {user.title}
            </p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#2945FF]" />
              <span className="font-poppins text-[13px] text-[#555]">
                {user.location}
              </span>
            </div>
          </div>
        </div>

        {/* ── Vertical Divider ── */}
        <div className="hidden lg:block" aria-hidden>
          <div className="mx-auto h-[160px] w-px bg-[#E4E6F4]" />
        </div>

        {/* ── Referral Section ── */}
        <div className="mx-auto w-full max-w-[270px] bg-white px-5 py-5">
          <p className="font-poppins text-[13px] font-medium text-[#0B0B0B]">
            Referral link
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                readOnly
                value={user.referralLink}
                className="h-[34px] w-full rounded-md border border-[#E2E2E8] bg-[#F7F7FA] px-3 pr-9 font-poppins text-[12px] text-[#333] outline-none"
              />
              <button
                onClick={handleCopy}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[#888] transition-colors hover:text-[#2945FF]"
                aria-label="Copy referral link"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Invite divider */}
          <div className="my-3 flex items-center gap-2">
            <span className="h-px flex-1 bg-[#D5D7E3]" />
            <span className="whitespace-nowrap font-poppins text-[11px] text-[#999]">
              or invite on
            </span>
            <span className="h-px flex-1 bg-[#D5D7E3]" />
          </div>

          {/* Social icons — colored, no backgrounds */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                aria-label={social.name}
                className="transition-opacity hover:opacity-80"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill={social.color}
                >
                  <path d={social.icon} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* ── Vertical Divider ── */}
        <div className="hidden lg:block" aria-hidden>
          <div className="mx-auto h-[160px] w-px bg-[#E4E6F4]" />
        </div>

        {/* ── Coins Section ── */}
        <div className="min-w-[280px]">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins text-[13px] font-bold uppercase tracking-wider text-[#0B0B0B]">
              Coins
            </h3>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3D6]">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="#F5A000"
                >
                  <circle cx="12" cy="12" r="10" />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    $
                  </text>
                </svg>
              </span>
              <span className="font-poppins text-[16px] font-bold text-[#0B0B0B]">
                ({user.coins})
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[13px] text-[#777]">
                Issued Coins
              </span>
              <span className="font-poppins text-[13px] font-medium text-[#0B0B0B]">
                {user.issuedCoins}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[13px] text-[#777]">
                Issued Date
              </span>
              <span className="font-poppins text-[13px] font-medium text-[#0B0B0B]">
                {user.issuedDate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[13px] text-[#777]">
                Expiry Date
              </span>
              <span className="font-poppins text-[13px] font-medium text-[#0B0B0B]">
                {user.expiryDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
