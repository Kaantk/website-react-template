import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null, // Kullanıcı token
  userRole: null, // Kullanıcı rol bilgisi
  isAuthenticated: false, // Kullanıcı giris kontrolu
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _logIn: (state, action) => {
      state.token = action.payload.token;
      state.userRole = action.payload.userRole;
      state.isAuthenticated = true;
    },
    _logOut: (state) => {
      state.token = null;
      state.userRole = null;
      state.isAuthenticated = false;
    },
  },
});

export const { _logIn, _logOut } = authSlice.actions;
export default authSlice.reducer;
