export interface ContentSectionProps {
  children: React.ReactNode;
  className: string;
}

export const ContentSection = ({
  children,
  className = "",
}: ContentSectionProps) => {
  const contentSectionClasses = `bg-White-FA rounded-2xl ${className}`;

  return <section className={contentSectionClasses}>{children}</section>;
};
