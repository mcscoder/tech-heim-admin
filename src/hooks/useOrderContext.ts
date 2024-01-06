import { OrderContext } from "@/contexts";
import { useContext } from "react";
import { useLoaderContext } from ".";
import { getRequestURL } from "@/utils";
import { OrderTypes } from "@/types";
import axios from "axios";

export const useOrderContext = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("useOrderContext must be used within OrderProvider");
  }

  const { orders, setOrders } = orderContext;
  const { handleFetchApi } = useLoaderContext();

  const getOrders = () => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("orders");
        const response = await axios.get<OrderTypes.Order[]>(url);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { orders, getOrders };
};
