// slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userRole = action.payload.userRole;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = null;
    },
  },
});

export const { setAuthentication, logout } = authSlice.actions;
export default authSlice.reducer;
