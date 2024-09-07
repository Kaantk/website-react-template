import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "~/store/auth/hooks";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
