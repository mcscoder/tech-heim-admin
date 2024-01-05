import { ProductContext } from "@/contexts";
import { useContext, useEffect } from "react";
import { useLoaderContext } from ".";
import { useSearchParams } from "react-router-dom";
import { searchParams } from "@/constants";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { ProductTypes } from "@/types";

export const useProductContext = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  const { products, setProducts } = productContext;
  const { handleFetchApi } = useLoaderContext();
  const [params] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [params.get(searchParams.categoryId)]);

  const getProducts = () => {
    const categoryId = params.get(searchParams.categoryId);
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("products");
        const productsResponse = await axios.get<ProductTypes.Product[]>(url, {
          params: { ...(categoryId && { categoryId: parseInt(categoryId) }) },
          timeout: 5000,
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { products };
};
