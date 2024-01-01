import { Button, ProductList, Select } from "@/components/Elements";
import { categories } from "@/constants";
import { useProductContext } from "@/hooks";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Product = () => {
  const { productRows, getProduct } = useProductContext();
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    getProduct();
  }, [params]);

  return (
    <div className="flex flex-col">
      <div className="content-container flex flex-col my-12 gap-4">
        <div className="flex justify-between gap-4">
          <Select
            defaultValue={
              params.get("categoryId") ? parseInt(params.get("categoryId")!) : 0
            }
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value !== "0") {
                params.set("categoryId", e.target.value);
                setParams(params);
              } else {
                params.delete("categoryId");
                setParams(params);
              }
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
