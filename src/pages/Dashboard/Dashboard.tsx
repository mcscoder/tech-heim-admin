import { CommonPage, OrderStatCard } from "@/components";

export const Dashboard = () => {
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
      </div>
    </CommonPage>
  );
};
