import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface ProductContextType {
  productRows: ProductTypes.ProductRowResponseType[];
  setProductRows: React.Dispatch<
    React.SetStateAction<ProductTypes.ProductRowResponseType[]>
  >;
}

export const ProductContext = createContext<ProductContextType | null>(null);
