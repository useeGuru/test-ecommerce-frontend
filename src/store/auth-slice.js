import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isFetching: false,
  error: []
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isFetching = true;
    },
    loginSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },
    registerStart(state) {
      state.isFetching = true;
    },
    registerSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = [];
    },
    registerFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.isFetching = false;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = authSlice.actions;

export default authSlice;