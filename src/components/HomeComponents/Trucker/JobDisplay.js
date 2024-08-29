import React from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import PhoneIcon from '../../../assets/phoness.svg';
import { useNavigate } from 'react-router-dom';

// Mock data for demonstration purposes
const mockRequestData = [
  {
    _id: '1',
    customer: 'customer1',
    cargoDescription: 'Cargo A',
    dropOffLocation: 'Location A',
    pricePerLoad: '$100',
    status: 'posted'
  },
  {
    _id: '2',
    customer: 'customer2',
    cargoDescription: 'Cargo B',
    dropOffLocation: 'Location B',
    pricePerLoad: '$150',
    status: 'accepted'
  }
];

const mockCustomerData = {
  customer1: { firstName: 'John', account: { number: '123-456-7890' } },
  customer2: { firstName: 'Jane', account: { number: '987-654-3210' } }
};

const mockCustomerImages = {
  customer1: 'data:image/jpeg;base64,...', // Example base64 image data
  customer2: 'data:image/jpeg;base64,...' // Example base64 image data
};

function JobDisplay() {
  const navigate = useNavigate();

  const acceptPost = (id) => {
    console.log(`Accept post with ID: ${id}`);
    // Simulate handling the post acceptance
    navigate('/truckerjobpost');
  };

  // Styling objects
  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '40px',
    width: '40px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };
  const styledStackTypography = {
    color: 'F8F8F8',
    fontSize: '16px',
    fontWeight: 500
  };
  const styledNotAppliedButton = {
    fontSize: '14px',
    width: '180px',
    borderRadius: '5px',
    height: '25px',
    color: '#FFF5EF',
    backgroundColor: '#C08288',
    textTransform: 'none'
  };
  const styledIsAppliedButton = {
    fontSize: '14px',
    width: '180px',
    borderRadius: '5px',
    height: '25px',
    color: '#FFF5EF',
    backgroundColor: 'gray',
    textTransform: 'none'
  };

  return (
    <div style={{ height: 'calc(100vh - 100px)', overflowY: 'auto', backgroundColor: '#EEEFF3' }}>
      <Box flexGrow={1} marginTop={2} marginLeft={2} marginRight={2}>
        {mockRequestData.length > 0 ? (
          mockRequestData.map((job) => (
            <Card
              key={job._id}
              sx={{
                width: '103%',
                backgroundColor: '#FFF',
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
                  <Box
                    sx={{ ...styledProfileBox, marginTop: '-40px' }}
                    onClick={() => {
                      console.log(`Navigate to profile page for job ID ${job._id}`);
                      navigate(`/truckerproposalpage/${job._id}`, {
                        state: {
                          requestData: mockRequestData,
                          customerData: mockCustomerData,
                          customerImages: mockCustomerImages
                        }
                      });
                    }}
                  >
                    <img
                      src={mockCustomerImages[job.customer] ? mockCustomerImages[job.customer] : ''}
                      alt="Customer"
                      style={{ width: '44px', height: '44px', borderRadius: 20 }}
                    />
                  </Box>
                </Box>
                <Stack
                  spacing={2}
                  sx={{
                    flex: 1,
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
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        marginRight: '50px'
                      }}
                    >
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>
                        {mockCustomerData[job.customer]?.firstName || 'N/A'}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Pickup:</Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Destination:</Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Price:</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        marginLeft: '-30px',
                        marginTop: '5px',
                        marginRight: '5px'
                      }}
                    >
                      <Typography
                        sx={{ fontSize: '15px', color: '#000', marginTop: '-8px !important' }}
                      >
                        <img
                          src={PhoneIcon}
                          alt="Phone Icon"
                          width="20"
                          height="20"
                          style={{
                            verticalAlign: 'middle',
                            marginRight: '5px',
                            marginLeft: '-23px'
                          }}
                        />
                        {mockCustomerData[job.customer]?.account?.number || 'N/A'}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000', whiteSpace: 'nowrap' }}>
                        {job.cargoDescription}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000', whiteSpace: 'nowrap' }}>
                        {job.dropOffLocation}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000', whiteSpace: 'nowrap' }}>
                        {job.pricePerLoad}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}>
                <Button
                  variant="contained"
                  sx={job.status === 'posted' ? styledNotAppliedButton : styledIsAppliedButton}
                  onClick={() => {
                    if (job.status === 'posted') {
                      acceptPost(job._id);
                    }
                  }}
                >
                  {job.status === 'posted' ? (
                    <Typography>Apply</Typography>
                  ) : (
                    <Typography>Accepted</Typography>
                  )}
                </Button>
              </Box>
              <Box sx={{ height: '20px' }} />
            </Card>
          ))
        ) : (
          <Typography>No job requests available</Typography>
        )}
      </Box>
    </div>
  );
}

export default JobDisplay;
