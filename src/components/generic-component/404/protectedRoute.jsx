import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn === "true" ? children : <Navigate to="/404" />;
}

export default ProtectedRoute;
