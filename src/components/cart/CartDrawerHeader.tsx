import { X } from "lucide-react";

import { useCartStore } from "@/store/cart";

type CartDrawerHeaderProps = {
  itemCount: number;
};

export function CartDrawerHeader({ itemCount }: CartDrawerHeaderProps) {
  const closeDrawer = useCartStore((s) => s.closeDrawer);

  return (
    <div className="flex h-[90px] shrink-0 items-center justify-between border-b border-[#ECECEC] px-6">
      <h2 className="text-lg font-semibold text-gray-900">
        {itemCount} {itemCount === 1 ? "item" : "items"} in cart
      </h2>
      <button
        type="button"
        onClick={closeDrawer}
        aria-label="Close cart"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
