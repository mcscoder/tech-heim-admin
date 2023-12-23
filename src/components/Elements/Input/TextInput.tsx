import { forwardRef } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClassName?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextArea(
    { id, label, labelClassName = "", className = "", ...props },
    ref
  ) {
    const textInputClasses = `flex flex-col gap-3 ${className}`;

    return (
      <div className={textInputClasses}>
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
