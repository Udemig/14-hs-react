import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Novel from "./pages/Novel";
import Story from "./pages/Story";
import Layout from "./components/Layout";

// projedeki route'ları tanımla
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/ürünler", element: <Products /> },
      { path: "/detay/:bookId", element: <Detail /> },
      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "hikaye", element: <Story /> },
          { path: "roman", element: <Novel /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
