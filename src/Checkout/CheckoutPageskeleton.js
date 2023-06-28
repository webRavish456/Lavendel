import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  
}));


const CheckoutPageskeleton=()=>
{



     return (
        <>

           <section className="section">
             <div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center"  >
          <Grid item  xs={12} sm={12} md={12}>
          <Item>
         <div className="checkout_item">
         <div  className="checkout_image_skeleton"><Skeleton className="checkout_image_skeletons" /></div>
  
           <div className="checkout_rating">
           <div className="checkout_name"><Skeleton width={"18vw"} /></div>

             <div className="select_checkout">

           <div className="checkout_star">
           <div className="checkout_starIcon"><Skeleton width={"30px"}/> </div>
           <div className="checkout_rating_rate">
           <div className="checkout_rating_name"><Skeleton width={"30px"}/></div>
           </div>
           <div className="rating_name"><Skeleton width ={"6vw"} /></div>

           </div>
      
         

                <div className="checkout_star">
                <div className="checkout_starIcon"><Skeleton width={"30px"} style={{marginLeft:"5vw"}} /></div>
                <div className="checkout_rating_rate">
                 <div className="checkout_rating_name"><Skeleton width={"30px"}/></div>
                </div>
                <div className="rating_name"><Skeleton width ={"6vw"}/></div>
                  </div>
                  
                <div className="checkout_star">
                <div className="checkout_starIcon"><Skeleton width={"30px"} style={{marginLeft:"13vw"}}  /> </div>
                <div className="checkout_rating_rate">
                 <div className="checkout_rating_name"><Skeleton width={"30px"}/> </div>
                </div>
                <div className="rating_name"><Skeleton width ={"6vw"}/></div>
                 </div>
              

            </div>

             <div className="select_service"><Skeleton width ={"12vw"}/></div>

            <div className="select_bhk">
              <div><Skeleton width={"4vw"} /></div>
              <div><Skeleton width={"4vw"} /></div>
            </div>

             <div className="pricedetail">

                    <div className="pricevariant">
                    <div className="expected_pricevariant"><Skeleton width={"60px"} style={{marginLeft:"-4px"}}  className="rupee"/><span className="currency"><Skeleton/></span></div>
                    <div className="real_pricevariant"><del className="price"><Skeleton width={"60px"} className="rupee"/> <span className="currency"><Skeleton/></span></del></div>
                    <div className="discountvariant"><Skeleton width={"30px"}/></div>
                    </div>

                      
                    </div>
                <div className=" connect_button addCart_button " ><Skeleton height={"40px"}/> </div>
                     
      </div>
      </div>
      </Item>
           </Grid>
          
           </Grid>
           </Box>
           </div>
           
           </div>
           </section>
        </>
     )
}

export default CheckoutPageskeleton;