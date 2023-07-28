import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <section className='pt-5 m-5'>{userInfo ? <Hero2 /> : <Hero />}</section>
  );
};

export default Home;
