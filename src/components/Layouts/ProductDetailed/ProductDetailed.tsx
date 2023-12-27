import {
  ProductCategory,
  ProductImage,
  ProductInformation,
  ProductTechnical,
} from "./components";

export const ProductDetailedForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <ProductCategory />
      <ProductInformation />
      <ProductImage />
      <ProductTechnical />
    </form>
  );
};
