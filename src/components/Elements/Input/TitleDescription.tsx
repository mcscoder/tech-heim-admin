import { useEffect, useState } from "react";
import { TextInput } from ".";

export interface TitleDescriptionProps {
  containerClassName?: string;
  titleRef?: React.ForwardedRef<HTMLInputElement>;
  descriptionRef?: React.ForwardedRef<HTMLInputElement>;
  onChange?: (title: string, description: string) => void;
  titleDefaultValue?: string;
  descriptionDefaultValue?: string;
}

export const TitleDescription = ({
  containerClassName = "",
  titleRef,
  descriptionRef,
  onChange = () => {},
  titleDefaultValue = "",
  descriptionDefaultValue = "",
}: TitleDescriptionProps) => {
  const containerClasses = `flex gap-4 items-center ${containerClassName}`;

  const [title, setTitle] = useState<string>(titleDefaultValue);
  const [description, setDescription] = useState<string>(
    descriptionDefaultValue
  );

  useEffect(() => {
    onChange(title, description);
  }, [title, description]);

  // to reset use value purpose
  useEffect(() => {
    setTitle(titleDefaultValue);
    setDescription(descriptionDefaultValue);
  }, [titleDefaultValue, descriptionDefaultValue]);

  return (
    <div className={containerClasses}>
      <TextInput
        placeholder="Title"
        containerClassName="flex-1"
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <TextInput
        placeholder="Description"
        containerClassName="flex-[6]"
        ref={descriptionRef}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
    </div>
  );
};
