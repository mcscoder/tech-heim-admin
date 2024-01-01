import { EditIcon, TrashIcon, categories } from "@/constants";
import { ProductTypes } from "@/types";
import { formatVND, productPath } from "@/utils";
import { Button } from "..";
import { Link } from "react-router-dom";

export type ProductRowProps = ProductTypes.ProductRowResponseType & {
  onClickEdit?: () => void;
  onClickRemove?: () => void;
};

export const ProductRow = ({
  id = 0,
  name,
  categoryId,
  currentPrice,
  lastPrice,
  quantity,
  sold,
  onClickRemove = () => {},
}: ProductRowProps) => {
  const handleOnClickEdit = () => {};
  const handleOnClickRemove = () => {
    onClickRemove();
  };

  return (
    <tr className="relative group">
      <td>{id}</td>
      <td className="text-left">
        <Link
          to={productPath(id)}
          className="text-blue-500 underline hover:text-blue-900 line-clamp-2 whitespace-normal"
          target="_blank"
        >
          {name}
        </Link>
      </td>
      <td>{categories[categoryId]}</td>
      <td>{formatVND(currentPrice)}</td>
      <td>{lastPrice ? formatVND(lastPrice) : "-"}</td>
      <td>{quantity}</td>
      <td>{sold}</td>
      <div className="absolute left-[100%] top-0 bottom-0 flex">
        <div className="hidden group-hover:flex items-center">
          <Button
            variant="onlyIcon"
            startIcon={
              <EditIcon
                height={24}
                width={24}
              />
            }
            onClick={handleOnClickEdit}
          />
          <Button
            variant="onlyIcon"
            startIcon={
              <TrashIcon
                height={24}
                width={24}
              />
            }
            onClick={handleOnClickRemove}
          />
        </div>
      </div>
    </tr>
  );
};
