// hooks.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthentication } from "./actions";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  return { isAuthenticated, userRole };
};
