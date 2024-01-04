import { NavLink, NavLinkProps } from "@/components";
import { AlbumIcon, DashboardIcon, DocumentTextIcon } from "@/constants";

const navigationItemList: NavLinkProps[] = [
  {
    to: "/",
    children: "dashboard",
    startIcon: (
      <DashboardIcon
        width={20}
        height={20}
      />
    ),
  },
  {
    to: "/products",
    children: "all product",
    startIcon: (
      <AlbumIcon
        width={20}
        height={20}
      />
    ),
  },
  {
    to: "/orders",
    children: "order list",
    startIcon: (
      <DocumentTextIcon
        width={20}
        height={20}
      />
    ),
  },
];

export const Navigation = () => {
  return (
    <nav className="flex flex-col gap-4">
      {navigationItemList.map((item, index) => {
        return (
          <NavLink
            key={index}
            className={
              "flex items-center justify-start gap-2 p-4 rounded-lg text-Gray-Dark font-body-bold text-sm uppercase"
            }
            activeClassName="text-white bg-Blue"
            {...item}
          />
        );
      })}
    </nav>
  );
};
