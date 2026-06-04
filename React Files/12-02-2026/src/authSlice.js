import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', action.payload);
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
