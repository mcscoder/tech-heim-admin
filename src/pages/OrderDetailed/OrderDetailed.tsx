import { CommonPage, ContentSection } from "@/components";
import { useOrderDetailedState } from "@/hooks";
import { dateConversion, formatVND, getTotalPrice, productPath } from "@/utils";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const tableHeading = ["Number", "Product Name", "Quantity", "Price"];

export const OrderDetailed = () => {
  const { orderDetailed, getOrderDetailed } = useOrderDetailedState();

  useEffect(() => {
    getOrderDetailed();
  }, []);

  if (!orderDetailed) {
    return <></>;
  }

  return (
    <CommonPage title="Order detailed">
      <ContentSection className="flex flex-col gap-1 p-6 font-medium">
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Order code</h6>
          <p className="flex-1 font-body-md">{orderDetailed.id}</p>
        </div>
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Customer name</h6>
          <p className="flex-1 font-body-md">{`${orderDetailed.firstName} ${orderDetailed.lastName}`}</p>
        </div>
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Placed on</h6>
          <p className="flex-1 font-body-md">
            {dateConversion(orderDetailed.createAt)}
          </p>
        </div>
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Payment type </h6>
          <p className="flex-1 font-body-md">Cash</p>
        </div>
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Total</h6>
          <p className="flex-1 font-body-md">
            {formatVND(
              getTotalPrice(orderDetailed.orderedProduct).totalCurrentPrice
            )}
          </p>
        </div>
        <div className="flex odd:bg-Gray-Normal p-4">
          <h6 className="flex-1">Status</h6>
          <p className="flex-1 font-body-md">
            {orderDetailed.status ? (
              <span className="text-green-500">Delivered</span>
            ) : (
              <span className="text-yellow-600">In transit</span>
            )}
          </p>
        </div>
      </ContentSection>
      <ContentSection className="flex flex-col gap-1 p-6">
        <div>
          <h4>Products</h4>
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
            {orderDetailed.orderedProduct.length !== 0 &&
              orderDetailed.orderedProduct.map((product, index) => {
                return (
                  <tr
                    key={product.id}
                    className="border-t border-b font-body-bold"
                  >
                    <td>{index + 1}</td>
                    <td className="flex items-center gap-4">
                      <div>
                        <img
                          src={product.productImage[0].imageURL}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <Link
                        to={productPath(product.id)}
                        className="text-blue-500 underline"
                        target="_blank"
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td>{product.quantity}</td>
                    <td>{formatVND(product.currentPrice)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </ContentSection>
    </CommonPage>
  );
};
