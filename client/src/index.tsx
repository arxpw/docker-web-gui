import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import ContainerPage from "./pages/container.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContainerPage />,
  },
]);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
