import { BannerBreadcrumb } from "@/components/common/BannerBreadcrumb";

export function VerificationBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7FF] py-14">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dotted pattern left */}
        <svg className="absolute left-[8%] top-[20%] h-16 w-16 opacity-20" viewBox="0 0 64 64" fill="none">
          <circle cx="4" cy="4" r="1.5" fill="#F5A000" />
          <circle cx="16" cy="4" r="1.5" fill="#F5A000" />
          <circle cx="28" cy="4" r="1.5" fill="#F5A000" />
          <circle cx="40" cy="4" r="1.5" fill="#F5A000" />
          <circle cx="4" cy="16" r="1.5" fill="#F5A000" />
          <circle cx="16" cy="16" r="1.5" fill="#F5A000" />
          <circle cx="28" cy="16" r="1.5" fill="#F5A000" />
          <circle cx="40" cy="16" r="1.5" fill="#F5A000" />
          <circle cx="4" cy="28" r="1.5" fill="#F5A000" />
          <circle cx="16" cy="28" r="1.5" fill="#F5A000" />
          <circle cx="28" cy="28" r="1.5" fill="#F5A000" />
          <circle cx="40" cy="28" r="1.5" fill="#F5A000" />
        </svg>

        {/* Orange curved arrow left */}
        <svg className="absolute left-[5%] top-[55%] h-10 w-10 text-[#F5A000] opacity-30" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 32C8 18 20 8 32 8" strokeLinecap="round" />
          <path d="M28 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Orange zigzag right */}
        <svg className="absolute right-[10%] top-[25%] h-8 w-12 text-[#F5A000] opacity-25" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 8l8-4 8 4 8-4 8 4 8-4" />
          <path d="M4 20l8-4 8 4 8-4 8 4 8-4" />
        </svg>

        {/* White star shape lower center-right */}
        <svg className="absolute right-[18%] top-[55%] h-20 w-20 opacity-10" viewBox="0 0 80 80" fill="white">
          <path d="M40 0l9.5 27.5H80l-22 16 8.5 26.5L40 54l-26.5 16L22 43.5 0 27.5h30.5z" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-4">
          <BannerBreadcrumb currentPage="Verify Certificate" />
        </div>
        <h1 className="type-page text-[32px] font-medium md:text-[40px]">
          Securely Verify Your Credentials
        </h1>
        <p className="mx-auto mt-4 max-w-[520px] font-poppins text-[16px] leading-[26px] text-[#777777]">
          Make sure your achievement is authentic and recognized.
        </p>
      </div>
    </section>
  );
}
