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
      <Toaster
        position="top-right"
        toastOptions={{
          // ✅ Global toast styles
          style: {
            background: "#ec4899", // Tailwind pink-500
            color: "#fff",
            fontWeight: "500",
            fontFamily: "sans-serif",
            borderRadius: "8px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#10b981", // Tailwind green-500
              secondary: "#f0fdf4", // Light green background for icon
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // Tailwind red-500
              secondary: "#fef2f2", // Light red background for icon
            },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
