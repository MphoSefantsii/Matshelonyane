import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Stack, Box } from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';
import LocationIcon from '../../../assets/location.svg';
import TruckerHomeSkeleton from '../../skeletons/TruckerHomeSkeleton';

const TruckerCard = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Static data for display purposes
  const clientsData = [
    {
      id: '1',
      client: {
        propic: 'path/to/default/profile/pic.png', // Placeholder profile picture
        firstName: 'John',
        lastName: 'Doe'
      },
      location: {
        name: 'New York'
      }
    }
    // Add more static client data as needed
  ];

  // Simulate data loading
  useState(() => {
    const timeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };

  return (
    <div style={{ overflowY: 'scroll', minHeight: '100px' }}>
      {/* Check if data is loading */}
      {isLoadingData ? (
        // Render skeleton while data is loading
        <TruckerHomeSkeleton />
      ) : (
        // Render actual content when data is loaded
        <>
          {clientsData.map((client) => (
            <Card
              key={client.id}
              sx={{
                width: '100%',
                backgroundColor: '#C69585',
                paddingTop: '15px',
                marginBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '15px'
                }}
              >
                <Box
                  sx={{
                    width: '78px',
                    display: 'flex',
                    paddingRight: '15px',
                    marginBottom: '0'
                  }}
                >
                  <Box sx={styledProfileBox}>
                    <img
                      src={client.client.propic}
                      alt=""
                      style={{ width: '44px', height: '44px', borderRadius: 50 }}
                    />
                  </Box>
                </Box>
                <Stack
                  spacing={2}
                  sx={{
                    flex: 1, // Take remaining space
                    paddingRight: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: 'white',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '15px' }}>
                        {client.client.firstName} {client.client.lastName}
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
                        sx={{
                          fontSize: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          marginRight: '15px'
                        }}
                      >
                        <img src={LocationIcon} alt="Location" width="30" height="20" />
                        {client.location.name}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default TruckerCard;
