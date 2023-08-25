import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataContext, DataProvider } from "./contexts/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export { DataContext };
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
