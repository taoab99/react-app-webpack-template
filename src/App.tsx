import React from "react";
import Couter from "./component/Couter";
import "./style/fontSize.scss";
import "./style/color.css";
import Backg from "../public/image/cao-trang-1-866.jpg";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/browserRouterFile";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
