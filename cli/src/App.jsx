import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from './components/Headers';

const App = () => {
  return (
    <>
      <Headers />
      <Container className='my-2'>
        <ToastContainer />
        <Outlet />
      </Container>
    </>
  );
};

export default App;
