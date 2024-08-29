import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClientMenuOverlay from '../../components/HomeComponents/Client/ClientMenuOverlay';
import HeaderSkeleton from '../../components/skeletons/HeaderSkeleton';
import HomepageSkeleton from '../../components/skeletons/HomepageSkeleton';
import ClientBottomNav from '../../components/HomeComponents/Client/ClientBottomNav';
import { Container, FormControl, InputLabel, Select, MenuItem, Card, Stack } from '@mui/material';
import EllipsisV from '../../assets/ellipsisVIcon.svg';
import PhoneIcon from '../../assets/phone.svg';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/theme';
import '../../styles/ClientHome.css';  

const ClientHome = () => {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingTruckers, setIsLoadingTruckers] = useState(true);

  // Replace API data with hardcoded data
  const [lastName, setLastName] = useState('Doe');
  const [truckersData, setTruckersData] = useState([]);
  const [deliveryAreaId, setDeliveryAreaId] = useState('65434e0376d09d13951a4314');
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [profilePic, setProfilePic] = useState('https://picsum.photos/200/300');

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoadingData(false);
      setIsLoadingTruckers(false);
      setLocation([
        { _id: '65434e0376d09d13951a4314', name: 'Hlotse' },
        { _id: '65434e0376d09d13951a4315', name: 'Maiseng' }
      ]);
      setTruckersData([
        {
          _id: 'trucker1',
          profile: { firstName: 'John', lastName: 'Doe', account: 'driver1' },
          propic: 'https://picsum.photos/200/300'
        },
        {
          _id: 'trucker2',
          profile: { firstName: 'Jane', lastName: 'Smith', account: 'driver2' },
          propic: 'https://picsum.photos/200/300'
        }
      ]);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    setDeliveryAreaId(selectedLocation);
  };

  const handleButtonClicked = () => {
    navigate('/clientprofile');
  };

  const handleButtonOverlayClicked = () => {
    setIsOverlay(!isOverlay);
  };

  return (
    <div className="homeContainer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="styledAppBar">
          <ClientMenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonOverlayClicked}
            >
              <img
                src={EllipsisV}
                alt="MenuIcon"
                width="10"
                height="30"
                className="menuIcon"
              />
            </IconButton>

            {isLoadingData ? (
              <HeaderSkeleton />
            ) : (
              <>
                <Typography
                  variant="h6"
                  className="headerText"
                >
                  Hi, {lastName}
                </Typography>
                <Box onClick={handleButtonClicked}>
                  <Box className="styledProfileBox">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="profilePic"
                    />
                  </Box>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container sx={{ marginTop: '90px' }}>
          <Typography
            variant="h2"
            className="title"
          >
            Lets find your hauler
          </Typography>
          <FormControl
            sx={{
              width: '100%',
              height: '50px'
            }}
          >
          </FormControl>
        </Container>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h3" className="title">
                Truckers
              </Typography>
            </Box>
            <Box
              className="sortByLine"
            ></Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
              marginBottom: '30px'
            }}
          >
            <Typography
              variant="h4"
              className="sortByText"
            >
              Sort by:
            </Typography>
            <FormControl sx={{ m: 0, minWidth: 120, display: 'flex' }}>
              <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                Location
              </InputLabel>
              <Select
                labelId="location-label"
                id="deliveryArea"
                name="deliveryArea"
                value={selectedLocation}
                onChange={handleLocationChange}
                variant="standard"
              >
                {location.map((locationData) => (
                  <MenuItem key={locationData._id} value={locationData._id}>
                    {locationData.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box className="truckersContainer">
            <Stack spacing={2}>
              {isLoadingTruckers ? (
                <HomepageSkeleton />
              ) : (
                truckersData.map((trucker) => (
                  <Card
                    key={trucker._id}
                    className="card"
                  >
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
                        <Box className="styledProfileBox">
                          <img
                            src={trucker.propic}
                            alt=""
                            className="profilePic"
                            onClick={() => {
                              navigate(`/clienttruckerprofile/${trucker.profile.account}`);
                            }}
                          />
                        </Box>
                      </Box>
                      <Stack spacing={2} sx={{ paddingRight: '15px', width: '100%' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            color: 'white'
                          }}
                        >
                          <Box>
                            <Typography variant="h4" className="truckerName">
                              {`${trucker.profile.firstName} ${trucker.profile.lastName}`}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              textAlign: 'right',
                              display: 'flex',
                              justifyContent: 'end'
                            }}
                          >
                            <Typography
                              className="phoneNumber"
                            >
                              <img
                                src={PhoneIcon}
                                alt="Phone"
                                width="30"
                                height="20"
                                className="phoneIcon"
                              />
                              78322342
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                          <Button
                            variant="contained"
                            className="requestPickupButton"
                            onClick={() => {
                              navigate(`/jobposting/${trucker.profile.account}`);
                            }}
                          >
                            Request Pickup
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </Card>
                ))
              )}
            </Stack>
          </Box>
          <ClientBottomNav />
        </Container>
      </Box>
    </div>
  );
};

export default ClientHome;
