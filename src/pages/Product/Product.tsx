import { CategoryList, CommonPage, ProductCard } from "@/components";
import { searchParams } from "@/constants";
import { useProductContext } from "@/hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Product = () => {
  const { products, getProducts } = useProductContext();

  const [params] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [params.get(searchParams.categoryId)]);

  return (
    <CommonPage title="All Product">
      <div className="flex items-center justify-center">
        <CategoryList />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.length !== 0 &&
          products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                {...item}
              />
            );
          })}
      </div>
    </CommonPage>
  );
};
