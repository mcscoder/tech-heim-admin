import { ProductContext } from "@/contexts";
import { CommonTypes, ProductTypes } from "@/types";
import { useState } from "react";

export const ProductProvider = ({ children }: CommonTypes.ChildrenProp) => {
  const [products, setProducts] = useState<ProductTypes.Product[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
