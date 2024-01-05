import { ProductDetailedContext } from "@/contexts";
import { CommonTypes, ProductTypes } from "@/types";
import { useState } from "react";

export const ProductDetailedProvider = ({
  children,
}: CommonTypes.ChildrenProp) => {
  const [productDetailed, setProductDetailed] =
    useState<ProductTypes.NewProduct>({
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
      {children}
    </ProductDetailedContext.Provider>
  );
};
