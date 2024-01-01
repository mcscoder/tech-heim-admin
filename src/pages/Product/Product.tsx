import { Button, ProductList, Select } from "@/components/Elements";
import { categories } from "@/constants";
import { useProductContext } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const { productRows, getProduct } = useProductContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="content-container flex flex-col my-12 gap-4">
        <div className="flex justify-between gap-4">
          <Select
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
          <Button
            variant={"fillSecondary"}
            onClick={() => navigate("/product/add")}
          >
            Add Product
          </Button>
        </div>
        <ProductList productRows={productRows} />
      </div>
    </div>
  );
};
