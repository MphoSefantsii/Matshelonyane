import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCreatedIcon from '../../assets/AccountCreated.svg';
import { useNavigate } from 'react-router-dom';
import '../../styles/ClientProfileComplete.css'; // Import the CSS file

function ClientProfileCompleteContent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/clienthome'); 
  };

  return (
    <div className="container">
      <Box className="box">
        <img src={AccountCreatedIcon} alt="Account Created" width="100" height="150" />
      </Box>
      <Box>
        <Typography variant="h1" className="typography-heading">
          We are at your service{' '}
        </Typography>
        <Typography
          variant="h2"
          className="typography-subheading"
        >
          Your account is now activated. Let’s book your first load.{' '}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="submit-button"
        onClick={handleButtonClick}
      >
        Continue
      </Button>
    </div>
  );
}

export default ClientProfileCompleteContent;
