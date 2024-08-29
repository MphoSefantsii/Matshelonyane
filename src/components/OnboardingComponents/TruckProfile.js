import React, { useState } from 'react';
import { Avatar, Stack, Box, FormControl, TextField, Typography, Button, InputLabel, Select, MenuItem } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import WeightIcon from '../../assets/weight.svg';
import TruckIcon from '../../assets/truck.svg';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  const [truckType, setTruckType] = useState([
    { _id: '1', name: 'Flatbed Truck' },
    { _id: '2', name: 'Refrigerated Truck' },
    { _id: '3', name: 'Dump Truck' }
  ]); // Set predefined truck types
  const [selectedTruckType, setSelectedTruckType] = useState('');

  const navigate = useNavigate();

  const handleTrucktypeChange = (event) => {
    setSelectedTruckType(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { platNumber, maxLoadCapacity } = formData;

    const errors = {};
    if (!platNumber) {
      errors.platNumberError = 'Plate number is required';
    } else if (!/^[A-Z]\s\d{3}\s[A-Z]{3}$/.test(platNumber)) {
      errors.platNumberError = 'Plate number must follow the format B 123 ABC';
    }
    if (!maxLoadCapacity) {
      errors.maxLoadCapacityError = 'Weight Capacity is required';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle form submission here if needed
      navigate('/truckerhome');
    }
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
              <Avatar alt="Truck Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="Truck Avatar" sx={{ width: 130, height: 130 }} />
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
                      style={{ marginRight: '30px' }}
                    />
                    Plate Number
                  </div>
                }
                type="text"
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
                    style={{ marginRight: '30px' }}
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
                    style={{ marginRight: '30px' }}
                  />
                  Weight Capacity
                </div>
              }
              type="text"
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
              type="button"
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
           
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default TruckProfile;
