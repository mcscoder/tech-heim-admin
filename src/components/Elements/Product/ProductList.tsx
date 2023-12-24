import { ProductTypes } from "@/types";
import { ProductRow } from ".";

export interface ProductListProps {
  productRows: ProductTypes.ProductRowResponseType[];
}

export const ProductList = ({ productRows }: ProductListProps) => {
  return (
    <table className="border-collapse">
      <tr>
        <th className="w-0">Id</th>
        <th>Product</th>
        <th className="w-0">Category</th>
        <th className="w-0">Price</th>
        <th className="w-0">Last price</th>
        <th className="w-0">Quantity</th>
        <th className="w-0">Sold</th>
      </tr>
      {productRows.map((item, index) => {
        return (
          <ProductRow
            key={index}
            {...item}
          />
        );
      })}
    </table>
  );
};
