/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts, filterProducts } from './productApi';
import { getDataUsers, logInUser } from '../user/userApi';

const initialState = {
  products: [],
  users: [],
  filters: [],
  status: 'idle',
};
// GET PRODUCTS
export const productData = createAsyncThunk('products/getProducts', async () => {
  const response = await getProducts();
  return response;
});
// GET USERS
export const getDataUser = createAsyncThunk('users/getDataUsers', async () => {
  const response = await getDataUsers();
  return response;
});
// LOG IN
export const loginUser = createAsyncThunk('users/login', async (data) => {
  const response = await logInUser(data);
  return response;
});
// FILTER PRODUCT
export const filterProduct = createAsyncThunk('filter/products', async (data) => {
  const response = await filterProducts(data);
  console.log('🚀 ~ file: productSlice.js:30 ~ filterProduct ~ response', response);
  return response;
});
const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get data products
      .addCase(productData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productData.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(productData.rejected, (state) => {
        state.status = 'reject';
      })
      // get data users
      .addCase(getDataUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getDataUser.rejected, (state) => {
        state.status = 'reject';
      })
      // log in user
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'finish';
        const user = action.payload;
        localStorage.setItem('user', JSON.stringify(user));
        state.users = user;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'reject';
      })
      // filter products
      .addCase(filterProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterProduct.fulfilled, (state, action) => {
        state.filters = action.payload;
      })
      .addCase(filterProduct.rejected, (state) => {
        state.status = 'reject';
      });
  },

});

export const selectProduct = (state) => state.products.products;
export default productsReducer.reducer;