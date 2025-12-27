import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Dashboard from "./pages/dashboard";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Layout from "./components/layout";
import Protected from "./components/protected";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/shoes/:id",
        element: (
          <Protected>
            <Detail />
          </Protected>
        ),
      },

      {
        path: "/admin/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/admin/create",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Create />
          </Protected>
        ),
      },
      {
        path: "/admin/edit/:id",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Edit />
          </Protected>
        ),
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
