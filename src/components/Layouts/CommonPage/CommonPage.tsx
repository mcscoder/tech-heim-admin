export interface CommonPageProps {
  children: React.ReactNode;
  title: string;
}

export const CommonPage = ({ children, title }: CommonPageProps) => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-start">
        <h2 className="font-body-bold text-[24px] text-black">{title}</h2>
      </div>
      {children}
    </div>
  );
};
