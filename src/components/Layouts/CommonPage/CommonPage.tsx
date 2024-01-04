export interface CommonPageProps {
  children: React.ReactNode;
  title: string;
}

export const CommonPage = ({ children, title }: CommonPageProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start bg-White-FA shadow-lg p-4">
        <h2 className="font-body-bold text-[24px] text-black">{title}</h2>
      </div>
      <div className="flex flex-col gap-6 p-6">{children}</div>
    </div>
  );
};
