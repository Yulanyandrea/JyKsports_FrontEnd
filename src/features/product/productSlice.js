/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts, getAllProducts } from './productApi';
import { getDataUsers, logInUser } from '../user/userApi';
import { updateUser } from '../../services/user';

const initialState = {
  products: [],
  productsDataBase: [],
  users: [],
  usersDataBase: [],
  status: 'idle',
  currentUser: null,
};

// GET DATA PRODUCTS
export const productDataBase = createAsyncThunk('products/data', async () => {
  const response = await getAllProducts();
  return response;
});

// GET PRODUCTS
export const productData = createAsyncThunk('products/getProducts', async (filters) => {
  const response = await getProducts(filters);
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
// UPDATE USER
export const updateDataUser = createAsyncThunk('currentUser/update', async (data) => {
  const response = await updateUser(data);
  return response;
});
// RETURN INITIAL STATE
export const resetSlice = createAsyncThunk('resetSlice', async () => {
  return initialState;
});

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
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

      // get products static
      .addCase(productDataBase.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productDataBase.fulfilled, (state, action) => {
        state.productsDataBase = action.payload;
      })
      .addCase(productDataBase.rejected, (state) => {
        state.status = 'reject';
      })

      // get data users
      .addCase(getDataUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataUser.fulfilled, (state, action) => {
        state.usersDataBase = action.payload;
      })
      .addCase(getDataUser.rejected, (state) => {
        state.status = 'reject';
      })
      // login user
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
      // update user
      .addCase(updateDataUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateDataUser.fulfilled, (state, action) => {
        state.currentUser = 'finish';
        const user = action.payload;
        localStorage.setItem('user', JSON.stringify(user));
        state.currentUser = user;
      })
      .addCase(updateDataUser.rejected, (state) => {
        state.status = 'reject';
      })
    // delete data redux toolkit
      .addCase(resetSlice.fulfilled, (state, action) => {
        return action.payload;
      });
  },

});

export const { currentUser } = productsReducer.actions;
export const selectProduct = (state) => state.products.products;
export default productsReducer.reducer;
