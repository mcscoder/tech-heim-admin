import { useProductDetailedContext } from "@/hooks/useProductDetailedContext";
import {
  ProductCategory,
  ProductImage,
  ProductInformation,
  ProductTechnical,
} from "./components";
import { Button } from "@/components/Elements";

export const ProductDetailedForm = () => {
  const { handleAddProduct } = useProductDetailedContext();

  return (
    <form
      className="flex flex-col gap-12"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddProduct();
      }}
    >
      <div className="flex flex-col gap-6">
        <ProductCategory />
        <ProductInformation />
        <ProductImage />
        <ProductTechnical />
      </div>
      <Button type="submit">Add Product</Button>
    </form>
  );
};
