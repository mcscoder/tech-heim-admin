import { CommonPage, ProductDetailedForm } from "@/components";
import { useLoaderContext, useProductDetailedContext } from "@/hooks";
import { ProductDetailedProvider } from "@/providers";
import { CommonTypes, ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const InitialProductDetailed = ({
  children,
}: CommonTypes.ChildrenProp) => {
  const { handleFetchApi } = useLoaderContext();

  const {
    productDetailed,
    getProductGroup,
    setProductDetailed,
    setProductTypeId,
  } = useProductDetailedContext();

  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
      handleFetchApi(async () => {
        try {
          const url = `${getRequestURL("product")}/${productId}`;
          const response = await axios.get<ProductTypes.Product>(url);
          const product = response.data;
          const categoryId = product.categoryId;
          getProductGroup(categoryId);

          const productTypeId: ProductTypes.ProductTypeId[] = [];

          product.productGroup.forEach((group) => {
            const id = group.productType[0].id;
            productTypeId.push({ id });
            setProductTypeId(group.id, group.productType[0].id);
          });

          const newProductDetailed: ProductTypes.NewProduct = {
            id: product.id,
            name: product.name,
            currentPrice: product.currentPrice,
            lastPrice: product.lastPrice,
            quantity: product.quantity,
            sold: product.sold,
            categoryId: product.categoryId,
            productTypeId: productTypeId,
            productTechnical: product.productTechnical,
            productImage: product.productImage,
          };
          setProductDetailed(newProductDetailed);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [productId]);

  if (productDetailed.categoryId !== 0) {
    return children;
  }
};

export const EditProduct = () => {
  return (
    <ProductDetailedProvider>
      <InitialProductDetailed>
        <CommonPage title="Edit Product">
          <ProductDetailedForm />
        </CommonPage>
      </InitialProductDetailed>
    </ProductDetailedProvider>
  );
};
