import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOverlay from '../Trucker/TurckerMenuOverlay';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import EllipsisV from '../../../assets/ellipsisVIcon.svg';
import theme from '../../../theme/theme';
import HeaderSkeleton from '../../skeletons/HeaderSkeleton';

const TruckerHomeAppBar = () => {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);
  const [profilePic, setProfilePic] = useState('path/to/default/profile/pic.png'); // Placeholder profile picture
  const [lastName, setLastName] = useState('Doe'); // Placeholder last name
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClicked = () => {
    navigate('/truckerprofileview');
  };

  const handleButtonOverlayClicked = () => {
    setIsOverlay(!isOverlay);
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.variant,
    padding: 0,
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };

  return (
    <AppBar position="fixed" sx={styledAppBar}>
      <MenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
      <Toolbar sx={{ height: '70px' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleButtonOverlayClicked}
        >
          <img src={EllipsisV} alt="MenuIcon" width="10" height="30" />
        </IconButton>
        {isLoadingData ? (
          <HeaderSkeleton />
        ) : (
          <>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: 'end',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: theme.palette.secondary.main,
                marginRight: '10px',
                paddingTop: '7px'
              }}
            >
              Hi, {lastName}
            </Typography>
            <Box onClick={handleButtonClicked}>
              <Box sx={styledProfileBox}>
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                />
              </Box>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TruckerHomeAppBar;
