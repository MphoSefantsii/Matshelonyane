import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import homeIcon from '../../../assets/homeVector.svg';
import messageIcon from '../../../assets/evaMessage.svg';
import clipBoardIcon from '../../../assets/Group1.svg';
import requestIcon from '../../../assets/requestIcon.svg';
import { useNavigate } from 'react-router-dom';

const ClientBottomNav = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('Home');

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };
  const handlePosting = () => {
    navigate('/jobposting');
  };
  const ClientHomePage = () => {
    navigate('/clienthome');
  };
  const ClientProfilePage = () => {
    navigate('/clientrequestsummery');
  };

  const styledNavAction = {
    backgroundColor: '#C69585',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  const styledNavActiveAction = {
    backgroundColor: '#58362A',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  /*  const styledBottomNav = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '80px',
    backgroundColor: '#fff'
  }; */
  const styledBottomNav = {
    position: 'fixed',
    bottom: 0,
    left: '10px', // Adjust the value as needed
    width: 'calc(100% - 20px)', // Adjusting width considering the left spacing
    height: '80px',
    backgroundColor: '#fff'
  };

  return (
    <BottomNavigation showLabels onChange={handleNavigation} value={value} sx={styledBottomNav}>
      <BottomNavigationAction
        value="Home"
        icon={
          <Box sx={value === 'Home' ? styledNavActiveAction : styledNavAction}>
            <img
              src={homeIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
              onClick={ClientHomePage}
            />
          </Box>
        }
      />
      {/* <BottomNavigationAction
        value="Chat"
        icon={
          <Box sx={value === 'Chat' ? styledNavActiveAction : styledNavAction}>
            <img
              src={messageIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
            />
          </Box>
        }
      /> */}
      <BottomNavigationAction
        value="Requests"
        icon={
          <Box sx={value === 'Requests' ? styledNavActiveAction : styledNavAction}>
            <img
              src={clipBoardIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
              onClick={ClientProfilePage}
            />
          </Box>
        }
      />
      {/* <BottomNavigationAction
        value="Post"
        icon={
          <Box sx={value === 'Post' ? styledNavActiveAction : styledNavAction}>
            <img
              src={requestIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
              onClick={handlePosting}
            />
          </Box>
        }
      /> */}
    </BottomNavigation>
  );
};

export default ClientBottomNav;
