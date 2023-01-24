import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productSlice';
import usersReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
