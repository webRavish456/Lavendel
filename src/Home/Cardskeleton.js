import React, { useEffect, useState } from "react";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    
   ...theme.typography.body2,
   paddingBottom: theme.spacing(1),
   textAlign: 'center',
   borderRadius:'12px'
  }));

const Cardskeleton=({handle})=>
{


  const arrayLength = 3;



  const item = Array.from({ length: arrayLength }, (_, index) => `Item ${index + 1}`);

      return (
        <>
             
              <div className="explore_container">
             <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="start" >

          {item.map(cur=>
                   
                  {
                     return (
                      <>
                               
                      <Grid item  xs={6} sm={4} md={4}>
                       <div className="categoriesdata">
                       <Item  style={{cursor:"pointer"}}>
                       <div className="explore_image_recommend"><Skeleton className="skeleton" style={{borderRadius:"12px 12px 0px 0px"}}/></div>
            
                       <div className="explore_name"><Skeleton width={"130px"}/></div>
                  
                       <div className="starIcon">
                    <div className="pickrating"><Skeleton width={"40px"} className="rupee" /><span className="currency1"><Skeleton/></span></div>
                    <div className="pickrating"><Skeleton width={"70px"} className="rupee" /><span className="currency1"><Skeleton/></span></div>
                   </div> 
                <div className="pickrating"><Skeleton width={"70px"}  className="rupee" /> <span className="currency1"><Skeleton/></span></div>
               
         

                       <div className="priceIcon">
                    <div className="discount"><Skeleton width={"30px"}/></div>
                    <div className="real_price"><del className="price"><Skeleton width={"60px"} className="rupee"/> <span className="currency"><Skeleton/></span></del></div>
                    <div className="expected_price"><Skeleton width={"60px"}  className="rupee"/><span className="currency"><Skeleton/></span></div>
                    </div>

              

                       </Item>
                       </div>
                       </Grid>
                      </>
                     )
                  }
          )}
            
             </Grid>             
             </Box>
            
             </div>
        </>
      )

}

export default Cardskeleton;

/*
            {item.map(cur=>
            {
               return (
                <>
                      </>
               )
              
            })

            }
            */