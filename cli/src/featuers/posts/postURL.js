import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get(`${baseURL}/users`);
  return res.data;
});
