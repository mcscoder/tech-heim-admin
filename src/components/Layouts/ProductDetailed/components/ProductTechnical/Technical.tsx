import { Button, TitleDescription } from "@/components/Elements";
import { OverlayWithButton } from "@/components/Layouts";
import { EditIcon, TrashIcon } from "@/constants";
import { useBooleanState, useProductDetailedContext } from "@/hooks";
import { ProductTypes } from "@/types";
import { useState } from "react";

export const Technical = ({
  title,
  description,
  index,
}: ProductTypes.NewProductTechnical & { index: number }) => {
  const { editProductTechnical, deleteProductTechnical } =
    useProductDetailedContext();
  const [editedTechnical, setEditedTechnical] =
    useState<ProductTypes.NewProductTechnical>({
      title: "",
      description: "",
    });

  const { state, setToFalse, setToTrue } = useBooleanState(false);

  return (
    <div className="flex items-center px-3 py-4 odd:bg-gray-200">
      <h6 className="font-caption-lg flex-1">{title}</h6>
      <p className="font-body-lg flex-[4]">{description}</p>
      <Button
        variant="text"
        startIcon={
          <EditIcon
            height={24}
            width={24}
          />
        }
        onClick={setToTrue}
      />
      {state && (
        <OverlayWithButton
          onCLickClose={setToFalse}
          contentContainerClassName="w-[700px]"
          buttonLabel="Save"
          onClickButton={() => {
            editProductTechnical(
              index,
              editedTechnical.title,
              editedTechnical.description
            );
            setToFalse();
          }}
        >
          <TitleDescription
            titleDefaultValue={title}
            descriptionDefaultValue={description}
            onChange={(title, description) => {
              setEditedTechnical({ title, description });
            }}
            containerClassName="flex-col items-stretch"
          />
        </OverlayWithButton>
      )}
      <Button
        variant="text"
        startIcon={
          <TrashIcon
            height={24}
            width={24}
          />
        }
        onClick={() => deleteProductTechnical(index)}
      />
    </div>
  );
};
