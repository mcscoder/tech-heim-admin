import { OrderTypes, ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderContext } from ".";

export const useDashboardState = () => {
  const [products, setProducts] = useState<ProductTypes.Product[][]>([]);

  const [orderStats, setOrderStats] = useState<OrderTypes.OrderStat[]>([]);

  const { handleFetchApi } = useLoaderContext();

  useEffect(() => {
    handleFetchApi(async () => {
      try {
        const productURL = getRequestURL("homeProduct");

        const bestSellersResponse = await axios.get<ProductTypes.Product[]>(
          productURL,
          {
            params: {
              "best-seller": true,
            },
            timeout: 3000,
          }
        );

        const newProductsResponse = await axios.get<ProductTypes.Product[]>(
          productURL,
          {
            params: {
              "new-product": true,
            },
            timeout: 3000,
          }
        );

        const lowStockResponse = await axios.get<ProductTypes.Product[]>(
          productURL,
          {
            params: {
              lowstock: true,
            },
            timeout: 3000,
          }
        );

        const orderStatURL = getRequestURL("orderStat");

        const orderStatsResponse =
          await axios.get<OrderTypes.OrderStat[]>(orderStatURL);

        setProducts([
          bestSellersResponse.data,
          newProductsResponse.data,
          lowStockResponse.data,
        ]);
        setOrderStats(orderStatsResponse.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return { products, orderStats };
};
