import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Paayments from "./pages/Paayments";
import General from "./pages/General";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "/",
            element: <General />,
          },
          {
            path: "/payments",
            element: <Paayments />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/carts",
            element: <Carts />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
