import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import PizzaContexts from "./contexts/PizzaContexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaContexts>
      <RouterProvider router={router} />
    </PizzaContexts>
  </React.StrictMode>
);
