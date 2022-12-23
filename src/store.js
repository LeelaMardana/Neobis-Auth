import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import { getReducer } from './features/users-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    get: getReducer,
  },
});
