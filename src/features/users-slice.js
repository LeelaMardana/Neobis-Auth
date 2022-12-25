import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from '../api';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

export const getUsers = createAsyncThunk('@@get/users', async (_, err) => {
  try {
    const token = (await JSON.parse(localStorage.getItem('token'))) || '';
    return await getService.getUsers(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return err.rejectWithValue(message);
  }
});

const getUsersSlice = createSlice({
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
        state.list = action.payload;
      });
  },
});
export const getUsersReducer = getUsersSlice.reducer;

//selectors

export const selectGetUsers = state => ({
  status: state.getUsers.status,
  error: state.getUsers.error,
  list: state.getUsers.list,
});
