import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface ProductDetailedContextType {
  productDetailed: ProductTypes.Product;
  setProductDetailed: React.Dispatch<
    React.SetStateAction<ProductTypes.Product>
  >;
  productGroups: ProductTypes.ProductGroup[];
  setProductGroups: React.Dispatch<
    React.SetStateAction<ProductTypes.ProductGroup[]>
  >;
}

export const ProductDetailedContext =
  createContext<ProductDetailedContextType | null>(null);
