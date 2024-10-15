import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ExpensesProvider } from "./context/ExpensesContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </AuthProvider>
);

reportWebVitals();
