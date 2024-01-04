import { ContentSection } from "@/components";
import { ProductTypes } from "@/types";
import { formatVND } from "@/utils";
import { Link } from "react-router-dom";

export interface ProductStatCardProps {
  title: string;
  className?: string;
  products: ProductTypes.ProductCardType[];
  isLowStock?: boolean;
}

export const ProductStatCard = ({
  title,
  className = "",
  products = [],
  isLowStock,
}: ProductStatCardProps) => {
  return (
    <ContentSection className={`flex flex-col gap-4 p-6 ${className}`}>
      <div className="flex items-center justify-start">
        <h3 className="font-body-bold text-[20px] text-black">{title}</h3>
      </div>
      <div className="h-[1px] bg-black"></div>
      {products.length !== 0 &&
        products.slice(0, 5).map((item, index) => {
          return (
            <div
              className="flex flex-col gap-4"
              key={index}
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.productImage[0].imageURL}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-lg"
                />
                <div className="flex justify-between gap-10 text-[16px] flex-1">
                  <Link
                    to={"/"}
                    className="hover:text-blue-500 flex"
                  >
                    <h4 className="line-clamp-2 break-all">{item.name}</h4>
                  </Link>
                  <div className="flex flex-col items-end flex-1 font-body-bold">
                    <p>{formatVND(item.currentPrice)}</p>
                    {isLowStock ? (
                      <p className="text-Gray-Main">
                        <span className="text-red-500">{item.quantity}</span> In
                        stock
                      </p>
                    ) : (
                      <p className="text-Gray-Main">
                        <span className="text-green-500">{item.sold}</span>{" "}
                        sales
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </ContentSection>
  );
};
