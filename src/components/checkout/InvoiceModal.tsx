"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { X, Printer, Download, CheckCircle } from "lucide-react";
import type { CheckoutItem } from "@/data/checkout";

type InvoiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CheckoutItem[];
  totalAmount: number;
};

export function InvoiceModal({
  isOpen,
  onClose,
  items,
  totalAmount,
}: InvoiceModalProps) {
  const router = useRouter();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const now = new Date();
  const orderId = `2708${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const purchaseDate = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getFullYear()).slice(2)} / ${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`;

  const subtotal = items.reduce((sum, item) => sum + item.originalPrice, 0);
  const couponDiscount = Math.round(totalAmount * 0.1);
  const coinsDiscount = Math.round(totalAmount * 0.05);
  const receivedPayment = totalAmount;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="invoice-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close invoice"
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
        >
          <X className="size-4" />
        </button>

        {/* Left — Success Panel */}
        <div className="flex flex-col items-center justify-center bg-[#F7F7FF] px-8 py-10 text-center lg:w-[38%] lg:py-16">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="size-10 text-green-500" />
          </div>
          <h2 className="mb-1 text-xl font-bold text-[#07104F]">
            You&apos;re all set!
          </h2>
          <p className="mb-6 text-sm text-[#777]">
            Thank you for placing order.
          </p>

          <p className="mb-1 text-xs text-[#777]">Amount (USD)</p>
          <p className="mb-4 text-3xl font-bold text-[#2F3CFF]">
            ${totalAmount.toFixed(2)}
          </p>

          <p className="mb-8 text-xs text-[#777]">
            Order #{orderId}
          </p>

          <button
            onClick={() => {
              onClose();
              router.push("/");
            }}
            className="rounded-full border border-[#E6E6EC] px-6 py-2.5 text-sm font-medium text-[#07104F] transition-colors hover:bg-gray-50"
          >
            back to Home
          </button>
        </div>

        {/* Vertical divider */}
        <div className="hidden w-px bg-gray-200 lg:block" />

        {/* Right — Invoice Details */}
        <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
          <h3
            id="invoice-title"
            className="mb-6 text-lg font-semibold text-[#07104F]"
          >
            Invoice
          </h3>

          {/* Order info */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#777]">Order ID</p>
              <p className="mt-0.5 text-sm font-semibold text-[#07104F]">
                {orderId}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#777]">Status</p>
              <p className="mt-0.5 text-sm font-semibold text-[#F5A000]">
                Pending
              </p>
            </div>
            <div>
              <p className="text-xs text-[#777]">Customer ID</p>
              <p className="mt-0.5 text-sm font-semibold text-[#07104F]">
                {orderId}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#777]">Purchase Date</p>
              <p className="mt-0.5 text-sm font-semibold text-[#07104F]">
                {purchaseDate}
              </p>
            </div>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Bill To / Bill From */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2 text-xs font-medium text-[#777]">Bill To</p>
              <p className="text-sm font-semibold text-[#07104F]">Naveed Khan</p>
              <p className="text-xs text-[#777]">Softtechcube.com</p>
              <p className="text-xs text-[#777]">+1 671 234 56789</p>
              <p className="text-xs text-[#777]">naveed@gmail.com</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[#777]">Bill From</p>
              <p className="text-sm font-semibold text-[#07104F]">TechniTest</p>
              <p className="text-xs text-[#777]">Technitest.com</p>
              <p className="text-xs text-[#777]">+92 326 578 9523</p>
              <p className="text-xs text-[#777]">info@technitest.com</p>
            </div>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Payment info */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#777]">Payment Method</p>
              <p className="mt-0.5 text-sm font-semibold text-[#07104F]">Paypal</p>
            </div>
            <div>
              <p className="text-xs text-[#777]">Card / Account</p>
              <p className="mt-0.5 text-sm font-semibold text-[#07104F]">
                ********1234
              </p>
            </div>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Items Table */}
          <div className="mb-4">
            <div className="mb-2 grid grid-cols-[2rem_1fr_auto] gap-2 text-xs font-medium text-[#777]">
              <span>Sr</span>
              <span>Course / Quiz Name</span>
              <span className="text-right">Amount</span>
            </div>
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-[2rem_1fr_auto] gap-2 py-2 text-sm"
              >
                <span className="text-[#777]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[#07104F]">
                  {item.title} ({item.type})
                </span>
                <span className="text-right font-semibold text-[#07104F]">
                  USD {item.finalPrice}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#777]">Sub Total</span>
              <span className="font-semibold text-[#07104F]">
                USD {subtotal}
              </span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Coupon (10%)</span>
              <span>USD ({couponDiscount})</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Coins (75)</span>
              <span>USD ({coinsDiscount})</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-[#07104F]">
              <span>Gross Total</span>
              <span>USD {subtotal - couponDiscount - coinsDiscount}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-bold text-[#07104F]">
              <span>Total</span>
              <span>USD {totalAmount}</span>
            </div>
            <div className="flex justify-between pt-1 font-semibold text-[#F5A000]">
              <span>Received Payment</span>
              <span>USD {receivedPayment}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F5A000] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E09000]"
            >
              <Printer className="size-4" />
              Print
            </button>
            <button
              onClick={() => {
                /* placeholder for PDF download */
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2F3CFF] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2530CC]"
            >
              <Download className="size-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
