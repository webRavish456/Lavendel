import React, { useState } from "react";
import { DealDay } from "./DealDay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Deals=()=>
{

    const [item, setItem] = useState(DealDay)
    const responsive = {
        superdesktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1400, min: 1200 },
          items: 3,
        },
       minidesktop: {
           breakpoint: { max: 1200, min: 1100 },
           items: 2,
        },
    
        tablet: {
          breakpoint: { max: 1100, min: 700 },
          items: 2,
          
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
         
        }
      };
    return (
        <>  
        
        <div className="section_title  ">
  
        <Box sx={{width:"100%", flexGrow:1}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 2 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item  xs={12} sm={12} md={12}>
   
            <Carousel responsive={responsive}  autoPlay={true}    autoPlaySpeed={3000} className="custom-carousel"
              rewind={true}   removeArrowOnDeviceType={["superdesktop","desktop","minidesktop","tablet", "mobile"]}
               >
               
        
             
             {item.map((cur)=>
             {
                return (
                    <>
                    
              <div className="bath_deal">  <img className="bathroom" src={cur.image} alt="bathroom"/></div> 
             
                    </>
                )
             })}
          
           
             </Carousel>
             </Grid>
             </Grid>
             </Box>
           
            </div>
          
        </>
    )
}

export default Deals;

/*   

 
         <div className="thumbor">   
  



     
     

<div className="deal_off">
                    <div className="title_deal_day">{cur.deal}</div>
                    <div className="title_off">{cur.off}</div>
                    <div className="title_price">{cur.price}</div>
                    </div>



                    */