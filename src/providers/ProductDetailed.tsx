import { ProductDetailedContext } from "@/contexts";
import { CommonTypes, ProductTypes } from "@/types";
import { useRef, useState } from "react";

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
      sold: 0,
      categoryId: 0,
      productTypeId: [],
      productTechnical: [],
      productImage: [],
    });

  const [productGroups, setProductGroups] = useState<
    ProductTypes.ProductGroup[]
  >([]);

  const currentProductTypeId = useRef<{ [key: number]: number | undefined }>(
    {}
  );

  return (
    <ProductDetailedContext.Provider
      value={{
        productDetailed,
        setProductDetailed,
        productGroups,
        setProductGroups,
        currentProductTypeId,
      }}
    >
      {children}
    </ProductDetailedContext.Provider>
  );
};
