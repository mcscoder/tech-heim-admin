import { OrderTypes } from "@/types";

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const formatVND = (amount: number) => {
  return formatCurrency(amount, "VND");
};

export const getPercentage = (lastPrice: number, currentPrice: number) => {
  return Math.round((currentPrice / lastPrice) * 100);
};

export const getDiscount = (lastPrice: number, currentPrice: number) => {
  return getPercentage(lastPrice, currentPrice) - 100;
};

export type PricedProductType = Pick<
  OrderTypes.OrderedProduct,
  "currentPrice" | "lastPrice" | "quantity"
>;

export interface TotalProductPriceType {
  totalCurrentPrice: number;
  totalLastPrice: number | null;
}

export const getTotalPrice = (
  pricedProducts: PricedProductType[]
): TotalProductPriceType => {
  let totalCurrentPrice = 0;
  let totalLastPrice = 0;

  for (const product of pricedProducts) {
    totalCurrentPrice += product.currentPrice * product.quantity;
    totalLastPrice +=
      (product.lastPrice || product.currentPrice) * product.quantity;
  }

  return {
    totalCurrentPrice: totalCurrentPrice,
    totalLastPrice: totalLastPrice,
  };
};
