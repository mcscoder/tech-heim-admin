import { ProductContext } from "@/contexts";
import { useContext } from "react";

export const useProductContext = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  const { productRows, setProductRows } = productContext;

  return { productRows, setProductRows };
};
