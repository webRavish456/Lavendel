import React from "react";
import { Container, Typography,  Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import {NavLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  textAlign: 'center',
}));

const  Footer=() => {
  
    


    return (
      <footer style={{paddingTop:"2%"}} className="footer_resource">
        <Box sx={{ bgcolor: '#f5f5f5', py: 5, width:"100%"}}>
   
        <Grid container spacing={2}  >
        <Grid item  sm={3.8} md={4}>
        <Paper style={{ height: '100%', display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"start", backgroundColor:"transparent", boxShadow:"none"}}>
          
          <div className="title resources">Services</div>
          <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Painting</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Appliance Repair</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Plumbering</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Home Cleaning</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Pest Control</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Netting</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Interior Design</div></NavLink>
               <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Electrical Service</div></NavLink>
    

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3.8} md={4}>
        <Paper style={{ height: '100%', display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"start", backgroundColor:"transparent", boxShadow:"none"}}>
         

       
        <div className="title resources " >Resources</div>

        <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Home</div></NavLink>
                <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Contact us</div></NavLink>
                <NavLink to="/home" className="footer_title"><div className="footer_pagargraph">Blog</div></NavLink>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3.8} md={4}>
        <Paper style={{ height: '100%', display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"start", backgroundColor:"transparent", boxShadow:"none"}}>
         
        
        <div className="title resources">Address</div>

        <address className="footer_address">Nanorama Technologies Pvt Ltd
                     <br></br>   447/A, 9th Cross,
                       <br></br>  2nd Phase, JP Nagar,
                     <br></br>    Bangalore 560078, India</address>
                     <NavLink className="footer_title">
                      <div className="phone_icon">
                        <PhoneIcon/>
                        <div>+91 9876543210</div>
                        </div>
                     </NavLink>

                     <NavLink className="footer_title">
                      <div className="phone_icon">
                        <EmailIcon/>
                        <div>contact@lavendel.co.in</div>
                        </div>
                     </NavLink>
              
          </Paper>
        </Grid>
      </Grid>
            

         
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, paddingTop:"2%" }}>
              <IconButton aria-label="Facebook" sx={{ mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ mr: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ mr: 1 }}>
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
            <Typography variant="body1" color="#2d2d2d" align="center">
              &copy; {new Date().getFullYear()} Example Company. All rights reserved.
            </Typography>
          
            
            </Box>
          
       
      </footer>
    );
  }
  
  export default Footer;


  /*
           



               
               
          
            */