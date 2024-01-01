import { ProductContext } from "@/contexts";
import { useContext } from "react";
import { useLoaderContext } from ".";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { ProductTypes } from "@/types";
import { useSearchParams } from "react-router-dom";

export const useProductContext = () => {
  const productContext = useContext(ProductContext);
  const [params] = useSearchParams();

  if (!productContext) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  const { productRows, setProductRows } = productContext;
  const { handleFetchApi } = useLoaderContext();

  const getProduct = () => {
    const categoryId = params.get("categoryId");
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("product");
        const response = await axios.get<ProductTypes.ProductRowResponseType[]>(
          url,
          {
            params: { ...(categoryId && { categoryId: parseInt(categoryId) }) },
          }
        );

        setProductRows(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteProduct = (productId: number) => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("deleteProduct");
        await axios.post(url, {
          id: productId,
        });
      } catch (error) {
        console.log(error);
      } finally {
        getProduct();
      }
    });
  };

  return { productRows, setProductRows, getProduct, deleteProduct };
};
