import Link from "next/link";
import { SearchX } from "lucide-react";

export function VerificationEmptyState() {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-[#F5F5F5]">
        <SearchX className="size-10 text-[#A0A0AA]" />
      </div>
      <h3 className="text-xl font-semibold text-[#111]">No Match Found</h3>
      <p className="mt-2 max-w-[420px] text-sm leading-relaxed text-[#666]">
        It seems there&apos;s no certificate linked to this ID or QR code.
        Please verify your details and try again.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#2F45FF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a30e0]"
      >
        Back to Home
      </Link>
    </div>
  );
}
