import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// styles
import "./assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// scripts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
