import '../../styles/login.css'; // Ensure this path is correct

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const StyledCard = {
  width: '100vw',
  height: '100vh',
  margin: '0 auto',
  justifyContent: 'center',
  backgroundColor: 'rgba(198, 149, 133, .3)',
  borderRadius: '0',
  backdropFilter: 'blur(40px)',
  position: 'fixed',
  top: '0',
  left: '0',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': { width: '0.4em' },
  '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' }
};

const StyledBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function CardComponent({ children }) {
  return (
    <div className="Login-container">
      <Box sx={StyledBox}>
        <Card sx={StyledCard}>
          <CardContent
            sx={{
              overflowY: 'scroll',
              paddingTop: '30px'
            }}
          >
            {children}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default CardComponent;
