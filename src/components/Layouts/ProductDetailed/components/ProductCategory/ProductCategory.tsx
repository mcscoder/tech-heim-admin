import { Button, Select, TextInput } from "@/components/Elements";
import { OverlayWithButton } from "@/components/Layouts";
import { categories } from "@/constants";
import { useProductDetailedContext } from "@/hooks";
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
      <div className="flex gap-6 p-4 rounded-lg bg-gray-50 justify-between">
        <div className="flex flex-col gap-2">
          <label className="font-body-lg">Category</label>
          <Select
            defaultValue={productDetailed.categoryId}
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
          <div className="grid grid-cols-6 gap-6">
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
