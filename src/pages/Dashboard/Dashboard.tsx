import {
  CommonPage,
  OrderList,
  OrderStatCard,
  ProductStatCard,
} from "@/components";
import { useDashboardState } from "@/hooks";

export const Dashboard = () => {
  const { products } = useDashboardState();

  return (
    <CommonPage title="Dashboard">
      <div className="grid grid-cols-3 gap-x-4 gap-y-6">
        <OrderStatCard
          title="Total Orders"
          sales={39}
          totalRevenue={500000000}
        />
        <OrderStatCard
          title="Active Orders"
          sales={39}
          totalRevenue={500000000}
        />
        <OrderStatCard
          title="Shipped Orders"
          sales={39}
          totalRevenue={500000000}
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
          products={products[1]}
          isLowStock
        />
        <OrderList
          title="Recent Orders"
          className="col-span-3"
          orders={[
            {
              id: "1",
              createAt: "2024-01-05",
              paymentMethod: "Credit Card",
              customerName: "John Doe",
              status: true,
              amount: 100999999.0,
            },
            {
              id: "2",
              createAt: "2024-01-06",
              paymentMethod: "PayPal",
              customerName: "Jane Smith",
              status: false,
              amount: 100000000,
            },
          ]}
        />
      </div>
    </CommonPage>
  );
};
