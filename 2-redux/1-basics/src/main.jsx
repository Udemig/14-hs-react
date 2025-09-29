import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />

    <ToastContainer
      autoClose={2000}
      theme="dark"
      position="bottom-left"
      hideProgressBar
    />
  </Provider>
);
