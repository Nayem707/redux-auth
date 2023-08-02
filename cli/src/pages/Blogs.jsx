import SideBar from '../components/sidebar/SideBar';
import { useSelector } from 'react-redux';

const Blogs = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <section>{userInfo && <SideBar />}</section>;
};

export default Blogs;
