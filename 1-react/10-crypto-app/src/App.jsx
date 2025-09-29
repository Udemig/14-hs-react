import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/coin/:id", element: <Detail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
