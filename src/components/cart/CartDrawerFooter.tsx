"use client";

import { useRouter } from "next/navigation";

import { useCartStore } from "@/store/cart";

type CartDrawerFooterProps = {
  total: number;
};

export function CartDrawerFooter({ total }: CartDrawerFooterProps) {
  const router = useRouter();
  const closeDrawer = useCartStore((s) => s.closeDrawer);

  const handleCheckout = () => {
    closeDrawer();
    router.push("/checkout");
  };

  return (
    <div className="mt-auto shrink-0 border-t border-[#ECECEC] px-6 py-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Total</span>
        <span className="text-base font-semibold text-gray-900">
          {total.toFixed(2)} USD
        </span>
      </div>
      <button
        type="button"
        onClick={handleCheckout}
        className="flex h-14 w-full items-center justify-center rounded-[14px] bg-[#2945FF] text-base font-medium text-white transition-colors hover:bg-[#2338cc]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
