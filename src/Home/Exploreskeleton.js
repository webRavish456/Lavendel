import React, {useState, useEffect} from "react";
import { Box, Grid} from "@mui/material";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { HandymanOutlined } from "@mui/icons-material";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));


const Exploreskeleton=()=>
{


    const arrayLength = 8;
    const item = Array.from({ length: arrayLength }, (_, index) => `Item ${index + 1}`);
  
    return(
        <>

        
       
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
              <Grid container rowSpacing={4} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center"  >
           

          {item.map((cur)=>
             {
                return(
                    <>
                 
                     

                       <Grid item  xs={3} sm={1.5}  md={1.5} >
                       

                       <div className="categoriesdata  ">
                       <Item style={{cursor:"pointer"}}>
                        
                         <div>

                         <div className="category_image_light"><Skeleton className="skeletonname" /></div>
                         <div><Skeleton/></div>
                         </div>
                         </Item>
                         </div>
                       
                        </Grid> 
                        

                      
                    </>
                )
             })}

             </Grid>             
             </Box>
             </div>
          

        </>
    )
}

export default Exploreskeleton;


/* 
 
*/