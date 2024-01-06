import {
  CommonPage,
  OrderList,
  OrderStatCard,
  ProductStatCard,
} from "@/components";
import { useDashboardState, useOrderContext } from "@/hooks";

export const Dashboard = () => {
  const { products, orderStats } = useDashboardState();
  const { orders } = useOrderContext();

  if (products.length === 0 || orderStats.length === 0) {
    return <></>;
  }

  return (
    <CommonPage title="Dashboard">
      <div className="grid grid-cols-3 gap-x-4 gap-y-6">
        <OrderStatCard
          title="Total Orders"
          sales={orderStats[0].quantity}
          totalRevenue={orderStats[0].total}
        />
        <OrderStatCard
          title="Active Orders"
          sales={orderStats[1].quantity}
          totalRevenue={orderStats[1].total}
        />
        <OrderStatCard
          title="Shipped Orders"
          sales={orderStats[2].quantity}
          totalRevenue={orderStats[2].total}
        />
        <ProductStatCard
          title="Best Sellers"
          products={products[0]}
        />
        <ProductStatCard
          title="New Products"
          products={products[1]}
        />
        <ProductStatCard
          title="Low stock"
          products={products[2]}
          isLowStock
        />
        <OrderList
          title="Recent Orders"
          className="col-span-3"
          orders={orders}
        />
      </div>
    </CommonPage>
  );
};
