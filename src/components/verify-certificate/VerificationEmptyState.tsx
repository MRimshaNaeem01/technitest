import Link from "next/link";

export function VerificationEmptyState() {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="mb-5 flex size-[72px] items-center justify-center rounded-full bg-[#EEF0FF]">
        <svg className="size-8 text-[#2F45FF]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="14" cy="14" r="10" />
          <path d="M21 21l6 6" strokeLinecap="round" />
          <path d="M10 14h8" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="font-poppins text-[18px] font-semibold text-[#111]">
        No Match Found
      </h3>
      <p className="mt-2 max-w-[400px] font-poppins text-[13px] leading-[22px] text-[#777]">
        It seems there&apos;s no certificate linked to this ID or QR code. Please
        verify your details and try again.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-[#F59E0B] px-8 py-2.5 font-poppins text-[14px] font-medium text-white transition-colors hover:bg-[#D97706]"
      >
        Back to Home
      </Link>
    </div>
  );
}
