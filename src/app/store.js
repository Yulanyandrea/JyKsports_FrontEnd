import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
