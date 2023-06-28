import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

const Profile=()=>
{

   const navigate=useNavigate();

   const Update=()=>
   {
      navigate("/Verify-Code")
   }

    return (
        <>
        

               <div style={{backgroundColor:'var(--background-color)'}}  >
               <div className="section_update profile">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{color:"black"}}
          >
            <ArrowBackIcon  onClick={Update}/>
          </IconButton>
          <div  sx={{ flexGrow: 1 }} className="navigation_title" >
            Update Profile
          </div>
          </div>
          </div>
        </>
    )
}
export default Profile;