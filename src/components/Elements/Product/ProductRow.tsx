import { ProductTypes } from "@/types";
import { formatVND } from "@/utils";

export const ProductRow = ({
  id,
  name,
  categoryId,
  currentPrice,
  lastPrice,
  quantity,
  sold,
}: ProductTypes.ProductRowResponseType) => {
  return (
    <tr>
      <td>{id}</td>
      <td className="text-left">{name}</td>
      <td>{categoryId}</td>
      <td>{formatVND(currentPrice)}</td>
      <td>{lastPrice ? formatVND(lastPrice) : "-"}</td>
      <td>{quantity}</td>
      <td>{sold}</td>
    </tr>
  );
};
