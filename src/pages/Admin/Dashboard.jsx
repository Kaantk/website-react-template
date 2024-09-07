import React from "react";
import { useAuth } from "~/store/auth/hooks";

export const Dashboard = () => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in to access the dashboard {userRole}</div>;
  }

  return <div>Welcome to the dashboard, {userRole}.</div>;
};
