import { CategoryList, CommonPage, ProductCard } from "@/components";
import { useProductContext } from "@/hooks";

export const Product = () => {
  const { products } = useProductContext();

  return (
    <CommonPage title="All Product">
      <div className="flex items-center justify-center">
        <CategoryList />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.length !== 0 &&
          products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                {...item}
              />
            );
          })}
      </div>
    </CommonPage>
  );
};
