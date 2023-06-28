import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

  const Additonalskeleton=()=>
  {
     
     return (
        <>
               <div className="explore_container">
    <Box sx={{width:"100%"}}>
  <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center">
  <Grid item  xs={12} sm={12} md={12}>
  <Item >
  <div className='item_additional'>
     <div className='service_includes'><Skeleton width={"20vw"}/></div>

     <div className='additional_information'><Skeleton width={"16vw"}/></div>
     <div className='done_tick'>
      <div className='doneIcon'><Skeleton width={"5vw"}/></div>
      <div className='additional_details'><Skeleton width={"10vw"}/></div>
    
     </div>
     <div className='service_note'><Skeleton width={"10vw"}/></div>
     </div>
  </Item>
  </Grid>
  </Grid>
  </Box>
  </div>
        </>
     )
 
  
 


  }
  export default Additonalskeleton;
