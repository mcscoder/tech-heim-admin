import { NavLink, NavLinkProps } from "@/components/Elements";

export const navigationLinks: NavLinkProps[] = [
  {
    to: "/product",
    children: "Product",
  },
];

export const Header = () => {
  return (
    <header className="shadow-2">
      <div className="content-container h-[80px] flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tech Heim Admin</h1>
        <nav>
          <ul className="flex">
            {navigationLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className="font-body-xl hover:text-Primary"
                    activeClassName="text-Primary"
                  >
                    {item.children}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
