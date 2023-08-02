import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store.js';
import { Provider } from 'react-redux';

import './index.css';
import { RouterProvider } from 'react-router-dom';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import PostsView from './featuers/posts/PostsView.jsx';
import PrivateRoute from './components/PrivateRoute';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/posts' element={<PostsView />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
