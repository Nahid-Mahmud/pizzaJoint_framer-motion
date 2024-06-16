import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Pizza-joint/Home";
import Order from "../components/Pizza-joint/Order";
import Toppings from "../components/Pizza-joint/Toppings";
import Base from "../components/Pizza-joint/Base";
import ErrorElement from "../components/shared/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/toppings",
        element: <Toppings />,
      },
      {
        path: "/base",
        element: <Base />,
      },
    ],
  },
]);
