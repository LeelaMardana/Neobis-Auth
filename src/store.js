import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import { authorizeReducer } from './features/authorize-slice';
import { getReducer } from './features/get-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    get: getReducer,
    isAuthorized: authorizeReducer,
  },
});
