import { ProductList, Select } from "@/components/Elements";
import { categories } from "@/constants";
import { useProductContext } from "@/hooks";

export const Product = () => {
  const { productRows, getProduct } = useProductContext();

  return (
    <div className="flex flex-col">
      <div className="content-container flex flex-col my-12 gap-4">
        <div className="flex gap-4">
          <Select
            className="p-3 rounded-lg bg-transparent border"
            defaultValue={0}
            onChange={(e) => {
              getProduct(parseInt(e.target.value));
            }}
          >
            {categories.map((item, index) => {
              return (
                <option
                  key={index}
                  value={index}
                >
                  {item}
                </option>
              );
            })}
          </Select>
        </div>
        <ProductList productRows={productRows} />
      </div>
    </div>
  );
};
