import { React, useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Avatar,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/backVectorWhite.svg';
import AccountIcon from '../../assets/account.svg';

function ClientHomeProfile() {
  const userData = sessionStorage.getItem('user');
  let initialFormState = { firstName: '', lastName: '' };

  if (userData) {
    const { firstName, lastName } = JSON.parse(userData);
    initialFormState = { firstName, lastName };
  }

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: ''
  });
  const [avatarImage, setAvatarImage] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonBackArrowClicked = () => {
    navigate('/clientprofile');
  };

  const styledFormControl = { width: '100%', color: 'white' };
  const styledTextField = {
    width: '100%',
    '& input': { color: 'white', borderBottom: ' 3px solid white' },
    '& label': { color: 'white' },
    marginBottom: '10px'
  };
  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#58362A',
    fontWeight: '400',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: '#58362A',
      color: 'white'
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(196, 149, 133, .7)',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'scroll'
      }}
    >
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ height: '70px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleButtonBackArrowClicked}
          >
            <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '85vw', overflowY: 'scroll', paddingTop: '60px' }}>
        <Typography
          sx={{
            fontSize: 24,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '30px',
            marginLeft: '15px',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold'
          }}
        >
          Edit your profile
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="propic"
          name="propic"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="propic">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="User Avatar" src={profilePic} sx={{ width: 130, height: 130 }} />
            )}
          </Box>
        </label>
        <Typography
          sx={{
            fontSize: 14,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '15px',
            fontWeight: '700',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Upload your profile picture
        </Typography>
        <Box>
          <FormControl sx={styledFormControl}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={AccountIcon} alt="Account" width="30" height="20" />
                    First name
                  </div>
                }
                type="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                sx={styledTextField}
                value={formData.firstName}
                onChange={handleInputChange}
                error={!!formErrors.firstNameError}
                helperText={formErrors.firstNameError}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={AccountIcon} alt="Lastname" width="30" height="20" />
                    Last name
                  </div>
                }
                type="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                sx={styledTextField}
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!formErrors.lastNameError}
                helperText={formErrors.lastNameError}
              />
            </Box>
          </FormControl>
          <Box>
            <Button variant="text" color="primary" type="submit" sx={styledSubmitButton}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ClientHomeProfile;
