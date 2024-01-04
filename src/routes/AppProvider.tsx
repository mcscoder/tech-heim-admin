import { DefaultLayout } from "@/components";
import { Dashboard } from "@/pages";
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
    ],
  },
]);

export const AppProvider = () => {
  return <RouterProvider router={appRouters} />;
};
