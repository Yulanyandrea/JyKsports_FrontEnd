import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsData: [],
  status: 'idle',
};

const productsReducer = createSlice({
  name: 'jykstore',
  initialState,
  reducers: {},

});

export default productsReducer.reducer;
