import { Button, Select, TextInput } from "@/components/Elements";
import { OverlayWithButton } from "@/components/Layouts";
import { useProductDetailedContext } from "@/hooks/";
import { ProductTypes } from "@/types";
import { useRef, useState } from "react";

export const ProductGroup = ({
  id: productGroupId,
  title,
  productType,
}: ProductTypes.ProductGroup) => {
  const { productDetailed, setProductTypeId, addProductType } =
    useProductDetailedContext();

  const [isAddProductType, setAddProductType] = useState<boolean>(false);
  const productTypeRef = useRef<HTMLInputElement>(null);

  const selectedId = productDetailed.productTypeId.find((value) =>
    productType.some((type) => type.id === value.id)
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="font-body-lg">{title}</label>
      <Select
        defaultValue={selectedId?.id || 0}
        onChange={(e) => {
          setProductTypeId(productGroupId, parseInt(e.target.value));
        }}
      >
        <option value={0}>Select {title}</option>;
        {productType &&
          productType.map((productType, index) => {
            return (
              <option
                key={index}
                value={productType.id}
              >
                {productType.title}
              </option>
            );
          })}
      </Select>
      <Button onClick={() => setAddProductType(true)}>Add {title}</Button>
      {isAddProductType && (
        <OverlayWithButton
          onCLickClose={() => setAddProductType(false)}
          buttonLabel="Add"
          onClickButton={() => {
            if (productTypeRef.current?.value) {
              addProductType(productGroupId, productTypeRef.current.value);
            }
            setAddProductType(false);
          }}
        >
          <TextInput
            placeholder={`Add a ${title}`}
            ref={productTypeRef}
          />
        </OverlayWithButton>
      )}
    </div>
  );
};
