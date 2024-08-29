import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCreatedIcon from '../../assets/AccountCreated.svg';
import { useNavigate } from 'react-router-dom';

const styledBoxContent = {
  width: '100%',
  minHeight: '90vh'
};
const styledBox = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10vh',
  marginBottom: '10vh'
};

const styledSubmitButton = {
  height: '50px'
};


function TruckProfileCompleteContent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/truckerhome');
  };
  return (
    <div>
      <Box sx={styledBoxContent}>
        <Box sx={styledBox}>
          <img src={AccountCreatedIcon} alt="Account Created" width="100" height="150"></img>
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{ color: 'white', textAlign: 'center', marginBottom: '2vh' }}
          >
            You are Ready to Drive !{' '}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              textAlign: 'center',
              marginBottom: '20vh'
            }}
          >
            Your account is now activated. Let’s book your first load.{' '}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={styledSubmitButton}
          onClick={handleButtonClick}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}

export default TruckProfileCompleteContent;
