import { OrderTypes } from "@/types";
import { ContentSection } from "..";
import { Link } from "react-router-dom";
import { dateConversion, formatVND, getTotalPrice } from "@/utils";

const tableHeading = [
  "Order ID",
  "Date",
  "Payment Method",
  "Customer Name",
  "Status",
  "Amount",
];

export interface OrderListProps {
  title: string;
  className?: string;
  orders: OrderTypes.Order[];
  fullList?: boolean;
}

export const OrderList = ({
  title,
  className = "",
  orders = [],
  fullList,
}: OrderListProps) => {
  return (
    <ContentSection className={`flex flex-col gap-4 p-6 ${className}`}>
      <div className="flex items-center justify-start">
        <h3 className="font-body-bold text-[20px] text-black">{title}</h3>
      </div>
      <div className="h-[1px] bg-Gray-Normal"></div>
      <table>
        <thead>
          <tr>
            {tableHeading.map((item, index) => {
              return (
                <th
                  key={index}
                  className="font-body-bold text-Gray-Main"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orders.length !== 0 &&
            (fullList ? orders : orders.slice(0, 10)).map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-[14px] border-t border-b font-body-bold"
                >
                  <td>
                    <Link
                      to={`/order-detailed/${item.id}`}
                      className="text-blue-500 underline"
                    >
                      #{item.id}
                    </Link>
                  </td>
                  <td>{dateConversion(item.createAt)}</td>
                  <td>Cash</td>
                  <td>{`${item.firstName} ${item.lastName}`}</td>
                  <td>
                    {item.status ? (
                      <span className="text-green-500">Delivered</span>
                    ) : (
                      <span className="text-yellow-600">In transit</span>
                    )}
                  </td>
                  <td>
                    {formatVND(
                      getTotalPrice(item.orderedProduct).totalCurrentPrice
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </ContentSection>
  );
};
