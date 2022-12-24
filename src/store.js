import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import { getUsersReducer } from './features/users-slice';
import { getMeReducer } from './features/me-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    getUsers: getUsersReducer,
    getMe: getMeReducer,
  },
});
