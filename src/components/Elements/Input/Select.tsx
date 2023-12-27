import { forwardRef } from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ children, className = "", ...props }, ref) {
    const selectClasses = `p-3 rounded-lg bg-transparent border ${className}`;

    return (
      <select
        ref={ref}
        className={selectClasses}
        {...props}
      >
        {children}
      </select>
    );
  }
);
