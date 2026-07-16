"use client";

import { ShoppingBag } from "lucide-react";

import { useCartStore } from "@/store/cart";

export function EmptyCart() {
  const closeDrawer = useCartStore((s) => s.closeDrawer);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <ShoppingBag className="h-10 w-10 text-gray-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        Your cart is empty
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        Looks like you haven&apos;t added any quizzes yet.
      </p>
      <button
        type="button"
        onClick={closeDrawer}
        className="mt-6 rounded-full bg-[#2945FF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2338cc]"
      >
        Continue Shopping
      </button>
    </div>
  );
}
