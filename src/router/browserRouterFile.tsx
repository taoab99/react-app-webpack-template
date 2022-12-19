import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import RootPage from "../pages/RootPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <ContactPage />,
  },
]);
