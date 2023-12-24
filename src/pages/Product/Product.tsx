import { ProductList } from "@/components/Elements";

export const Product = () => {
  return (
    <div className="flex flex-col">
      <div className="content-container flex flex-col my-12">
        <ProductList productRows={[]} />
      </div>
    </div>
  );
};
