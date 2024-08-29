import { React, useState, useEffect } from 'react';
import { Avatar, Stack } from '@mui/material';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import WeightIcon from '../../assets/weight.svg';
import TruckIcon from '../../assets/truck.svg';
import ProgressBar from './ProgressBar';
import { TruckRetrieveEndpoint, TruckRegisterEndPoint } from '../../services/EndPoints';
import { useNavigate } from 'react-router-dom';

function TruckProfile() {
  const initialFormState = {
    platNumber: '',
    truckType: '',
    maxLoadCapacity: ''
  };
  const initialErrorState = {
    platNumberError: '',
    truckTypeError: '',
    maxLoadCapacityError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(3);

  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [truckType, setTruckType] = useState([]);
  const [selectedTruckType, setSelectedTruckType] = useState([]);
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    const fetchTruckData = async () => {
      try {
        getTruckTypes(accessToken);
      } catch (error) {
        console.error('Error fetching truck types: ', error);
      }
    };

    fetchTruckData();
  }, [accessToken]);

  const getTruckTypes = (accessToken) => {
    TruckRetrieveEndpoint(accessToken)
      .then((truckData) => {
        setTruckType(truckData.data);
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const handleTrucktypeChange = async (event) => {
    const selectedTruckType = event.target.value;
    setSelectedTruckType(selectedTruckType);
    console.log('Selected Truck Type:', selectedTruckType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    console.log('validateForm called');
    const { platNumber, maxLoadCapacity } = formData;

    const errors = {};
    if (!platNumber) {
      errors.platNumberError = 'Plate number is required';
    } else if (!/^[A-Z]\s\d{3}\s[A-Z]{3}$/.test(platNumber)) {
      errors.platNumberError = 'Plate number must follow the format  B 123 ABC';
    }
    if (!maxLoadCapacity) {
      errors.maxLoadCapacityError = 'Weight Capacity is required';
    }

    setFormErrors(errors);
    console.log('validateForm');
    if (Object.keys(errors).length === 0) {
      const truckData = new FormData();
      truckData.append('platNumber', formData.platNumber);
      truckData.append('truckType', selectedTruckType);
      truckData.append('maxLoadCapacity', formData.maxLoadCapacity);
      truckData.append('file', file);

      registerTruck(truckData, accessToken);
    }
  };

  const registerTruck = (truckData, accessToken) => {
    TruckRegisterEndPoint(truckData, accessToken)
      .then((response) => {
        if (response.status === 200) {
          navigate('/truckprofilecomplete');
        }
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      setFile(file);

      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      navigate('/truckprofilecomplete');
    }
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    marginTop: '30px'
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };
  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Typography
        variant='h1'
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '15px'
          }}
        >
          Fleet setup
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="truckPic"
          name="truckPic"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="truckPic">
          <Box sx={styledAvatarBox}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="User Avatar" sx={{ width: 130, height: 130 }}></Avatar>
            )}
          </Box>
        </label>
        <Typography
        variant='h4'
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '15px',
          }}
        >
          Upload a picture of your truck
        </Typography>
        <Stack spacing={1}>
          <FormControl>
            <Box sx={inputContainerBox}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Plate Number"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Plate Number
                  </div>
                }
                type="platNumber"
                name="platNumber"
                placeholder="Enter your plate number"
                value={formData.platNumber}
                onChange={handleInputChange}
                error={!!formErrors.platNumberError}
                helperText={formErrors.platNumberError}
              />
            </Box>
          </FormControl>
          <FormControl variant="standard">
            <Box sx={inputContainerBox}>
              <InputLabel id="truckType">
                <Box sx={accountLabelContainer}>
                  <img
                    src={TruckIcon}
                    sx={{ marginRight: '30px' }}
                    alt="Truck-type"
                    width="30"
                    height="20"
                  />
                  <Box>Truck-type</Box>
                </Box>
              </InputLabel>
              <Select
                labelId="truckType"
                id="truckType"
                onChange={handleTrucktypeChange}
                value={selectedTruckType}
              >
                {truckType.map((truckData) => (
                  <MenuItem key={truckData._id} value={truckData._id}>
                    {truckData.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </FormControl>
          <FormControl>
            <TextField
              variant="standard"
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={WeightIcon}
                    alt="Tonnage"
                    width="30"
                    height="20"
                    sx={{ marginRight: '30px' }}
                  />
                  Weight Capacity
                </div>
              }
              type="maxLoadCapacity"
              name="maxLoadCapacity"
              placeholder="Enter your Truck weight capacity"
              value={formData.maxLoadCapacity}
              onChange={handleInputChange}
              error={!!formErrors.maxLoadCapacityError}
              helperText={formErrors.maxLoadCapacityError}
            />
          </FormControl>
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={styledSubmitButton}
              onClick={validateForm}
            >
              Proceed
            </Button>
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              textAlign: 'center',
              marginBottom: '50px',
              marginLeft: '15px'
            }}
          >
            You can add more trucks to your fleet later in the settings page
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default TruckProfile;
