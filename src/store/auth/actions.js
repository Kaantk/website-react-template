// actions.js
import { setAuthentication, logout } from "./slice";

// Thunk to check authentication status from localStorage
export const checkAuthentication = () => (dispatch) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");
  dispatch(setAuthentication({ isAuthenticated, userRole }));
};

// Thunk to log out and clear localStorage
export const performLogout = () => (dispatch) => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userRole");
  dispatch(logout());
};
