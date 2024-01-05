export interface OverlayProps {
  children?: React.ReactNode;
  onCLickClose?: () => void;
  overlayClassName?: string;
  contentContainerClassName?: string;
}

export const Overlay = ({
  children,
  onCLickClose = () => {},
  overlayClassName = "",
  contentContainerClassName = "",
}: OverlayProps) => {
  const containerClasses = `fixed top-0 left-0 bottom-0 right-0 bg-black/60 flex items-center justify-center z-50 ${overlayClassName}`;

  const handleOnClose = () => {
    onCLickClose();
  };

  return (
    <div
      className={containerClasses}
      onClick={handleOnClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={contentContainerClassName}
      >
        {children}
      </div>
    </div>
  );
};
