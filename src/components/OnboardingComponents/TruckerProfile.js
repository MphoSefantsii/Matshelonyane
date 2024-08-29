import React, { useState } from 'react';
import { Avatar, Stack, Box, FormControl, TextField, Typography, Button, Select, InputLabel, MenuItem } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import LocationIcon from '../../assets/location.svg';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

function TruckerProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    location: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    phoneError: '',
    locationError: ''
  });

  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
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

  const validateForm = () => {
    const { firstName, lastName } = formData;
    const errors = {};
    if (!firstName) errors.firstNameError = 'Firstname is required';
    if (!lastName) errors.lastNameError = 'Lastname is required';
    if (!selectedLocation) errors.locationError = 'Location is required';
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Navigate to the next step or page
      navigate('/onboardinglicense');
    }
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    marginTop: '20px',
    marginBottom: '30px'
  };

  const styledInputLabel = {
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  return (
    <div>
      <Box>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '15px',
            marginTop: '50px'
          }}
        >
          Let’s get to know you
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="avatar-upload"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="avatar-upload">
          <Box sx={styledAvatarBox}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="User Avatar" sx={{ width: 130, height: 130 }} />
            )}
          </Box>
        </label>

        <Typography
          variant="h5"
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '15px'
          }}
        >
          Upload your profile picture
        </Typography>
        <Stack spacing={1}>
          <FormControl>
            <Stack sx={inputContainerBox} spacing={1}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Account"
                      width="30"
                      height="20"
                      style={{ marginRight: '30px' }}
                    />
                    First name
                  </div>
                }
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                error={!!formErrors.firstNameError}
                helperText={formErrors.firstNameError}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Last Name"
                      width="30"
                      height="20"
                      style={{ marginRight: '30px' }}
                    />
                    Last name
                  </div>
                }
                type="text"
                name="lastName"
                placeholder="Enter your Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!formErrors.lastNameError}
                helperText={formErrors.lastNameError}
              />
            </Stack>
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="location-label" variant="standard" sx={styledInputLabel}>
              <Box sx={accountLabelContainer}>
                <img
                  src={LocationIcon}
                  alt="Location"
                  width="30"
                  height="20"
                  style={{ marginRight: '30px' }}
                />
                Operational Location
              </Box>
            </InputLabel>
            <Select
              labelId="location-label"
              id="deliveryArea"
              name="deliveryArea"
              value={selectedLocation}
              onChange={handleLocationChange}
              variant="standard"
              error={!!formErrors.locationError}
            >
              {/* Example static options */}
              <MenuItem value="1">Leribe</MenuItem>
              <MenuItem value="2">Botha Bothe</MenuItem>
              <MenuItem value="3">Mokhotlong</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="button"
              sx={styledSubmitButton}
              onClick={validateForm}
            >
              Proceed
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default TruckerProfile;
