import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from '../api';

const initialState = {
  status: 'idle',
  error: null,
  users: [],
};

export const getUsers = createAsyncThunk('@@get/users', async (token, err) => {
  try {
    return await getService.getUsers(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return err.rejectWithValue(message);
  }
});

// export const getMe = createAsyncThunk('@@get/users', async (token, err) => {
//   try {
//     return await getService.getUsers(token);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return err.rejectWithValue(message);
//   }
// });

const getSlice = createSlice({
  name: '@@get',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'received';
        state.users = action.payload;
      });
  },
});
export const getReducer = getSlice.reducer;

//selectors
export const selectGetUsers = state => state.get.users;

export const selectGetUsersInfo = state => ({
  status: state.get.status,
  error: state.get.error,
  qty: state.get.users.lenght,
});
