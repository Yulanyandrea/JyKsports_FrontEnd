/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataUsers } from './userApi';

const initialState = {
  usersData: [],
  status: 'idle',
};

export const getDataUser = createAsyncThunk('users/getDataUsers', async () => {
  const response = await getDataUsers();
  return response;
});

export const logInUser = createAsyncThunk('users/login', async () => {
  const response = await logInUser();
  console.log('🚀 ~ file: userSlice.js:18 ~ logInUser ~ response', response);
  return response;
});

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    extraReducers: (builder) => {
      builder
        .addCase(getDataUser.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getDataUser.fulfilled, (state, action) => {
          state.status = 'finish';
          const user = action.payload;
          console.log(user);
          // localStorage.setItem('user', JSON.stringify(user.profile));
          // state.user = user;
        })
        .addCase(getDataUser.rejected, (state) => {
          state.status = 'reject';
        });
    },
  },

});

export default usersReducer.reducer;
