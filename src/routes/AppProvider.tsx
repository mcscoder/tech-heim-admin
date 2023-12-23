import { ProductProvider } from "@/Providers";
import { DefaultLayout } from "@/components/Layouts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "",
    Component: DefaultLayout,
    children: [
      {
        path: "product",
        Component: ProductProvider,
      },
    ],
  },
]);

export const AppProvider = () => {
  return <RouterProvider router={appRouter} />;
};
