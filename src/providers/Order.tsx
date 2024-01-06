import { OrderContext } from "@/contexts";
import { useOrderContext } from "@/hooks";
import { CommonTypes, OrderTypes } from "@/types";
import { useEffect, useState } from "react";

export const InitialOrderState = ({ children }: CommonTypes.ChildrenProp) => {
  const { orders, getOrders } = useOrderContext();

  useEffect(() => {
    getOrders();
  }, []);

  if (orders.length === 0) {
    return <></>;
  }
  return children;
};

export const OrderProvider = ({ children }: CommonTypes.ChildrenProp) => {
  const [orders, setOrders] = useState<OrderTypes.Order[]>([]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <InitialOrderState>{children}</InitialOrderState>
    </OrderContext.Provider>
  );
};
