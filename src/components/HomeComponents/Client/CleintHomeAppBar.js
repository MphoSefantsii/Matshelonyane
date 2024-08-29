import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ClientMenuOverlay from './ClientMenuOverlay';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import EllipsisV from '../../assets/ellipsisVIcon.svg';

const ClientHomeAppBar = () => {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);

  const storedLastName = 'Doe'; // Default last name
  const [lastName] = useState(storedLastName);

  const handleButtonClicked = () => {
    navigate('/truckerprofileview');
  };

  const handleButtonOverlayClicked = () => {
    setIsOverlay(!isOverlay);
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none',
  };

  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  };

  return (
    <AppBar position="fixed" sx={styledAppBar}>
      <ClientMenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
      <Toolbar sx={{ height: '70px' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleButtonOverlayClicked}
        >
          <img src={EllipsisV} alt="MenuIcon" width="10" height="30" sx={{ marginRight: '30px' }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: 'end',
            height: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '10px',
            paddingTop: '7px',
            color: '#58362A',
          }}
        >
          Hi, {lastName}
        </Typography>
        <Button onClick={handleButtonClicked}>
          <Box sx={styledProfileBox}>
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: '44px', height: '44px', borderRadius: 50 }}
            />
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ClientHomeAppBar;
