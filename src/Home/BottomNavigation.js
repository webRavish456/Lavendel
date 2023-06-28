import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";



 const Bottomnavigation=()=> {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

 const navigate=useNavigate()

const Home=()=>
{
   navigate("/home");
}

const Booking=()=>
{
   navigate("/booking");
}

const Account=()=>
{
   navigate("/account")
}


  return (
      <>
            <div className='bottomNavigation'>

            <Box sx={{ pb: 7 }} ref={ref} display={{xs:"flex", sm:"flex"}}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
         <BottomNavigationAction label="Home" onClick={Home} icon={<HomeOutlinedIcon />}/>
         <BottomNavigationAction label="Bookings" onClick={Booking} icon={<AccessTimeOutlinedIcon />}  />
        <BottomNavigationAction label="Account"  onClick={Account} icon={<PersonOutlineOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    </div>
      </>
  
  );
}

export default Bottomnavigation;


