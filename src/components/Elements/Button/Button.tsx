import { forwardRef } from "react";

const VARIANTS = {
  filled: "text-white bg-Gray-Dark border border-Gray-Dark",
  outlined: "text-Gray-Dark bg-white border border-gray-950",
  text: "text-Gray-Dark bg-transparent border border-transparent",
};

const SIZES = {
  default: "px-4 py-2",
  icon: "p-2",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "filled",
      size = "default",
      children,
      startIcon,
      endIcon,
      className = "",
      ...props
    },
    ref
  ) {
    const buttonClasses = `${VARIANTS[variant]} ${SIZES[size]} ${className}`;
    return (
      <button
        className={buttonClasses}
        {...props}
        ref={ref}
      >
        {startIcon && startIcon}
        {children && <span>{children}</span>}
        {endIcon && endIcon}
      </button>
    );
  }
);
