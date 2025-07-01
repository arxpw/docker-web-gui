import { createBrowserRouter, RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import ContainerPage from "./pages/container.page";

import "./index.css"; // Import your global styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContainerPage />,
  },
]);

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
} else {
  throw new Error("Root element not found");
}
