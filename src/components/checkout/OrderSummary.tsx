"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import type { CheckoutItem } from "@/data/checkout";

type OrderSummaryProps = {
  items: CheckoutItem[];
  onRemoveItem: (id: string) => void;
  onApplyCoupon: (code: string) => void;
  couponCode: string;
  setCouponCode: (code: string) => void;
  showCoupon: boolean;
  setShowCoupon: (show: boolean) => void;
  coinsDiscount: number;
  setCoinsDiscount: (val: number) => void;
};

export function OrderSummary({
  items,
  onRemoveItem,
  onApplyCoupon,
  couponCode,
  setCouponCode,
  showCoupon,
  setShowCoupon,
  coinsDiscount,
  setCoinsDiscount,
}: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.originalPrice, 0);
  const itemDiscount = items.reduce(
    (sum, item) => sum + (item.originalPrice - item.finalPrice),
    0
  );
  const total = items.reduce((sum, item) => sum + item.finalPrice, 0) - coinsDiscount;

  return (
    <div className="rounded-2xl bg-[#F7F7FF] p-4 sm:p-6 lg:p-8">
      <h2 className="mb-6 text-[18px] font-semibold text-[#07104F]">
        Order Summary
      </h2>

      {/* Items */}
      <div className="space-y-0 divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#2F3CFF]">{item.type}</p>
              <p className="truncate text-sm font-semibold text-[#07104F]">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-[#777]">{item.description}</p>
              <div className="mt-1 flex items-center gap-2">
                {item.discountPercentage ? (
                  <>
                    <span className="text-xs text-[#777] line-through">
                      {item.originalPrice} USD
                    </span>
                    <span className="text-xs font-medium text-green-600">
                      -{item.discountPercentage}%
                    </span>
                  </>
                ) : (
                  <span className="text-xs text-[#777]">
                    {item.originalPrice} USD
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-gray-400 transition-colors hover:text-red-500"
                aria-label={`Remove ${item.title}`}
              >
                <Trash2 className="size-4" />
              </button>
              <span className="text-sm font-semibold text-[#07104F]">
                {item.finalPrice.toFixed(2)} USD
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Discounts */}
      <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={coinsDiscount > 0}
            onChange={() => setCoinsDiscount(coinsDiscount > 0 ? 0 : 17)}
            className="size-4 rounded border-gray-300 accent-[#2F3CFF]"
          />
          Apply Coins Discount
        </label>

        <div>
          <button
            type="button"
            onClick={() => setShowCoupon(!showCoupon)}
            className="text-sm font-medium text-[#2F3CFF]"
          >
            Do you have a coupon code?
          </button>
          {showCoupon && (
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon code"
                className="h-10 flex-1 rounded-md border border-[#E6E6EC] bg-white px-3 text-sm outline-none focus:border-[#2F3CFF]"
              />
              <button
                type="button"
                onClick={() => onApplyCoupon(couponCode)}
                className="rounded-md bg-[#2F3CFF] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2530CC]"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Totals */}
      <div className="mt-6 space-y-3 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between text-sm text-[#777]">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} USD</span>
        </div>
        {itemDiscount > 0 && (
          <div className="flex items-center justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>-{itemDiscount.toFixed(2)} USD</span>
          </div>
        )}
        {coinsDiscount > 0 && (
          <div className="flex items-center justify-between text-sm text-green-600">
            <span>Coins</span>
            <span>-{coinsDiscount.toFixed(2)} USD</span>
          </div>
        )}
        <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-base font-semibold text-[#07104F]">
          <span>Total</span>
          <span>{total.toFixed(2)} USD</span>
        </div>
      </div>
    </div>
  );
}
