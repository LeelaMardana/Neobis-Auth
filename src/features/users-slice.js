import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from '../api';

const initialState = {};

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
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});
export const getReducer = getSlice.reducer;
export const selectUsers = state => state.get.users;
