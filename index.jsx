import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Import BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// ✅ Import Toaster from react-hot-toast
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ Global toast container */}
      <Toaster position="top-right" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
