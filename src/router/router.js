import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Landing from "../pages/Landing";
import Cart from "../pages/Cart";
import Backpackpage from "../pages/Backpackpage";
import ShoesPage from "../pages/ShoesPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },

      { path: "/cart", element: <Cart /> },

      { path: "/backpack", element: <Backpackpage /> },

      { path: "/shoes", element: <ShoesPage /> }
    ],
  },
]);
