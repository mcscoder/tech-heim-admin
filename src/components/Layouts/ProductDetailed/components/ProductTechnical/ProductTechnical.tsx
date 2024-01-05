import { Button, TitleDescription } from "@/components/Elements";
import { PlusIcon } from "@/constants";
import { useProductDetailedContext } from "@/hooks";
import { ProductTypes } from "@/types";
import { useState } from "react";
import { Technical } from ".";

export const ProductTechnical = () => {
  const { productDetailed, addProductTechnical } = useProductDetailedContext();

  const [newTechnical, setNewTechnical] =
    useState<ProductTypes.NewProductTechnical>({
      title: "",
      description: "",
    });

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg bg-gray-50">
      <h5 className="font-body-xl">Product technical</h5>
      <div className="flex gap-2">
        <TitleDescription
          containerClassName="flex-1"
          titleDefaultValue={newTechnical.title}
          descriptionDefaultValue={newTechnical.description}
          onChange={(title, description) => {
            setNewTechnical({ title, description });
          }}
        />
        <Button
          startIcon={
            <PlusIcon
              height={24}
              width={24}
            />
          }
          className="font-caption-lg py-0"
          onClick={() => {
            if (newTechnical.title && newTechnical.description) {
              addProductTechnical(newTechnical.title, newTechnical.description);
              setNewTechnical({
                title: "",
                description: "",
              });
            }
          }}
        >
          Add
        </Button>
      </div>
      {productDetailed.productTechnical.length !== 0 && (
        <div className="flex flex-col p-3 rounded-lg border border-gray-b4">
          {productDetailed.productTechnical.map((item, index) => {
            return (
              <Technical
                key={index}
                index={index}
                {...item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
