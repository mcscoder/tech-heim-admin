import { forwardRef } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  label?: React.ReactNode;
  labelClassName?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextArea(
    {
      id,
      containerClassName = "",
      label,
      labelClassName = "",
      className = "",
      ...props
    },
    ref
  ) {
    const containerClasses = `flex flex-col gap-3 ${containerClassName}`;
    const textInputClasses = `border outline-none p-2 rounded-lg focus:border-Primary ${className}`;

    return (
      <div className={containerClasses}>
        {label && (
          <label
            htmlFor={id}
            className={labelClassName}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={textInputClasses}
          {...props}
        />
      </div>
    );
  }
);
