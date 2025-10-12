import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={2000} position="bottom-left" theme="colored" />
  </Provider>
);
