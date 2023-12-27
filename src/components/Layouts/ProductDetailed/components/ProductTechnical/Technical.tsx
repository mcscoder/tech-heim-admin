import { Button, TitleDescription } from "@/components/Elements";
import { OverlayWithButton } from "@/components/Layouts";
import { EditIcon, TrashIcon } from "@/constants";
import { useProductDetailedContext } from "@/hooks/useProductDetailedContext";
import { ProductTypes } from "@/types";
import { useState } from "react";

export const Technical = ({
  title,
  description,
  index,
}: ProductTypes.ProductTechnical & { index: number }) => {
  const { editProductTechnical, deleteProductTechnical } =
    useProductDetailedContext();
  const [editedTechnical, setEditedTechnical] =
    useState<ProductTypes.ProductTechnical>({
      title: "",
      description: "",
    });

  const [editTechnical, setEditTechnical] = useState<boolean>(false);

  return (
    <div className="flex items-center px-3 py-4 odd:bg-gray-200">
      <h6 className="font-caption-lg flex-1">{title}</h6>
      <p className="font-body-lg flex-[4]">{description}</p>
      <Button
        variant="onlyIcon"
        startIcon={
          <EditIcon
            height={24}
            width={24}
          />
        }
        onClick={() => setEditTechnical(true)}
      />
      {editTechnical && (
        <OverlayWithButton
          onCLickClose={() => setEditTechnical(false)}
          contentContainerClassName="w-[700px]"
          buttonLabel="Save"
          onClickButton={() =>
            editProductTechnical(
              index,
              editedTechnical.title,
              editedTechnical.description
            )
          }
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
        variant="onlyIcon"
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
