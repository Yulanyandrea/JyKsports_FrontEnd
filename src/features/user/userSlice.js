import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  usersData: [],
  status: 'idle',
};

export const getDataUserMongo = createAsyncThunk('');

const usersReducer = createSlice({
  name: 'userJyk',
  initialState,
  reducers: {},
  extraReducers: {},

});

export default usersReducer.reducer;
