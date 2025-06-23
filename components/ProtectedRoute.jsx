// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Checks for token and allows or redirects
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("jays_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
