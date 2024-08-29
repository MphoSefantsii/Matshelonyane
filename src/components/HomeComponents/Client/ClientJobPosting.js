import React from 'react';
import { Box, Typography } from '@mui/material';
import ClientAppBarComponent from './ClientAppBarComponent'; // Ensure this component handles the AppBar UI
import ClientBottomNav from './ClientBottomNav'; // Ensure this component handles the Bottom Navigation UI
import ClientJobPostingForm from './ClientJobPostingForm'; // Placeholder for the form's UI
import theme from '../../../theme/theme'; // Ensure the theme object has the required palette

const ClientJobPosting = () => {
  const typographyStyle = {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  return (
    <div>
      {/* AppBar at the top */}
      <ClientAppBarComponent />

      {/* Main content area for the job posting form */}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}
      >
        <Typography variant="h5" sx={typographyStyle}>
          Request Pickup
        </Typography>

        {/* Form Component */}
        <Box sx={{ marginTop: '20px', width: '90%', maxWidth: '600px' }}>
          <ClientJobPostingForm />
        </Box>
      </Box>

      {/* Bottom Navigation */}
      <ClientBottomNav />
    </div>
  );
};

export default ClientJobPosting;
