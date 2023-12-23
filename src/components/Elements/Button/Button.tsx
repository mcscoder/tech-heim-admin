import { forwardRef } from "react";

const VARIANTS = {
  fill: "text-white bg-Primary hover:bg-primary-600",
  outlined:
    "text-Primary border-2 border-Primary hover:text-primary-600 hover:border-primary-600",
  text: "text-Primary hover:text-primary-600",
  fillSecondary: "text-white bg-Secondary hover:bg-secondary-500",
  outlinedSecondary:
    "text-Secondary border-2 border-Secondary hover:text-secondary-500 hover:border-secondary-500",
  textSecondary: "text-Secondary hover:text-secondary-500",
  onlyIcon: "hover:text-Primary hover:bg-black/[.05]",
};

interface IconProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProps & {
    variant?: keyof typeof VARIANTS;
    children?: React.ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      startIcon,
      endIcon,
      variant = "fill",
      children,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) {
    const buttonClasses = `inline-flex items-center justify-center gap-2 rounded-lg duration-100 disabled:pointer-events-none disabled:opacity-50 ${
      children ? "font-button-lg py-2 px-4" : "p-2" // 8px vertical and 16px horizontal padding for text-only buttons, or 8px padding for icon-only buttons
    } ${VARIANTS[variant]} ${className}`;
    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {startIcon && startIcon}
        {children && <span>{children}</span>}
        {endIcon && endIcon}
      </button>
    );
  }
);
