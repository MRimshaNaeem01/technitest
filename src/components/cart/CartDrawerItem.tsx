"use client";

import { Trash2 } from "lucide-react";

import { useCartStore, type CartItem } from "@/store/cart";
import { CartItemImage } from "./CartItemImage";
import { CartItemPrice } from "./CartItemPrice";

type CartDrawerItemProps = {
  item: CartItem;
};

export function CartDrawerItem({ item }: CartDrawerItemProps) {
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
      {/* Radio */}
      <div className="flex shrink-0 items-start pt-4">
        <div className="h-4 w-4 rounded-full border-2 border-[#2945FF]" />
      </div>

      {/* Image */}
      <CartItemImage src={item.image} alt={item.title} />

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <span className="text-xs font-medium text-[#2945FF]">
            {item.type}
          </span>
          <h3 className="mt-0.5 truncate text-sm font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
            {item.description}
          </p>
        </div>
        <CartItemPrice
          originalPrice={item.originalPrice}
          discountPercentage={item.discountPercentage}
          finalPrice={item.finalPrice}
        />
      </div>

      {/* Delete */}
      <button
        type="button"
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.title}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
