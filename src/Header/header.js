
import  React, {useState, useEffect, useReducer} from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Modal from '@mui/material/Modal';
import Auth from '../Authentication/Login';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Verification from '../Authentication/Verification';
import Successfully from "../Authentication/Successfully";
import Logged from "../Authentication/Logged";
import Logo from "../assests/Logo.png";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { locationUpdate } from '../Redux/action';

import {  createTheme, useMediaQuery } from '@mui/material';





 const Header=({Filter, updateLocation } )=> {


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const Baseurl=process.env.REACT_APP_BASE_URL;
  
  const access= JSON.parse(localStorage.getItem("access_token"));

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['My Profile', 'Your Favorites', 'Payment', 'Setting', 'Logout'];

  const selectedImage = useSelector((state) => state.image);
 
     
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
      },
    },
  });

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));


   const navigate=useNavigate();


  const [open, setOpen]=useState(false);
  
 const [successOpen,setSuccessOpen]=useState(false);

  const handleSuccessOpen=()=>setSuccessOpen(true);
  const handleSuceessClose=()=>setSuccessOpen(false);


 const [loggedOpen, setLoggedOpen]=useState(false);



 const handleLoggedOpen=()=> setLoggedOpen(true);

 const handleLoggedClose=()=>setLoggedOpen(false);

 const [verifyOpen, setverifyOpen]=useState(false);
 
 const handleverifyOpen=()=> setverifyOpen(true);

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const [buttonClicked, setButtonClicked] = useState(false);


 
   const locationdatas = useSelector(state => state.cityname);
 
  
 

 const handleverifyclose=()=>
  {
    setverifyOpen(false);
    setButtonClicked(true);
 } 

 const [totalvalue, setTotalvalue] = useState();

 const [selectCity, setSelectCity]=useState('');
 const [selectLocation, setSelectLocation] = useState();


const increased=useSelector(state=>state.forceData)



const Close=()=>
 {
    
    localStorage.removeItem("access_token");
    navigate("/connect");
    setAnchorElNav(null);
 } 
 const Hide=(values)=>
 {
    
    switch(values)
    {
       case 0 : {
              navigate("/profile");
              setAnchorElNav(null);
      }
       break;

       case 1: break;

       case 2: break;

       case 3: break;

       case 4: {
        localStorage.removeItem("access_token");
        localStorage.removeItem("CityId");
        localStorage.removeItem("location");
        setAnchorElNav(null);
       }
       break;
    }

 }

   const handleOpenLogin=()=>
 {
    navigate("/connect");
 
 }
  
