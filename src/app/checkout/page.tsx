"use client";

import { useState } from "react";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { BillingForm } from "@/components/checkout/BillingForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { InvoiceModal } from "@/components/checkout/InvoiceModal";
import { dummyCheckoutItems } from "@/data/checkout";
import type { CheckoutItem } from "@/data/checkout";

export default function CheckoutPage() {
  const [items, setItems] = useState<CheckoutItem[]>(dummyCheckoutItems);
  const [selectedPayment, setSelectedPayment] = useState("paypal");
  const [isInvoiceOpen, setInvoiceOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [showCoupon, setShowCoupon] = useState(false);
  const [coinsDiscount, setCoinsDiscount] = useState(0);

  const totalAmount = items.reduce((sum, item) => sum + item.finalPrice, 0) - coinsDiscount;

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (code: string) => {
    if (code.trim()) {
      setShowCoupon(false);
      setCouponCode("");
    }
  };

  const handleSubmit = () => {
    setInvoiceOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <CheckoutHeader />

      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          {/* Left — Billing + Payment */}
          <div className="lg:w-[55%] lg:pr-10 lg:border-r lg:border-[#E6E6EC]">
            <BillingForm
              items={items}
              selectedPayment={selectedPayment}
              onSelectPayment={setSelectedPayment}
              onRemoveItem={handleRemoveItem}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Right — Order Summary */}
          <div className="lg:w-[45%] lg:pl-10">
            <OrderSummary
              items={items}
              onRemoveItem={handleRemoveItem}
              onApplyCoupon={handleApplyCoupon}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              showCoupon={showCoupon}
              setShowCoupon={setShowCoupon}
              coinsDiscount={coinsDiscount}
              setCoinsDiscount={setCoinsDiscount}
            />
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      <InvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setInvoiceOpen(false)}
        items={items}
        totalAmount={totalAmount}
      />
    </div>
  );
}
