import { Button } from "@/components/Elements";
import { Overlay, OverlayProps } from ".";

export type OverlayWithButtonProps = OverlayProps & {
  buttonLabel?: string;
  onClickButton?: () => void;
};

export const OverlayWithButton = ({
  children,
  onCLickClose,
  overlayClassName = "",
  contentContainerClassName = "",
  buttonLabel,
  onClickButton = () => {},
}: OverlayWithButtonProps) => {
  const contentContainerClasses = `flex flex-col gap-4 bg-white p-4 rounded-lg ${contentContainerClassName}`;

  return (
    <Overlay
      onCLickClose={onCLickClose}
      contentContainerClassName={contentContainerClasses}
      overlayClassName={overlayClassName}
    >
      {children}
      <div className="flex justify-end">
        <Button onClick={onClickButton}>{buttonLabel}</Button>
      </div>
    </Overlay>
  );
};
