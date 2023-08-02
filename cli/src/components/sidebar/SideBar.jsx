import { LinkContainer } from 'react-router-bootstrap';
import './sidebar.css';
import { useSelector } from 'react-redux';

import {
  FaBookmark,
  FaSignOutAlt,
  FaUserEdit,
  FaTachometerAlt,
} from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';

const SideBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <>
          <div className='sidebar'>
            <div className='sidebarWrapper'>
              <ul className='sidebarList'>
                <li className='sidebarListItem'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      <FaUserEdit />
                      <span className='p-2'>Profile</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </li>

                <li className='sidebarListItem'>
                  <FaTachometerAlt className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Dashboard</span>
                </li>
                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Videos</span>
                </li>

                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Gruop</span>
                </li>

                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Bookmark</span>
                </li>

                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Question</span>
                </li>

                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Jobs</span>
                </li>

                <li className='sidebarListItem'>
                  <FaBookmark className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Event</span>
                </li>

                <li className='sidebarListItem'>
                  <FaSignOutAlt className='sidebarIcon' />
                  <span className='sidebarListItemTxt'>Logout</span>
                </li>
              </ul>
              <button className='sidebarButton'>Show More</button>
              <hr className='sidebarHr' />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default SideBar;
