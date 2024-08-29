import React from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import PhoneIcon from '../../../assets/phoness.svg';
import { useNavigate } from 'react-router-dom';
import '../../../styles/JobDisplay.css'; 

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

// Use JSONPlaceholder images for placeholder profile pictures
const mockCustomerImages = {
  customer1: 'https://via.placeholder.com/150?text=John', // Placeholder with text "John"
  customer2: 'https://via.placeholder.com/150?text=Jane'  // Placeholder with text "Jane"
};

function JobDisplay() {
  const navigate = useNavigate();

  const acceptPost = (id) => {
    alert('Application processed');
    // Simulate handling the post acceptance
    // navigate('/truckerjobpost'); // Commented out as we only need an alert
  };

  return (
    <div className="job-display-container">
      <Box flexGrow={1} marginTop={2} marginLeft={2} marginRight={2}>
        {mockRequestData.length > 0 ? (
          mockRequestData.map((job) => (
            <Card key={job._id} className="job-card">
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
                    className="profile-box"
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
                      src={mockCustomerImages[job.customer] || ''}
                      className="profile-image"
                      alt="Customer"
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
                  <Box className="job-info">
                    <Box className="job-details">
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>
                        {mockCustomerData[job.customer]?.firstName || 'N/A'}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Pickup:</Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Destination:</Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Price:</Typography>
                    </Box>
                    <Box className="job-values">
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
                  className={`apply-button ${job.status === 'posted' ? 'not-applied' : 'is-applied'}`}
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
          <Typography className="no-job-text">No job requests available</Typography>
        )}
      </Box>
    </div>
  );
}

export default JobDisplay;
