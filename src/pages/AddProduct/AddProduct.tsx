import { CommonPage } from "@/components";
import { ProductDetailedProvider } from "@/providers";

export const AddProduct = () => {
  return (
    <ProductDetailedProvider>
      <CommonPage title="Add new product">
        <div>Add product</div>
      </CommonPage>
    </ProductDetailedProvider>
  );
};
