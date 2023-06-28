import React, { useEffect, useState } from "react";
import { Box, Grid, } from "@mui/material";
import {  createTheme, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
   }));
 

const ProfileDetailskeleton=()=>
{


    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
          },
        },
      });

      const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

     

  
  




   

      const Phone = JSON.parse(localStorage.getItem('phone'))

   

      const [recordfname, setrecordfname] = useState();
      const [recordlname, setrecordlname] = useState();
      const [recordgender, setrecordgender] = useState('');
      const [recordemail, setrecordemail] = useState("example@gmail.com");
      const [recordmobile, setrecordmobile] = useState(Phone);
   




  
     return (
        <>
             <section className="section">

             <div className="explore_container">
              <Box sx={{width:"100%"}}>


          <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:1, md:4}} display="flex" justifyContent="space-between">
          <Grid item xs={12} sm={isSmScreen ? 12 : 3} md={3}>
           <Item className="avatar_profile">
      


           <Skeleton variant="circular" style={{borderRadius:"50%"}} width={50} height={50} />
           <div className="hello"><Skeleton width={"8vw"} /></div>
           </Item>
          

          </Grid>

          <Grid item xs={12} sm={isSmScreen? 12:9} md={9}>
           <Item>
            <form>
             <div className="personalinfo"><Skeleton width="16vw" /></div>
             
              <Box component="form" sx={{ '& > :not(style)': { m: 1,},  }} noValidate  autoComplete="off" className="form-input" >
              <div className="edit_data">
              <label htmlfor="personal"  className="label"><Skeleton width="10vw"/></label>
             <div className="edit"><Skeleton width="4vw"/></div>  
              </div>
         
       
              <div>
             <div className="details"><Skeleton width="14vw"/></div>
              <div className="hr"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>

                
          

             <div>
             
              <label htmlfor="gender" className="label"><Skeleton width="10vw"/></label> 
           
                <div className="gender">
                <Skeleton width="5vw"/>
                <Skeleton width="6vw" style={{marginLeft:"8px"}}/>
               </div>
             
              </div>
      
              <div className="edit_data">
              <label htmlfor="email"  className="label"><Skeleton width="10vw"/></label>
             <div className="edit"><Skeleton width="4vw"/></div>  
              </div>
         
       
              <div>
             <div className="details"><Skeleton width="14vw"/></div>
              <div className="hr"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>


              <div className="edit_data">

              <label htmlfor="phone"  className="label"><Skeleton width="10vw"/></label>
             <div className="edit"><Skeleton width="4vw"/></div>  
              </div>
         
       
              <div>
             <div className="details"><Skeleton width="14vw"/></div>
              <div className="hr"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>

                    
               <div className="edit_data">
               <label htmlfor="aadhar"  className="label"><Skeleton width="10vw"/></label>
             <div className="edit"><Skeleton width="4vw"/></div>  
              </div>
         
       
              <div>
             <div className="details"><Skeleton width="14vw"/></div>
              <div className="hr"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>
                 
             
               
              </Box>
            </form>

           </Item>

          </Grid>

          </Grid>
          </Box>
          </div>

             </section>


        </>
     )
}

export default ProfileDetailskeleton;

/* */

