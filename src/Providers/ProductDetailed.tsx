import { ProductDetailedContext } from "@/contexts";
import { ProductDetailed } from "@/pages";
import { ProductTypes } from "@/types";
import { useState } from "react";

export const ProductDetailedProvider = () => {
  const [productDetailed, setProductDetailed] = useState<ProductTypes.Product>({
    id: 0,
    name: "",
    currentPrice: 0,
    lastPrice: 0,
    quantity: 0,
    categoryId: 0,
    productTypeId: [],
    productTechnical: [],
    productImage: [],
  });

  const [productGroups, setProductGroups] = useState<
    ProductTypes.ProductGroup[]
  >([]);

  return (
    <ProductDetailedContext.Provider
      value={{
        productDetailed,
        setProductDetailed,
        productGroups,
        setProductGroups,
      }}
    >
      <ProductDetailed />
    </ProductDetailedContext.Provider>
  );
};
