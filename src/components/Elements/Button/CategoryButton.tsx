export interface CategoryButtonProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryButton = ({
  icon,
  label,
  className = "",
  isActive,
  onClick,
  ...props
}: CategoryButtonProps) => {
  const productCategoryClasses = `flex flex-col items-center gap-4 font-body-xl p-2 border-b-2 hover:border-b-black ${
    isActive ? "border-b-black" : "border-b-transparent"
  } duration-200 ${className}`;

  return (
    <button
      onClick={onClick}
      className={productCategoryClasses}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
