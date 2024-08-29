import { useState } from 'react';
import {
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';
import { useNavigate } from 'react-router-dom';

function ClientJobPostingForm() {
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const styledCard = {
    width: 'calc(100% - 50px)',
    maxWidth: '380px',
    height: '572px',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '150px',
    color: 'white',
    gap: '15px',
    flexShrink: 0,
    overflowY: 'auto'
  };

  const inputContainer = {
    width: '90%',
    marginBottom: '15px',
    padding: '0 20px',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    width: '90%',
    marginBottom: '30px',
    marginTop: '15px'
  };

  const containerStyle = {
    width: '100%',
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  const styledSelect = {
    width: '100%',
    borderBottom: ' 1px solid white',
    color: 'white'
  };

  const handleSubmit = () => {
    // Simulate a successful post request
    setOpenAlert(true);
    setTimeout(() => {
      navigate('/truckerhome');
    }, 1500); // Wait for 1.5 seconds to show the alert before redirecting
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={containerStyle}>
        <Card sx={styledCard}>
          <div>
            <Box sx={{ marginTop: '20px', color: 'white' }}>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={DescIcon}
                          alt="cargo"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Cargo Description
                      </div>
                    }
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="truckTypeID" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={TruckIcon}
                        alt="trucktype"
                        width="30"
                        height="20"
                        style={{ marginRight: '25px' }}
                      />
                      Required Truck Type
                    </Box>
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="truckTypeID"
                    id="truckTypeID"
                    sx={styledSelect}
                  >
                    <MenuItem value="truck1">Half Truck</MenuItem>
                    <MenuItem value="truck2">Full Truck</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="location-label" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={LocationIcon}
                        alt="Location"
                        width="30"
                        height="20"
                        style={{ marginRight: '30px' }}
                      />
                      Delivery Area
                    </Box>
                  </InputLabel>
                  <Select labelId="location-label" id="deliveryAreaID" variant="standard">
                    <MenuItem value="location1">Maseru</MenuItem>
                    <MenuItem value="location2">Leribe</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={LocationIcon}
                          alt="pickuplocation"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Pickup Location
                      </div>
                    }
                    placeholder="Enter pickup location"
                  />
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={LocationIcon}
                          alt="dropofflocation"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Dropoff Location
                      </div>
                    }
                    placeholder="Enter dropoff location"
                  />
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={TimeIcon}
                          alt="time"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Pickup Time
                      </div>
                    }
                    placeholder="Enter pickup time"
                  />
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={InstructionIcon}
                          alt="instructions"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Pickup Instructions
                      </div>
                    }
                    placeholder="Enter pickup instructions"
                  />
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="loading" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={LoadingIcon}
                        alt="loading"
                        width="30"
                        height="20"
                        style={{ marginRight: '30px' }}
                      />
                      Loading & Offloading Service
                    </Box>
                  </InputLabel>
                  <Select variant="standard" labelId="loading" id="loading" sx={styledSelect}>
                    <MenuItem value="true">Yes</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PriceIcon}
                          alt="Price"
                          width="30"
                          height="20"
                          style={{ marginRight: '30px' }}
                        />
                        Price Per Load
                      </div>
                    }
                    placeholder="Enter price"
                  />
                </FormControl>
              </Stack>

              <Box sx={buttonContainer}>
                <Button
                  variant="contained"
                  sx={styledSubmitButton}
                  onClick={handleSubmit}
                >
                  Post Request
                </Button>
              </Box>
            </Box>
          </div>
        </Card>
      </Box>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={() => setOpenAlert(false)}
      >
        <Alert onClose={() => setOpenAlert(false)} severity="success">
          Request posted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ClientJobPosting
