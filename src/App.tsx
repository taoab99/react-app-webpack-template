import React from "react";
import "./style/fontSize.scss";
import "./style/color.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/browserRouterFile";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
