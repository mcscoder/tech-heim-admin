import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface ProductContextType {
  products: ProductTypes.Product[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes.Product[]>>;
}

export const ProductContext = createContext<ProductContextType | null>(null);
