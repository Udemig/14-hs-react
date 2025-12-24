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

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shoes/:id", element: <Detail /> },
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/admin/create", element: <Create /> },
      { path: "/admin/edit/:id", element: <Edit /> },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
