import { NavLink as ReactNavLink } from "react-router-dom";

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const NavLink = ({
  to,
  children,
  className = "",
  activeClassName = "",
}: NavLinkProps) => {
  return (
    <ReactNavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive && activeClassName}`
      }
    >
      {children}
    </ReactNavLink>
  );
};
