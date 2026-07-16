"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CheckoutHeader() {
  const router = useRouter();

  return (
    <header className="border-b border-[#E6E6EC] bg-white px-6 py-5 sm:px-10 lg:px-16">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex size-9 items-center justify-center rounded-full bg-[#F5F5FF] text-[#07104F] transition-colors hover:bg-[#E8E8FF]"
        >
          <ArrowLeft className="size-4" />
        </button>
        <h1 className="text-[20px] font-semibold text-[#07104F]">Checkout</h1>
      </div>
    </header>
  );
}
