import React, { useEffect, useState } from "react";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme,  createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
   paddingBottom: theme.spacing(1),
   textAlign: 'center',
   borderRadius:'12px'
  }));


const Items = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
}));

const Searchskeleton=()=>
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

     const Baseurl = process.env.REACT_APP_BASE_URL;

     const arrayLength = 8;
 
     const item = Array.from({ length: arrayLength }, (_, index) => `Item ${index + 1}`);

     const categoryLength = 3;

     const category = Array.from({ length: categoryLength }, (_, index) => `Item ${index + 1}`);

    
     const access= JSON.parse(localStorage.getItem("access_token"));
  

    return (
        <> 
          
        

          
              <div className="explore_container">

              <Box sx={{width:"100%"}}>
              <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:1, md:4}} display="flex" justifyContent="space-between" columns={12}  >
           
      

              <Grid item xs='none' sm={isSmScreen ? 0 : 3} md={2.3} className="filter_search" >
           
           <Items>
           <div className="filter">
           <div className="filtering"><Skeleton width={"100px"}/></div>
           
               {
                 item.map(cur =>
                 {
                    return (
                      <>
                        
                        <div className="check_filter" style={{padding:"10px"}}>
                        <div><Skeleton width={"13px"}  /></div>
                          <div><Skeleton   style={{marginLeft:"6px", boxSizing:"border-box", width:"9vw"}}/></div>
                          </div>
                      </>
                    )
                 } )
               }
               </div>
           </Items>

          </Grid> 
          
      

          <Grid item xs={12} sm={11.3} md="none" className="check_bunchfilter">
    
       
             
           {
                 item.map(cur =>
                 {
                    return (
                      <>

                        <div>
                          <div><Skeleton /></div>
                          </div>
                         
                      </>
                    )
                 } )
               }

          


          </Grid>
    
          <Grid container item  xs={12} md={9.7} sm={isSmScreen ? 12 : 9} columnSpacing= {2} display="flex" >


            {category.map(cur=>
          {
          return (
            <>
            <Grid item  xs={6} sm={4} md={4}>
           <div style={{marginBottom:"20px"}}  >
           <Item  style={{cursor:"pointer"}}>

         <div >

           <div className="search_image_data"><Skeleton className="skeleton"  style={{borderRadius:"12px 12px 0px 0px"}}/></div>   
           <div className="explore_name" style={{paddingTop:"16px"}}><Skeleton  style={{width:"11vw"}} /></div>


           <div className="starIcon">
              <div className="pickrating"><Skeleton style={{width:"3vw"}}  className="rupee" /><span className="currency1"><Skeleton/></span></div>
                <div className="pickrating"><Skeleton  style={{width:"6vw"}}  className="rupee" /><span className="currency1"><Skeleton/></span></div>
                </div> 
                <div className="pickrating"><Skeleton  style={{width:"6vw"}}  className="rupee" /> <span className="currency1"><Skeleton/></span></div>
    


           <div className="priceIcon">
           <div className="discount"><Skeleton  style={{width:"2vw"}} /></div>
              <div className="real_price"><del className="price"><Skeleton  style={{width:"5vw"}}  className="rupee"/> <span className="currency"><Skeleton/></span></del></div>
              <div className="expected_price"><Skeleton  style={{width:"5vw"}}  className="rupee"/><span className="currency"><Skeleton/></span></div>
     </div>

                     
         
       </div>

           </Item>
           </div>
           </Grid>
    </>
   )
  
})

}
</Grid>
          
          </Grid>
         
                      
             </Box>
             </div>

           
         

        </>
    )
}

export default Searchskeleton;

/*   

   <Grid item xs={12} sm={9} md={9} display="flex" justifyContent="space-between">
            {category.map(cur=>
            {
               return (
                <>

                    <Grid item xs={3.7} sm={3.7} md={3.7}>
                       <div className="skeletoncategoriesdata">
                       <Item  style={{cursor:"pointer"}} className="skeletonitem">
                       <div className="explore_image_recommend"><Skeleton className="skeleton"/></div>
            
                       <div className="explore_name"><Skeleton  style={{width:"11vw"}} /></div>
                  
                       <div className="priceIcon">
                    <div className="discount"><Skeleton  style={{width:"2vw"}} /></div>
                    <div className="real_price"><del className="price"><Skeleton  style={{width:"5vw"}}  className="rupee"/> <span className="currency"><Skeleton/></span></del></div>
                    <div className="expected_price"><Skeleton  style={{width:"5vw"}}  className="rupee"/><span className="currency"><Skeleton/></span></div>
                    </div>

                    <div className="starIcon">
                <div className="pickrating"><Skeleton style={{width:"3vw"}}  className="rupee" /><span className="currency1"><Skeleton/></span></div>
                <div className="pickrating"><Skeleton  style={{width:"6vw"}}  className="rupee" /><span className="currency1"><Skeleton/></span></div>
                <div className="pickrating"><Skeleton  style={{width:"6vw"}}  className="rupee" /> <span className="currency1"><Skeleton/></span></div>
                </div> 

                       </Item>
                       </div>
                       </Grid>
                      
                </>
               )
              
            })

            }
          </Grid>


           */