import { OrderTypes } from "@/types";
import { createContext } from "react";

export interface OrderContextType {
  orders: OrderTypes.Order[];
  setOrders: React.Dispatch<React.SetStateAction<OrderTypes.Order[]>>;
}

export const OrderContext = createContext<OrderContextType | null>(null);
