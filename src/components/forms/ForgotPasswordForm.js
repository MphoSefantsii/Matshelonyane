import React, { useState } from 'react';
import { Box, FormControl, TextField, Typography, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '../../assets/phone.svg';

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: '' });
  const [formErrors, setFormErrors] = useState({ phoneError: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleButtonClick = () => {
    const errors = {};
    const accountResetType = sessionStorage.getItem('passReset');
    const accountType = JSON.parse(accountResetType).accountType;

    // form validation
    if (!formData.phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[2]\d{10}$/.test(formData.phone)) {
      errors.phoneError = 'Phone number must start with 2 and be 11 digits long';
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Simulate API request
      const dataToSend = {
        number: formData.phone,
        accountType: accountType
      };

      console.log(dataToSend);

      // Simulate successful response
      handleResetSuccess();
    }
  };

  const handleResetSuccess = () => {
    // Open the Snackbar
    setOpenSnackbar(true);

    // Simulate navigation after closing the Snackbar
    setTimeout(() => {
      navigate('/onetimepin');
    }, 2000); // Delay for Snackbar to be visible
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTypography = {
    marginBottom: '50px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px'
  };

  const styledSubmitButton = {
    height: '50px',
    marginBottom: '30px'
  };

  return (
    <div>
      <Box>
        <FormControl sx={styledFormControl}>
          <Box sx={{ right: '10px !important' }}>
            <Typography variant="h1" sx={styledTypography}>
              Recover Account
            </Typography>
          </Box>
          <Box sx={inputContainerBox}>
            <TextField
              variant="standard"
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={PhoneIcon}
                    alt="Phone"
                    width="30"
                    height="20"
                    style={{ marginRight: '30px' }}
                  />
                  Number
                </div>
              }
              type="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setFormErrors({ ...formErrors, phoneError: '' });
              }}
              error={!!formErrors.phoneError}
              helperText={formErrors.phoneError}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={styledSubmitButton}
              onClick={handleButtonClick}
            >
              Reset Password
            </Button>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
              We will send an OTP to your number, to confirm the password reset
            </Typography>
          </Box>
        </FormControl>
      </Box>

      {/* Snackbar for OTP sent notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="OTP has been sent to your number"
      />
    </div>
  );
}

export default ForgotPasswordForm;
