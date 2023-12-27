import { forwardRef } from "react";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    containerClassName?: string;
    label?: React.ReactNode;
    labelClassName?: string;
  };

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      id,
      rows = 2,
      containerClassName = "",
      label,
      labelClassName = "",
      className = "",
      ...props
    },
    ref
  ) {
    const containerClasses = `flex flex-col gap-2 ${containerClassName}`;
    const textAreaClasses = `border outline-none p-3 rounded-lg focus:border-Primary ${className}`;

    return (
      <div className={containerClasses}>
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
        <textarea
          id={id}
          rows={rows}
          ref={ref}
          className={textAreaClasses}
          {...props}
        />
      </div>
    );
  }
);
