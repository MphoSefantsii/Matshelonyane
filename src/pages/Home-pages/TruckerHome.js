import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, FormControl, Select, MenuItem, Typography, Stack } from '@mui/material';
import TruckerHomeAppBar from '../../components/HomeComponents/Trucker/TruckerHomeAppBar';
import TruckerCard from '../../components/HomeComponents/Trucker/TruckerCard';
import SearchComponent from '../../components/HomeComponents/Trucker/SearchComponent';
import BottomNavigationComponent from '../../components/HomeComponents/Trucker/BottomNavigationComponent';
import theme from '../../theme/theme';

const TruckerHome = () => {
  const staticLocations = [
    { _id: '1', name: 'Location 1' },
    { _id: '2', name: 'Location 2' },
    { _id: '3', name: 'Location 3' }
  ];

  const [location, setLocation] = useState(staticLocations);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    console.log('Selected Location:', selectedLocation);
  };

  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: '2px solid white',
    marginBottom: '10px'
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <TruckerHomeAppBar />
      </Box>
      <Box>
        <SearchComponent />
        <Container>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '5px'
            }}
          >
            <Typography variant="h4" sx={{ fontSize: '15px', color: theme.palette.secondary.main }}>
              Your Profile Views
            </Typography>
            <Box
              sx={{ backgroundColor: theme.palette.secondary.main, height: '.5px', width: '55vw' }}
            />
          </Box>
          <FormControl fullWidth sx={styledSelect}>
            <Select
              value={selectedLocation}
              onChange={handleLocationChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Location' }}
            >
              <MenuItem value="" disabled>
                Select Location
              </MenuItem>
              {location.map((loc) => (
                <MenuItem key={loc._id} value={loc._id}>
                  {loc.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}
          >
            {/* Additional content or components can be added here */}
          </Box>
          <Stack spacing={2}>
            <TruckerCard />
          </Stack>
        </Container>
        <BottomNavigationComponent />
      </Box>
    </div>
  );
};

export default TruckerHome;
