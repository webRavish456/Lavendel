import React from "react";
import Icons from "../assests/icons.png";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Lavendel from "../assests/lavendel.png";
import { useNavigate } from "react-router-dom";

const Connect=()=>
{
  
    const navigate= useNavigate();

    const access_token = JSON.parse(localStorage.getItem("access_token"));


    const Baseurl=process.env.REACT_APP_BASE_URL;

    const connect=()=>
    {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${access_token}`);
        
        var formdata = new FormData();
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
      
          redirect: 'follow'
        };
        
        fetch(`${Baseurl}/user-check/`, requestOptions)
          .then(response => response.text())
          .then(result=>{
            const data= JSON.parse(result);
            console.log(data.status);

            if(data.status==='success')
            {
                 navigate("/home")
            }
            else{
                navigate("/connect");
                localStorage.removeItem("access_token")
            }
            
            
      })
          .catch(error => console.log('error', error));
    }

    return (
        <>
          <div className=" section-content content">
     <Box sx={{ flexGrow: 1 }}>
      <Grid container  display="flex" justifyContent={{xs:"center", sm:"start", md:"start"}}>
        <Grid item xs={11} sm={5} >

         <div className="connect-profile">
         <img  src={Icons} alt="logo"/>
         </div>
         </Grid>
   
         <Grid item xs={11} sm={5}>
        <div className="connect_service">
         <div className="connect_logo"><img src={Lavendel} alt="logo"/></div>
       
         <div className="discover_title">Discover <br></br>services on demand <br></br> near by you</div>
         <div className="primary_connect">
         <button className="primary_button connect_button" onClick={connect}>Connect</button>
         </div>
         </div>
         </Grid>

         </Grid>
         </Box>
         </div>
        </>
    )
}

export default Connect;

/*
  

   




*/