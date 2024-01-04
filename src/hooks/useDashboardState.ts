import { ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderContext } from "./useLoaderContext";

export const useDashboardState = () => {
  const [products, setProducts] = useState<ProductTypes.ProductCardType[][]>(
    []
  );

  const { handleFetchApi } = useLoaderContext();

  useEffect(() => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("homeProduct");

        const bestSellersResponse = await axios.get<
          ProductTypes.ProductCardType[]
        >(url, {
          params: {
            "best-seller": true,
          },
          timeout: 3000,
        });

        const newProductsResponse = await axios.get<
          ProductTypes.ProductCardType[]
        >(url, {
          params: {
            "new-product": true,
          },
          timeout: 3000,
        });

        setProducts([bestSellersResponse.data, newProductsResponse.data]);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return { products };
};
