import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from '../api';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

export const getMe = createAsyncThunk('@@get/me', async (_, err) => {
  try {
    const token = await JSON.parse(localStorage.getItem('token'));
    return await getService.getMe(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return err.rejectWithValue(message);
  }
});

const getMeSlice = createSlice({
  name: '@@get',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMe.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});
export const getMeReducer = getMeSlice.reducer;

export const selectGetMe = state => ({
  status: state.getMe.status,
  error: state.getMe.error,
  list: state.getMe.list,
});
