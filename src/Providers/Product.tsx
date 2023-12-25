import { ProductContext } from "@/contexts";
import { useProductContext } from "@/hooks";
import { Product } from "@/pages";
import { CommonTypes, ProductTypes } from "@/types";
import { useEffect, useState } from "react";

const InitialProductRowsState = ({ children }: CommonTypes.ChildrenProp) => {
  const { getProduct } = useProductContext();
  useEffect(() => {
    getProduct();
  }, []);

  return children;
};

export const ProductProvider = () => {
  const [productRows, setProductRows] = useState<
    ProductTypes.ProductRowResponseType[]
  >([]);

  return (
    <ProductContext.Provider value={{ productRows, setProductRows }}>
      <InitialProductRowsState>
        <Product />
      </InitialProductRowsState>
    </ProductContext.Provider>
  );
};
