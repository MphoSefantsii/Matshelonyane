import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  CircularProgress
} from '@mui/material';

import BackArrow from '../../assets/backVector.svg';
import { useNavigate } from 'react-router-dom';

import { GetPostRequestCustomerEndpoint } from '../../services/EndPoints';

const ClientRequestSummery = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  // Extract and parse the access token
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = TokenSession ? JSON.parse(TokenSession).accessToken : null;

  useEffect(() => {
    if (accessToken) {
      getRequests(accessToken);
    } else {
      console.error('No access token found');
    }
  }, [accessToken]);

  const getRequests = async (accessToken) => {
    try {
      const response = await GetPostRequestCustomerEndpoint(accessToken);
      setRequests(response.data || []); // Ensure data exists before setting state
    } catch (error) {
      console.error('Error fetching client requests', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClicked = () => {
    navigate('/clienthome');
  };

  // Styles
  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styledCard = {
    width: '100%',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '25px',
    padding: '16px',
    color: 'white'
  };

  const styledStack = {
    width: '100%',
    padding: '0 15px'
  };

  const styledStackTypography = {
    color: '#F8F8F8', // Fixing the color value
    fontSize: '16px',
    fontWeight: 500
  };

  const styledListing = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
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
              <img src={BackArrow} alt="Back Icon" width="13" height="30" />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                color: '#58362A',
                fontSize: '32px',
                paddingTop: '5px'
              }}
            >
              Summary
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={{ marginTop: '90px' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#58362A',
            paddingTop: '5px',
            fontSize: '25px',
            marginBottom: '16px'
          }}
        >
          Job Requests
        </Typography>
        <Box
          sx={{
            backgroundColor: '#C69585',
            height: '1px',
            marginBottom: '40px',
            width: '100%'
          }}
        />

        {isLoading ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
          >
            <CircularProgress />
          </Box>
        ) : requests.length === 0 ? (
          <Typography sx={{ textAlign: 'center', marginTop: '20px', color: '#58362A' }}>
            No job requests available.
          </Typography>
        ) : (
          requests.map((request) => (
            <Card key={request._id} sx={styledCard}>
              <Stack spacing={1} sx={styledStack}>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Cargo Description:</Typography>
                  <Typography sx={styledStackTypography}>{request.cargoDescription}</Typography>
                </Box>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Pick up Location:</Typography>
                  <Typography sx={styledStackTypography}>{request.pickupLocation}</Typography>
                </Box>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Drop Off Location:</Typography>
                  <Typography sx={styledStackTypography}>{request.dropOffLocation}</Typography>
                </Box>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Truck Type:</Typography>
                  <Typography sx={styledStackTypography}>{request.truckType.name}</Typography>
                </Box>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Price:</Typography>
                  <Typography sx={styledStackTypography}>{request.pricePerLoad}</Typography>
                </Box>
                <Box sx={styledListing}>
                  <Typography sx={styledStackTypography}>Status:</Typography>
                  <Typography sx={styledStackTypography}>{request.status}</Typography>
                </Box>
              </Stack>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
};

export default ClientRequestSummery;
