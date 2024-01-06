import { ProductTypes } from ".";

export type OrderedProduct = Pick<
  ProductTypes.Product,
  "id" | "name" | "currentPrice" | "lastPrice" | "productImage"
> & {
  quantity: number;
};

export interface Order {
  id: string;
  createAt: string;
  paymentMethod: string;
  firstName: string;
  lastName: string;
  orderedProduct: OrderedProduct[];
  status: boolean;
}

export interface OrderStat {
  total: number;
  quantity: number;
}
