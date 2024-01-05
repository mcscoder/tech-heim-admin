import { TextArea, TranscriptInput } from "@/components/Elements";
import { useProductDetailedContext } from "@/hooks";

export const ProductInformation = () => {
  const {
    setProductName,
    setProductCurrentPrice,
    setProductLastPrice,
    setProductQuantity,
    productDetailed,
  } = useProductDetailedContext();
  const getOnChangeValue = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    return e.target.value;
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-gray-50">
      {/* Product name */}
      <TextArea
        label="Product name"
        placeholder="Product name"
        rows={2}
        className="h-full"
        labelClassName="font-body-lg"
        required
        onChange={(e) => setProductName(getOnChangeValue(e))}
        defaultValue={productDetailed.name || ""}
      />

      {/* Product current price (only accept number) */}
      <TranscriptInput
        label="Current price"
        placeholder="VND"
        dataAccepted="number"
        transcriptFormat="currency"
        labelClassName="font-body-lg"
        required
        onChangeValue={(value) => setProductCurrentPrice(value as number)}
        defaultValue={productDetailed.currentPrice || ""}
      />

      {/* Product last price (only accept number) */}
      {/* Can be empty and null if empty */}
      <TranscriptInput
        label={
          <>
            Last price{" "}
            <span className="font-caption-xs text-gray-71">
              (leave it blank if doesn't have)
            </span>
          </>
        }
        placeholder="VND"
        dataAccepted="number"
        transcriptFormat="currency"
        labelClassName="font-body-lg"
        onChangeValue={(value) =>
          setProductLastPrice(value ? (value as number) : null)
        }
        defaultValue={productDetailed.lastPrice || ""}
      />

      {/* Product quantity (only accept number) */}
      <TranscriptInput
        label="Quantity"
        placeholder="Quantity: 1, 2, 3, ..."
        dataAccepted="number"
        transcriptFormat="original"
        labelClassName="font-body-lg"
        required
        onChangeValue={(value) => setProductQuantity(value as number)}
        defaultValue={productDetailed.quantity || ""}
      />
    </div>
  );
};
