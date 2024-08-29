import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';

import BackArrow from '../../assets/backVector.svg';
import EditIcon from '../../assets/EditVector.svg';
import { useNavigate } from 'react-router-dom';

const TruckerProfileView = () => {
  const navigate = useNavigate();

  // Sample static data
  const profilePic = 'path/to/placeholder/profilePic.png';
  const firstName = 'John';
  const lastName = 'Doe';
  const location = 'New York, NY';

  // Define styles within the component
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
    color: '#F8F8F8',
    fontSize: '16px',
    fontWeight: 500
  };

  const handleButtonClicked = () => {
    navigate('/truckerhome');
  };

  const handleEditButtonClicked = () => {
    navigate('/truckereditprofile');
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
              <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
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
            ></Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: '90px' }}>
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
              src={profilePic}
              alt="Profile"
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
              color: ' #58362A',
              fontFamily: 'Lato',
              fontSize: '24px',
              fontWeight: 400
            }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography
            sx={{
              color: '#C69585',
              fontFamily: 'Lato',
              fontSize: '16px',
              marginBottom: '15px'
            }}
          >
            {location}
          </Typography>
          <Button
            variant="text"
            sx={{
              backgroundColor: '#EBDBD5',
              color: '#58362A',
              width: '196px',
              borderRadius: '15px',
              height: '50px',
              fontWeight: '300',
              fontSize: '20px',
              textTransform: 'none',
              boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#58362A',
                color: 'white',
                transition: 'ease-in .3s'
              }
            }}
            onClick={handleEditButtonClicked}
          >
            Edit
          </Button>
        </Box>
        {/* Here you can add static content for the truck details */}
        <Box sx={styledCard}>
          <Typography sx={styledStackTypography}>Truck Name: Sample Truck</Typography>
        </Box>
        {/* Add more static content as needed */}
      </Container>
    </div>
  );
};

export default TruckerProfileView;

// Removed the following backend and API code:

// 1. Retrieving data from session storage
// const session = JSON.parse(sessionStorage.getItem('session'));
// const token = session?.token;
// const firstName = session?.first_name || '';
// const lastName = session?.last_name || '';
// const location = session?.location || '';
// const profilePic = session?.profilePic || '';

// 2. Fetching profile and truck data from an API
// useEffect(() => {
//   const fetchProfileData = async () => {
//     try {
//       const response = await fetch('/api/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();
//       setProfileData(data);
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//     }
//   };

//   fetchProfileData();
// }, [token]);

// 3. Using API call to fetch truck information
// const [truckInfo, setTruckInfo] = useState([]);
// useEffect(() => {
//   const fetchTruckInfo = async () => {
//     try {
//       const response = await fetch('/api/trucks', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();
//       setTruckInfo(data);
//     } catch (error) {
//       console.error('Error fetching truck information:', error);
//     }
//   };

//   fetchTruckInfo();
// }, [token]);
