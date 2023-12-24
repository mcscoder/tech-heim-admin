import { ProductContext } from "@/contexts";
import { Product } from "@/pages";
import { CommonTypes, ProductTypes } from "@/types";
import { useState } from "react";

const InitialProductRowsState = ({ children }: CommonTypes.ChildrenProp) => {
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
