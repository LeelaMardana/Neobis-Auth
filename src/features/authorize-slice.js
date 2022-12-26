import { createSlice } from '@reduxjs/toolkit';

const authorizedSlice = createSlice({
  name: '@@authorized',
  initialState: Boolean(JSON.parse(localStorage.getItem('token'))),
  reducers: {
    checkToken: () => {
      const token = Boolean(JSON.parse(localStorage.getItem('token')));
      return token;
    },
    logOut: () => localStorage.clear(),
  },
});

export const authorizeReducer = authorizedSlice.reducer;
export const { checkToken, logOut } = authorizedSlice.actions;

export const selectAuthorization = state => state.isAuthorized;
