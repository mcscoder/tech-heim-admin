import { forwardRef } from "react";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    labelClassName?: string;
  };

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { id, label, labelClassName = "", className = "", ...props },
    ref
  ) {
    const textAreaClasses = `flex flex-col gap-3 ${className}`;

    return (
      <div className={textAreaClasses}>
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
