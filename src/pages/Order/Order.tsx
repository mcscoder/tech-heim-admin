import { CommonPage, OrderList } from "@/components";
import { useOrderContext } from "@/hooks";

export const Order = () => {
  const { orders } = useOrderContext();

  return (
    <CommonPage title="Order list">
      <OrderList
        title="Recent Purchases"
        className="col-span-3"
        orders={orders}
        fullList
      />
    </CommonPage>
  );
};
