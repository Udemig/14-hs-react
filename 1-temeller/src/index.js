import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// bileşenlerde yazdığımız kodların html dosyasında hangi noktaya renderlanıcağını belirliyoruz
const root = ReactDOM.createRoot(document.getElementById("root"));

// app bileşenini id'si root olan divin içinde renderlar
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
