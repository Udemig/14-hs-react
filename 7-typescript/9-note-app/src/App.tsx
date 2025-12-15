import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Form from "./pages/form";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/note/:id",
        element: <Detail />,
      },
      {
        path: "/create",
        element: <Form />,
      },
      {
        path: "/edit/:id",
        element: <Form />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
