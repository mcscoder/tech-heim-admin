import { DefaultLayout } from "@/components";
import { Dashboard, Order, Product } from "@/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouters = createBrowserRouter([
  {
    path: "",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: Dashboard,
      },
      {
        path: "products",
        Component: Product,
      },
      {
        path: "orders",
        Component: Order,
      },
    ],
  },
]);

export const AppProvider = () => {
  return <RouterProvider router={appRouters} />;
};
