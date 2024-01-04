export const Chip = ({ title }: { title: string }) => {
  return (
    <div className="inline-flex items-center border-2 rounded-lg border-black p-1 text-[14px]">
      <p>{title}</p>
    </div>
  );
};
