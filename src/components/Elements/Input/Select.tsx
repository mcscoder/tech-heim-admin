import { forwardRef } from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ children, ...props }, ref) {
    return (
      <select
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