const handleInput=(e)=>
{
     


    const value=e.target.value;
    setTotalvalue(value);
    Filter(e);
  /*  
    if(remove===false)
    {
      setTotalvalue("");
       Filter(e);
      console.log(remove);
    }

    else
    {
      
      setTotalvalue(value);
      Filter(e);
      console.log(remove);
    }
    */  
}


 const handleLocationChange=(e)=>
 {

  
   const selectedCity = e.target.value;
   setSelectCity(selectedCity);

   const selectedLocation = locationdatas.find((location) => location.location_name === selectedCity);

    
 
  if (selectedLocation) {
   

    setSelectLocation(selectedLocation.location_id);
 
    localStorage.setItem('CityId', JSON.stringify(selectedLocation.location_id))
  
    const searchParams= new URLSearchParams(window.location.search);
    searchParams.forEach((_, key) => searchParams.delete(key));
    const newUrl = `${window.location.origin}${window.location.pathname}${searchParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
    localStorage.setItem('location', JSON.stringify(""));
    
    
 }
 }

 useEffect(() => {
 
  (async () => {

  if (selectLocation) {

    
       
      
      const searchParams= new URLSearchParams(window.location.search);

      searchParams.forEach((_, key) => searchParams.delete(key));
  
      searchParams.set("city", selectCity)
     
      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
  
      window.history.replaceState(null, '', newUrl);

      localStorage.setItem('location', JSON.stringify(selectCity))
  
      updateLocation(selectLocation);
        
  }
else
{
  const searchParams= new URLSearchParams(window.location.search);

  searchParams.forEach((_, key) => searchParams.delete(key));

  searchParams.set("city", locationdatas[0].location_name)
 
  const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;

  window.history.replaceState(null, '', newUrl);
}

})();
}, [selectCity,locationdatas]);


useEffect(()=>
{

      const storedCity = JSON.parse(localStorage.getItem('location'));
     

    if (storedCity) {
      setSelectCity(storedCity);

      const searchParams= new URLSearchParams(window.location.search);
      searchParams.forEach((_, key) => searchParams.delete(key));
      searchParams.set('city', storedCity)
      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;  
      window.history.replaceState(null, '', newUrl);
      localStorage.setItem('location', JSON.stringify(storedCity))
    }
   
 
   
   
  
},[selectCity])


useEffect(()=>
{
   
   
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${Baseurl}/locations/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const locatedata=JSON.parse(result);
        const  Categorydata = locatedata.data;
        dispatch(locationUpdate(Categorydata));
        const  Status=locatedata.status;
        console.log(locatedata);
         if(Status==='success')
         {
          console.log(locationdatas[0].location_name)

          if (locationdatas && locationdatas.length > 0) {
            localStorage.setItem('location', JSON.stringify(locationdatas[0].location_name));

          }
          
             localStorage.setItem('CityId', JSON.stringify(locationdatas[0].location_id))
             console.log(locationdatas[0].location_id)
         }
  

      })
         .catch(error => console.log('error', error)); 
    
    

},[dispatch])




  const Search=()=>
  {


    const locationname = JSON.parse(localStorage.getItem('location')) ;
    navigate(`/home/search?${'city'}=${locationname}`);
  
  } 

  const SearchIcon=()=>
  {


      const locationname = JSON.parse(localStorage.getItem('location'));
   
     navigate(`/searchsuggestion?${'city'}=${locationname}`)
  }
   
  const LogoImage=()=>
  {
     const locationname = JSON.parse(localStorage.getItem('location'));
    navigate(`/home?${'city'}=${locationname}`);
  }

  const handleClick=()=>
  {
      setOpen(true);
  }

  return (

    <>
    <div className="header">
    <div className='header_show'>

      <div className='place'>
     <div onClick={LogoImage}><img  className='logo' src={Logo} alt="logo" /></div> 
     <div className="placeIcon"><PlaceOutlinedIcon/></div>



       
      
        <select className="city" value={selectCity} onChange={handleLocationChange}  >
        
        
       {locationdatas && locationdatas.map(city=>(
      <option key={city.location_id} value={city.location_name}>{city.location_name}</option>
       ))}
        </select>
        
        </div>


      
     <div className='input_search_value'>
     <input className="input_search" type="text"  value={totalvalue}  onChange={handleInput} placeholder='Search Service here'/>
     <div className='searchingfilter' onClick={Search}><SearchOutlinedIcon/></div>
     

     </div>
           
  <div className="search_item">
  <div  className="searchoutlined" onClick={SearchIcon}> <SearchOutlinedIcon />   </div>    
  <div>

         {access===null ? 
     
        <Box sx={{ display: { xs: 'flex',sm:"flex", md: 'none' }}}>
      <div   onClick={handleOpenLogin}  style={{fontWeight:500}} className='openLogin' >Login or Signup</div> 
      </Box> :
  
             <Box sx={{display: { xs: 'flex',sm:'flex', md: 'none' }}} >
             <div style={{display:"flex", alignItems:"center"}}
       
           onClick={handleOpenNavMenu}
             >
          <div className="guestheader "> Hi Guest <Avatar alt="Remy Sharp" src={selectedImage} style={{marginLeft:"6px"}} />  </div> 

                    </div>
                 <Menu
               id="menu-appbar"
          anchorEl={anchorElNav}
           anchorOrigin={{
            vertical: 'bottom',
             horizontal: 'left',
    }}
          keepMounted
              transformOrigin={{
           vertical: 'top',
           horizontal: 'left',
            }}
          open={Boolean(anchorElNav)}
         onClose={handleCloseNavMenu}
        sx={{
           display: { xs: 'block',sm:'block', md: 'none' },
           }}
      >
       {settings.map((setting) => (
       <MenuItem key={setting} onClick={Close}>
        <Typography textAlign="center">{setting}</Typography>
      </MenuItem>
         ))}
        </Menu>
          </Box>}


             </div>
   
     <div className='search_valueitem'>

          {access===null?
       <Box sx={{display: { xs: 'none',sm:"flex", md: 'flex' }}}>
       <div onClick={handleOpen} style={{fontWeight:500}} className='handleLogin'>Login or SignUp </div>
           <div><Modal    open={open}  ><Auth handle={handleClose}  handleVerify={handleverifyOpen}  handleOpen={handleSuccessOpen}  handleSuccessfullyClose = {handleSuceessClose} /></Modal></div>

              <div><Modal open = {successOpen}><Successfully/></Modal></div>
           <div><Modal    open={verifyOpen}  ><Verification handleVerifyClose={handleverifyclose}  handleLoggedInOpen = {handleLoggedOpen} handleLoggedInClose = {handleLoggedClose} /></Modal></div>
             <div><Modal open ={loggedOpen}><Logged/></Modal></div>
             </Box>
                :
            <Box sx={{display: { xs: 'none',sm:'flex', md: 'flex' } }} >
                <div style={{display:"flex", alignItems:"center"}}
         
                 onClick={handleOpenNavMenu}
                  > <div className='guest'>Hi Guest</div> 

                <Avatar alt="Remy Sharp" src={selectedImage} className='avatar' />
            
                 </div>
                  <Menu
                        id="menu-appbar"
                  anchorEl={anchorElNav}
                   anchorOrigin={{
                     vertical: 'bottom',
                   horizontal: 'left',
                  }}
            keepMounted
          transformOrigin={{
           vertical: 'top',
          horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
            sx={{
           display: { xs: 'none',sm:'block', md: 'block' },
               }}
            >
            {settings.map((setting, index) => (
           <MenuItem key={setting} onClick={()=> Hide(index)}>
          <Typography textAlign="center">{setting}</Typography>
         </MenuItem>
        ))}
           </Menu>
         </Box>

    }
        </div>

          </div>

              </div>  
          

           </div>
           </>

  );
}


const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(Header);

/*


                     <span className='cartItems'>{cartItems}</span>
  localStorage.setItem('location', JSON.stringify(locationdata))
     
*/