import { useState } from "react";
import { TextInput, TextInputProps } from ".";
import { formatVND, handleNumberInput } from "@/utils";

export const TRANSCRIPT_FORMATS = {
  currency: (data: string) => {
    return formatVND(parseInt(data));
  },
  original: (data: string) => {
    return data;
  },
};

export const DATA_ACCEPTED = {
  number: (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e);
  },
  string: () => {},
};

export type TranscriptInputProps = TextInputProps & {
  transcriptContainerClassName?: string;
  transcriptFormat?: keyof typeof TRANSCRIPT_FORMATS;
  dataAccepted?: keyof typeof DATA_ACCEPTED;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  onChangeValue?: (value: string | number) => void;
};

export const TranscriptInput = ({
  transcriptContainerClassName = "",
  transcriptFormat = "original",
  dataAccepted = "string",
  inputRef,
  onChangeValue = () => {},
  defaultValue = "",
  ...props
}: TranscriptInputProps) => {
  const [inputData, setInputData] = useState<string>(`${defaultValue}`);

  const transcriptContainerClasses = `flex flex-col gap-2 ${transcriptContainerClassName}`;

  return (
    <div className={transcriptContainerClasses}>
      <TextInput
        onChange={(e) => {
          DATA_ACCEPTED[dataAccepted](e);
          setInputData(e.target.value);
          onChangeValue(
            dataAccepted === "number"
              ? parseInt(e.target.value)
              : e.target.value
          );
        }}
        ref={inputRef}
        defaultValue={defaultValue}
        {...props}
      />
      <p className="font-caption-sm">
        Transcript:{" "}
        {inputData ? (
          <span className="text-green-600">
            {TRANSCRIPT_FORMATS[transcriptFormat](inputData)}
          </span>
        ) : (
          <span className="text-red-600">Empty</span>
        )}
      </p>
    </div>
  );
};
