import { ProductContext } from "@/contexts";
import { useContext } from "react";
import { useLoaderContext } from ".";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { ProductTypes } from "@/types";

export const useProductContext = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  const { productRows, setProductRows } = productContext;
  const { handleFetchApi } = useLoaderContext();

  const getProduct = (categoryId?: number) => {
    if (categoryId === 0) {
      categoryId = undefined;
    }

    handleFetchApi(async () => {
      try {
        const url = getRequestURL("product");
        const response = await axios.get<ProductTypes.ProductRowResponseType[]>(
          url,
          {
            params: { ...(categoryId && { categoryId }) },
          }
        );

        setProductRows(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { productRows, setProductRows, getProduct };
};
