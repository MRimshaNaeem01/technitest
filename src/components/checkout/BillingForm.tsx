"use client";

import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import type { CheckoutItem } from "@/data/checkout";

type BillingFormProps = {
  items: CheckoutItem[];
  selectedPayment: string;
  onSelectPayment: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onSubmit: () => void;
};

type BillingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  address: string;
  saveInfo: boolean;
};

const paymentMethods = [
  { id: "paypal", label: "PayPal", number: "XX 7900 123456" },
  { id: "stripe", label: "Stripe", number: "XX 4521 789012" },
  { id: "mastercard", label: "Mastercard", number: "XX 3322 445566" },
];

const inputClass =
  "h-11 w-full rounded-md border border-[#E6E6EC] bg-white px-4 text-sm text-[#111] outline-none transition placeholder:text-[#A0A0AA] focus:border-[#2F3CFF] focus:ring-0";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-600";

export function BillingForm({
  items,
  selectedPayment,
  onSelectPayment,
  onRemoveItem,
  onSubmit,
}: BillingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingFormData>({
    defaultValues: { saveInfo: false },
  });

  const subtotal = items.reduce((sum, item) => sum + item.finalPrice, 0);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Billing Details */}
      <div>
        <h2 className="mb-1 text-[18px] font-semibold text-[#07104F]">
          Billing Details
        </h2>
        <p className="mb-6 text-xs text-[#777]">
          Customer ID# 1245879925541
        </p>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>First name</label>
              <input
                {...register("firstName", { required: "First name is required" })}
                placeholder="Naveed"
                className={inputClass}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>Last name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Khan"
                className={inputClass}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Email address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                placeholder="naveed@gmail.com"
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>Phone number</label>
              <div className="flex gap-2">
                <select className="h-11 w-24 shrink-0 rounded-md border border-[#E6E6EC] bg-white px-2 text-sm text-[#111] outline-none focus:border-[#2F3CFF]">
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇵🇰 +92</option>
                </select>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="671 234 5678"
                  className={inputClass}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>Country</label>
              <input
                {...register("country", { required: "Country is required" })}
                placeholder="United States"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>State</label>
              <input
                {...register("state", { required: "State is required" })}
                placeholder="California"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>City</label>
              <input
                {...register("city", { required: "City is required" })}
                placeholder="Los Angeles"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className={labelClass}>Address</label>
              <input
                {...register("address", { required: "Address is required" })}
                placeholder="123 Main Street, Apt 4B"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Postal code</label>
              <input
                {...register("postalCode", { required: "Postal code is required" })}
                placeholder="90001"
                className={inputClass}
              />
            </div>
          </div>

          {/* Save info checkbox */}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              {...register("saveInfo")}
              className="size-4 rounded border-gray-300 accent-[#2F3CFF]"
            />
            Save this information for next time
          </label>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-[#07104F]">
            Payment Method
          </h2>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-medium text-[#2F3CFF]"
          >
            <span className="text-lg leading-none">+</span> Add new
          </button>
        </div>

        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                selectedPayment === method.id
                  ? "border-[#2F3CFF] bg-[#F5F5FF]"
                  : "border-[#E6E6EC] hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={() => onSelectPayment(method.id)}
                  className="size-4 accent-[#2F3CFF]"
                />
                <span className="text-sm font-medium text-[#111]">
                  {method.label}
                </span>
                <span className="hidden text-sm text-[#777] sm:inline">{method.number}</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-gray-400 transition-colors hover:text-red-500"
              >
                <Trash2 className="size-4" />
              </button>
            </label>
          ))}
        </div>
      </div>

      {/* Pay Now Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-[#111] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
      >
        Pay Now (USD {subtotal.toFixed(2)})
      </button>
    </form>
  );
}
