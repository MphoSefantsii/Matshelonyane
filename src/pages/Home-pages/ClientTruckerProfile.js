import {
  AppBar,
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import BackArrow from '../../assets/backVector.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TruckerProfileSkeleton from '../../components/skeletons/TruckerProfileSkeleton';

const ClientTruckerProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Set to false to simulate data loaded

  // Static data for UI
  const truckersData = {
    firstName: 'John',
    lastName: 'Doe',
    account: {
      number: '123-456-7890'
    }
  };

  const imageData = ''; // Placeholder for profile image
  const location = 'Maseru, LS'; // Placeholder for location

  const styledProfileBox = {
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    height: '100px',
    width: '100px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    marginBottom: '15px'
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styledCard = {
    width: '100%',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '16px',
    paddingBottom: '16px',
    color: 'white'
  };

  const styledDeviderBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    height: '15px'
  };

  const styledStack = {
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px'
  };

  const styledStackTypography = {
    color: 'F8F8F8',
    fontSize: '16px',
    fontWeight: 500
  };

  const handleButtonClicked = () => {
    navigate('/clienthome');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonClicked}
            >
              <img src={BackArrow} alt="Back" width="13" height="30" />
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
                alignItems: 'center',
                color: '#58362A',
                fontSize: '32px',
                paddingTop: '5px'
              }}
            >
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: '90px' }}>
        {isLoading ? (
          <TruckerProfileSkeleton />
        ) : (
          <>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '50px'
              }}
            >
              <Box sx={styledProfileBox}>
                <img
                  src={imageData ? `data:image/jpeg;base64,${imageData}` : '/path/to/default-image.jpg'}
                  alt="Trucker Profile"
                  style={{
                    width: '95px',
                    height: '95px',
                    borderRadius: 100,
                    backgroundColor: 'grey'
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: '#58362A',
                  fontFamily: 'Lato',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '-0.17px'
                }}
              >
                {truckersData.firstName} {truckersData.lastName}
              </Typography>
            </Box>

            <Box sx={styledDeviderBox}>
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
            </Box>
            <Card sx={styledCard}>
              <Stack spacing={2} sx={styledStack}>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={styledStackTypography}>Phone number:</Typography>
                  <Typography sx={styledStackTypography}>
                    {truckersData.account?.number}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={styledStackTypography}>Operation Location:</Typography>
                  <Typography sx={styledStackTypography}>{location}</Typography>
                </Box>
              </Stack>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
};

export default ClientTruckerProfile;
