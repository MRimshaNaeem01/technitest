"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { profileSavedPayments } from "../profile-data";
import { SavedPaymentCard } from "../components/saved-payment-card";
import type { SavedPaymentMethod } from "../profile-types";

const paymentSchema = z.object({
  provider: z.enum(["stripe", "paypal", "jazzcash", "easypaisa"]),
  holderName: z.string().min(1, "Holder name is required"),
  cardNumber: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(19, "Card number is too long"),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().min(3, "CVV must be 3-4 digits").max(4),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

const providers = [
  { id: "stripe" as const, label: "Stripe" },
  { id: "paypal" as const, label: "PayPal" },
  { id: "jazzcash" as const, label: "JazzCash" },
  { id: "easypaisa" as const, label: "Easypaisa" },
];

const providerColors: Record<string, string> = {
  stripe: "border-[#635BFF] bg-[#F5F4FF]",
  paypal: "border-[#003087] bg-[#F0F5FF]",
  jazzcash: "border-[#E41E31] bg-[#FFF0F2]",
  easypaisa: "border-[#1BA44C] bg-[#F0FAF3]",
};

export function PaymentMethodTab() {
  const [payments, setPayments] = useState(profileSavedPayments);
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      provider: "stripe",
      holderName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const selectedProvider = watch("provider");

  function setDefault(id: string) {
    setPayments((prev) =>
      prev.map((m) => ({ ...m, isDefault: m.id === id }))
    );
  }

  function editMethod(_id: string) {
    // placeholder for edit flow
  }

  function deleteMethod(id: string) {
    setPayments((prev) => prev.filter((m) => m.id !== id));
  }

  function onSubmit(data: PaymentFormValues) {
    const masked =
      data.provider === "paypal"
        ? data.holderName
        : `**** **** **** ${data.cardNumber.slice(-4)}`;

    const newMethod: SavedPaymentMethod = {
      id: `sp-${Date.now()}`,
      provider: data.provider,
      holderName: data.holderName,
      maskedNumber: masked,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      isDefault: payments.length === 0,
    };
    setPayments((prev) => [...prev, newMethod]);
    reset();
    setShowForm(false);
  }

  const hasPayments = payments.length > 0;

  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
          Payment Method
        </h3>
        <button
          type="button"
          onClick={() => setShowForm((s) => !s)}
          className="flex items-center gap-1.5 rounded-full bg-[#2945FF] px-4 py-2 font-poppins text-[12px] font-medium text-white transition-colors hover:bg-[#1a30e0]"
        >
          <Plus className="h-3.5 w-3.5" />
          Add New
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 rounded-lg border border-[#E7E9F5] bg-[#FAFBFE] p-5"
        >
          {/* Provider selection */}
          <div>
            <p className="mb-2 font-poppins text-[13px] font-medium text-[#333]">
              Select Provider
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {providers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setValue("provider", p.id)}
                  className={cn(
                    "flex h-12 items-center justify-center rounded-lg border-2 font-poppins text-[13px] font-medium transition-colors",
                    selectedProvider === p.id
                      ? cn(providerColors[p.id], "border-current")
                      : "border-[#E7E9F5] bg-white text-[#666] hover:border-[#CCC]"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Card fields */}
          {selectedProvider !== "paypal" && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-poppins text-[12px] text-[#666]">
                  Card Number
                </label>
                <input
                  {...register("cardNumber")}
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-lg border border-[#E7E9F5] bg-white px-3 py-2.5 font-poppins text-[13px] text-[#333] outline-none focus:border-[#2945FF]"
                />
                {errors.cardNumber && (
                  <p className="mt-0.5 font-poppins text-[11px] text-[#E05A5A]">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block font-poppins text-[12px] text-[#666]">
                    Expiry
                  </label>
                  <input
                    {...register("expiry")}
                    placeholder="MM/YY"
                    className="w-full rounded-lg border border-[#E7E9F5] bg-white px-3 py-2.5 font-poppins text-[13px] text-[#333] outline-none focus:border-[#2945FF]"
                  />
                  {errors.expiry && (
                    <p className="mt-0.5 font-poppins text-[11px] text-[#E05A5A]">
                      {errors.expiry.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block font-poppins text-[12px] text-[#666]">
                    CVV
                  </label>
                  <input
                    {...register("cvv")}
                    placeholder="123"
                    type="password"
                    className="w-full rounded-lg border border-[#E7E9F5] bg-white px-3 py-2.5 font-poppins text-[13px] text-[#333] outline-none focus:border-[#2945FF]"
                  />
                  {errors.cvv && (
                    <p className="mt-0.5 font-poppins text-[11px] text-[#E05A5A]">
                      {errors.cvv.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Holder name */}
          <div className="mt-4">
            <label className="mb-1 block font-poppins text-[12px] text-[#666]">
              {selectedProvider === "paypal" ? "PayPal Email" : "Cardholder Name"}
            </label>
            <input
              {...register("holderName")}
              placeholder={
                selectedProvider === "paypal"
                  ? "you@example.com"
                  : "John Adam"
              }
              className="w-full rounded-lg border border-[#E7E9F5] bg-white px-3 py-2.5 font-poppins text-[13px] text-[#333] outline-none focus:border-[#2945FF]"
            />
            {errors.holderName && (
              <p className="mt-0.5 font-poppins text-[11px] text-[#E05A5A]">
                {errors.holderName.message}
              </p>
            )}
          </div>

          {/* Form actions */}
          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-[#2945FF] px-6 py-2 font-poppins text-[13px] font-medium text-white transition-colors hover:bg-[#1a30e0]"
            >
              Save Payment Method
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setShowForm(false);
              }}
              className="rounded-full border border-[#D1D5DB] bg-white px-6 py-2 font-poppins text-[13px] font-medium text-[#666] transition-colors hover:bg-[#F9F9FB]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Saved cards or empty */}
      {hasPayments ? (
        <div className="mt-5 flex flex-col gap-4">
          {payments.map((m) => (
            <SavedPaymentCard
              key={m.id}
              method={m}
              onSetDefault={setDefault}
              onEdit={editMethod}
              onDelete={deleteMethod}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
            <CreditCard className="h-7 w-7 text-[#CCC]" />
          </div>
          <p className="font-poppins text-[15px] font-medium text-[#333]">
            No payment method added
          </p>
          <p className="mt-1 font-poppins text-[13px] text-[#999]">
            Add a payment method to purchase certificates.
          </p>
        </div>
      )}
    </div>
  );
}
