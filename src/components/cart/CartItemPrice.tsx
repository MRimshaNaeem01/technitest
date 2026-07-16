type CartItemPriceProps = {
  originalPrice: number;
  discountPercentage?: number;
  finalPrice: number;
};

export function CartItemPrice({
  originalPrice,
  discountPercentage,
  finalPrice,
}: CartItemPriceProps) {
  return (
    <div className="flex items-center gap-2">
      {discountPercentage && (
        <span className="text-sm text-gray-400 line-through">
          {originalPrice} USD
        </span>
      )}
      {discountPercentage && (
        <span className="rounded bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-500">
          -{discountPercentage}%
        </span>
      )}
      <span className="text-sm font-semibold text-gray-900">
        {finalPrice} USD
      </span>
    </div>
  );
}
