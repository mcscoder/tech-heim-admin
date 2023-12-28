import { Button, Select, TextInput } from "@/components/Elements";
import { OverlayWithButton } from "@/components/Layouts";
import { categories } from "@/constants";
import { useProductDetailedContext } from "@/hooks/useProductDetailedContext";
import { useRef, useState } from "react";
import { ProductGroup } from ".";

export const ProductCategory = () => {
  const { setCategoryId, productDetailed, productGroups, addProductGroup } =
    useProductDetailedContext();

  const newProductGroupRef = useRef<HTMLInputElement>(null);

  const [isAddCategory, setAddCategory] = useState<boolean>(false);

  return (
    <>
      {isAddCategory && (
        <OverlayWithButton
          onCLickClose={() => setAddCategory(false)}
          buttonLabel="Add"
          onClickButton={() => {
            if (newProductGroupRef.current?.value) {
              addProductGroup(newProductGroupRef.current.value);
            }
            setAddCategory(false);
          }}
        >
          <TextInput
            placeholder={`Add a group`}
            ref={newProductGroupRef}
          />
        </OverlayWithButton>
      )}
      <div className="flex gap-6 p-4 rounded-lg bg-gray-50">
        <div className="flex flex-col gap-2 flex-1">
          <label className="font-body-lg">Category</label>
          <Select
            defaultValue={0}
            onChange={(e) => setCategoryId(parseInt(e.target.value))}
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
          {productDetailed.categoryId !== 0 && (
            <Button
              variant={"outlined"}
              onClick={() => setAddCategory(true)}
            >
              Add a group
            </Button>
          )}
        </div>
        {productGroups.length !== 0 && (
          <div className="grid grid-cols-4 gap-6">
            {productGroups.map((productGroup, index) => {
              return (
                <ProductGroup
                  key={index}
                  {...productGroup}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
