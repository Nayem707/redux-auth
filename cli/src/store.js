import { configureStore } from '@reduxjs/toolkit';
import authReducer from './featuers/users/authSlice';
import { apiSlice } from './featuers/users/apiSlice';
import postsReducer from './featuers/posts/postsSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
