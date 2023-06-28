
import React, {useState} from "react";
import Frame from "../assests/Frameprofile_update.png";
import Box from '@mui/material/Box';
import Profile from "./Profile";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";





const Update=()=>
{

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

 const navigate=useNavigate();

  const [userData, setuserData]=useState({
    fname:"",
    lname:"",
    email:"",

  })

  const ExistMobile = JSON.parse(localStorage.getItem("phone"));

   const [error1, setError1]=useState(false);  
   const [error2, setError2]=useState(false); 
   const [error3, setError3]=useState(false);

   const [save, setSave]=useState("save");

  const handleinput=(e)=>
  {
     const name=e.target.name;
     const value=e.target.value;

     setuserData({...userData,[name]:value});

     if((userData.fname.length<1 && userData.lname.length<1 && userData.email.length<1))
     {
          setSave("save-all");
     }
     

  }

  const submit=(e)=>
  {
     e.preventDefault();
     setuserData({fname:"",lname:"",email:""});

     if(userData.fname.length<1)
     {
        setError1(true);
     }
     if(userData.lname.length<1)
     {
        setError2(true);
     }
     if(userData.email.length<1)
     {
        setError3(true);
     }
    else
    {
         navigate("/awesome");
    }
     


  }

    return (
        <>
        <div className="contain">
          <Profile/>
  
              
           <div className=" section-content content">
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={11} sm={6} md={4}>
        
         <div className="update-profile">
         <img className="profile-image" src={Frame} alt="logo"/>
         </div>
          
         <div className="avatar">
         <label htmlFor="avatarInput">
           <Avatar className="avatar_profile" src="/broken-image.jpg" />
           </label>
           <input style={{display:"none"}} id="avatarInput"  type="file"  onChange={handleFileChange} accept="image/*" />
           </div>

           <form className="form" onSubmit={submit}>
           <div className="placeholder">
           <label  className="form-label"  htmlFor="fname">First Name</label>
           <TextField  className="input_data" type="text" id="standard-required"     sx={{'& input::placeholder': {      color: '#646464', fontSize:'12px', fontFamily:'Montserrat', opacity:"0.9"  },  '& .MuiInputBase-input': {    fontSize: '14px',    },  }} placeholder="Enter First Name" variant="standard"  value={userData.fname} name="fname" onChange={handleinput}  />
          {error1 && <label className="field_required">This field is required</label>}
           </div>
           <div className="placeholder">
           <label  className="form-label"  htmlFor="lname">Last Name</label>
           <TextField className="input_data" type="text"  id="standard-required"     sx={{'& input::placeholder': {      color: '#646464', fontSize:'12px', fontFamily:'Montserrat', opacity:"0.9" },  '& .MuiInputBase-input': {    fontSize: '14px',    },  }} placeholder="Enter Last Name" variant="standard" value={userData.lname} name="lname"  onChange={handleinput}  />
          {error2 && <label className="field_required">This field is required</label>}
           </div>
          
          <div className="placeholder1">
          <label   className="form-label" htmlFor="email">Email Id</label>
           <TextField className="input_data" type="email" id="standard-required"     sx={{'& input::placeholder': {      color: '#646464', fontSize:'12px', fontFamily:'Montserrat', opacity:"0.9" },  '& .MuiInputBase-input': {    fontSize: '14px',    },  }} placeholder="Enter your Email id" variant="standard" value={userData.email} name="email"  onChange={handleinput}  />
          { error3 && <label className="field_required">This field is required</label>}
           </div>

           <div className="placeholder1">
           <label  className="form-label" htmlFor="phone">Phone Number</label>
           <TextField className="input_data"   id="standard-required"     sx={{'& input::placeholder': {      color: '#000000', fontSize:'14px', fontFamily:'Montserrat', opacity:"1" , fontWeight:'500' ,lineHeight:"26px"   },   }}  placeholder={ExistMobile} variant="standard" value={userData.phone}  />

           </div>
           <button className={save}>Save</button>       
           </form> 
        </Grid>
      </Grid>
     </Box>
     </div>   

         </div>
   
        </>
    )
}

export default Update;

