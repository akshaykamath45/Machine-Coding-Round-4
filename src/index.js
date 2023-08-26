import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext, DataProvider } from "./contexts/DataContext";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
export { DataContext };
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
        <ToastContainer/>
      </DataProvider>
    </Router>
  </React.StrictMode>
);
