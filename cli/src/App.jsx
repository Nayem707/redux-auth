import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Headers from './components/Headers';

const App = () => {
  return (
    <>
      <Headers />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
