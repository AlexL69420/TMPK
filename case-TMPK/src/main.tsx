import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/Pages/NotFoundPage.tsx";
import Address from "./components/Pages/Address.tsx";
import Commutator from "./components/Pages/Commutator.tsx";
import CRM from "./components/Pages/CRM.tsx";
import Subscriber from "./components/Pages/Subscriber.tsx";
import Options from "./components/Pages/Options.tsx";
import { FormClient } from "./components/Form/FormClient.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormClient />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/navigation",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/address",
    element: <Address />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/commutator",
    element: <Commutator />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/CRM",
    element: <CRM />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/subscriber",
    element: <Subscriber />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/options",
    element: <Options />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
