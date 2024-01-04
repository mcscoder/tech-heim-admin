import {
  NavLink as ReactNavLink,
  NavLinkProps as ReactNavLinkProps,
} from "react-router-dom";

export type NavLinkProps = ReactNavLinkProps & {
  activeClassName?: string;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const NavLink = ({
  to,
  className = "",
  activeClassName = "",
  children,
  startIcon,
  endIcon,
  ...props
}: NavLinkProps) => {
  return (
    <ReactNavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? activeClassName : ""}`
      }
      {...props}
    >
      {startIcon && startIcon}
      {children && <span>{children}</span>}
      {endIcon && endIcon}
    </ReactNavLink>
  );
};
