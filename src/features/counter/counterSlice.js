import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'jykstore',
  initialState,
  reducers: {},

});

export default counterSlice.reducer;
