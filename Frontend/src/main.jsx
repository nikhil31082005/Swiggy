import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Offers from "./components/Offers.jsx";
import Help from "./components/Help.jsx";
import Signin from "./components/Signin.jsx";
import Body from "./components/Body.jsx";

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offer',
        element: <Offers />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/signin',
        element: <Signin />
      },
    ]
  },

])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes}></RouterProvider>
);
