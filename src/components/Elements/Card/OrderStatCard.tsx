import { ContentSection } from "@/components";
import { formatVND } from "@/utils";

export interface OrderStatCardProps {
  title: string;
  sales: number;
  totalRevenue: number;
  className?: string;
}

export const OrderStatCard = ({
  title,
  sales,
  totalRevenue,
  className = "",
}: OrderStatCardProps) => {
  return (
    <ContentSection className={`flex flex-col gap-3 p-6 ${className}`}>
      <div className="flex items-center justify-start">
        <h3 className="font-body-bold text-[18px] text-black">{title}</h3>
      </div>
      <div className="flex flex-col gap-4 p-4 rounded-lg border border-Gray-Normal text-[16px] text-Gray-Dark">
        <div className="flex items-center justify-between gap-2">
          <p>Sales</p>
          <p>{sales}</p>
        </div>
        <div className="h-[1px] bg-Gray-Normal"></div>
        <div className="flex items-center justify-between gap-2">
          <p>Total revenue</p>
          <p>{formatVND(totalRevenue)}</p>
        </div>
      </div>
    </ContentSection>
  );
};
