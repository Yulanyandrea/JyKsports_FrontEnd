/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productApi';

const initialState = {
  products: [],
  status: 'idle',
};

export const productData = createAsyncThunk('products/getProducts', async () => {
  const response = await getProducts();
  return response;
});

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productData.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productData.rejected, (state) => {
        state.status = 'reject';
      });
  },

});

export const selectProduct = (state) => state.products.products;
export default productsReducer.reducer;
