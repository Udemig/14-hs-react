import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BasketProvider>
);
