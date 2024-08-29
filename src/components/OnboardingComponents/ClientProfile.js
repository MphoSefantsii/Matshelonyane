import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { Box, FormControl, TextField, Typography, Button, Stack } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import { useNavigate } from 'react-router-dom';
import '../../styles/ClientProfile.css'; 

function ClientProfile() {
  const initialFormState = {
    firstName: '',
    lastName: ''
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName } = formData;
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Lastname is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate('/clientprofilecomplete');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      setFile(file);

      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90vh' }}>
        <Typography variant="h1" className="heading">
          Let’s get to know you
        </Typography>
        <Box className="inner-container">
          <input
            type="file"
            accept="image/*"
            id="propic"
            name="propic"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="propic">
            <Box className="avatar-box">
              {avatarImage ? (
                <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
              ) : (
                <Avatar alt="User Avatar" sx={{ width: 130, height: 130 }}></Avatar>
              )}
            </Box>
          </label>

          <Typography variant="h2" className="upload-text">
            Upload your profile picture
          </Typography>

          <Box>
            <FormControl>
              <Stack spacing={2} className="stack-container">
                <TextField
                  variant="standard"
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={AccountIcon}
                        alt="Account"
                        width="30"
                        height="20"
                        style={{ marginRight: '10px' }}
                      />
                      First name
                    </div>
                  }
                  type="firstName"
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
                        alt="Lastname"
                        width="30"
                        height="20"
                        style={{ marginRight: '10px' }}
                      />
                      Last name
                    </div>
                  }
                  type="lastName"
                  name="lastName"
                  placeholder="Enter your Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={!!formErrors.lastNameError}
                  helperText={formErrors.lastNameError}
                />
              </Stack>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="submit-button"
                onClick={validateForm}
              >
                Proceed
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ClientProfile;
