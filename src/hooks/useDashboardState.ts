import { ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderContext } from ".";

export const useDashboardState = () => {
  const [products, setProducts] = useState<ProductTypes.Product[][]>([]);

  const { handleFetchApi } = useLoaderContext();

  useEffect(() => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("homeProduct");

        const bestSellersResponse = await axios.get<ProductTypes.Product[]>(
          url,
          {
            params: {
              "best-seller": true,
            },
            timeout: 3000,
          }
        );

        const newProductsResponse = await axios.get<ProductTypes.Product[]>(
          url,
          {
            params: {
              "new-product": true,
            },
            timeout: 3000,
          }
        );

        const lowStockResponse = await axios.get<ProductTypes.Product[]>(url, {
          params: {
            lowstock: true,
          },
          timeout: 3000,
        });

        setProducts([
          bestSellersResponse.data,
          newProductsResponse.data,
          lowStockResponse.data,
        ]);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return { products };
};
