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
    const message = `Статус ${error.response.status}: ${error.response.data.message}`;

    return err.rejectWithValue(message);
  }
});

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
        state.status = 'idle';
        state.users = action.payload;
      });
  },
});
export const getReducer = getSlice.reducer;
export const selectUsers = state => state.get.users;
