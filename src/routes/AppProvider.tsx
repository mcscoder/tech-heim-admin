import { DefaultLayout } from "@/components";
import {
  AddProduct,
  Dashboard,
  EditProduct,
  Order,
  OrderDetailed,
  Product,
} from "@/pages";
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
      {
        path: "add-product",
        Component: AddProduct,
      },
      {
        path: "edit-product/:productId",
        Component: EditProduct,
      },
      {
        path: "order-detailed/:orderId",
        Component: OrderDetailed,
      },
    ],
  },
]);

export const AppProvider = () => {
  return <RouterProvider router={appRouters} />;
};
