import { CommonPage, ProductDetailedForm } from "@/components";
import { ProductDetailedProvider } from "@/providers";

export const AddProduct = () => {
  return (
    <ProductDetailedProvider>
      <CommonPage title="Add new product">
        <ProductDetailedForm />
      </CommonPage>
    </ProductDetailedProvider>
  );
};
