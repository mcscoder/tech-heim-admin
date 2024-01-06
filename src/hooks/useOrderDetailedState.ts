import { OrderTypes } from "@/types";
import { useState } from "react";
import { useLoaderContext } from ".";
import { getRequestURL } from "@/utils";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useOrderDetailedState = () => {
  const [orderDetailed, setOrderDetailed] = useState<OrderTypes.Order | null>(
    null
  );

  const { orderId } = useParams();

  const { handleFetchApi } = useLoaderContext();

  const getOrderDetailed = () => {
    handleFetchApi(async () => {
      try {
        const url = `${getRequestURL("orders")}/${orderId}`;
        const response = await axios.get<OrderTypes.Order>(url);
        setOrderDetailed(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { orderDetailed, getOrderDetailed };
};
