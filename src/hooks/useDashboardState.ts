import { ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderContext } from "./useLoaderContext";

export const useDashboardState = () => {
  const [bestSellers, setBestSellers] = useState<
    ProductTypes.ProductCardType[]
  >([]);

  const { handleFetchApi } = useLoaderContext();

  useEffect(() => {
    handleFetchApi(async () => {
      try {
        const bestSellersURL = getRequestURL("homeProduct");
        const bestSellersResponse = await axios.get<
          ProductTypes.ProductCardType[]
        >(bestSellersURL, {
          params: {
            "best-seller": true,
          },
        });
        setBestSellers(bestSellersResponse.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return { bestSellers };
};
