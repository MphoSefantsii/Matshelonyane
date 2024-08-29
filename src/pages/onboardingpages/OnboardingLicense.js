import React, { useState } from 'react';
import CardComponent from '../../components/OnboardingComponents/CardComponent';
import { Box, Typography, Button } from '@mui/material';
import LicenceFrame from '../../assets/License Frame1.svg';
import '../../styles/login.css';
import ProgressBar from '../../components/OnboardingComponents/ProgressBar';
import theme from '../../theme/theme';
import { useNavigate } from 'react-router-dom';

const OnboardingLicense = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [imageSrc, setImageSrc] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleImageChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();

      setFile(file);

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    console.log('Proceed button clicked with file:', file);
    navigate('/truckerhome'); // Redirect to truckerhome route
  };

  const triggerFileInput = () => {
    document.getElementById('license-upload').click(); // Trigger the hidden file input
  };

  const styledButton = {
    height: '50px',
    marginBottom: '50px',
    backgroundColor: theme.palette.primary.main
  };

  const styledButtonOne = {
    height: '50px',
    marginBottom: '50px'
  };

  const styledHeadingTypography = {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '50px'
  };

  const styledTypography = {
    marginTop: '15px',
    color: '#ffffff',
    textAlign: 'center'
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  };

  const styledImage = {
    marginBottom: '30px',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div className="Login-container">
      <CardComponent>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Box className="LicenseBox" sx={{ marginTop: '50px' }}>
          <Typography variant="h1" sx={styledHeadingTypography}>
            Let’s verify your driver’s license
          </Typography>

          <Box sx={styledBox}>
            <label
              htmlFor="license-upload"
              style={{
                maxWidth: '330px',
                objectFit: 'cover',
                width: '90vw',
                maxHeight: '200px',
                height: '200px',
                overflowY: 'none'
              }}
            >
              {imageSrc ? (
                <img src={imageSrc} alt="License" style={styledImage} />
              ) : (
                <img src={LicenceFrame} alt="License" style={styledImage} />
              )}
            </label>
            <Typography variant="h4" sx={styledTypography}>
              Upload a legible picture of your driver’s license to verify your info
            </Typography>
          </Box>

          <Box sx={styledBox}>
            <input
              type="file"
              accept="image/*"
              id="license-upload"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <Button variant="contained" sx={styledButton} onClick={triggerFileInput}>
              Upload Picture
            </Button>
            <Button variant="contained" sx={styledButtonOne} onClick={handleButtonClick}>
              Proceed
            </Button>
          </Box>
        </Box>
      </CardComponent>
    </div>
  );
};

export default OnboardingLicense;
