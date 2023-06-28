import React, {useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { couponsCode } from "../Redux/action";
const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
const Applied=()=>
{

    const Baseurl = process.env.REACT_APP_BASE_URL;
    const access= JSON.parse(localStorage.getItem("access_token"));

    const [coupons, setcoupons] = useState([]);

    const  navigate=useNavigate();

     const dispatch = useDispatch();

 useEffect(()=>
{
    (async () => {
     
        if(access!==null)
        {
      
           var myHeaders = new Headers();
           myHeaders.append("Authorization", `Bearer ${access}` );
          
           var requestOptions = {
            method: 'GET',
            headers:myHeaders,
            redirect: 'follow'
          };
          
          fetch(`${Baseurl}/get-coupons/`, requestOptions)
            .then(response => response.text())
            .then(result => {
              const coupondata=JSON.parse(result);
            
             const latestcoupons = coupondata.coupons[0];
              setcoupons(latestcoupons);
           
           
            })
            .catch(error => console.log('error', error)); 
        }
        
     })();

},[])
 
const apply=(value)=>
{

   navigate(-1)
   dispatch(couponsCode(value));
   
}


    return (
        <>
            
            <section className="section">
             <div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2}   columnSpacing={{xs:2, sm:3, md:4}} display="flex"   >
           <Grid item md={4} xs={12} sm={6}>
          
            <Item>
            
            <div  className="coupon_data">
             <div className="coupon_applied" >
             
              <div  ><LazyLoadImage src={coupons.coupon_brand_thumbnail} className="coupon_image" alt="logo"/></div>
              <div className="coupon_applydata">
                <div className="coupon_title">{coupons.coupon_title}</div>
                <div className="coupon_description">{coupons.coupon_description}</div>
                <div className="apply_coupon">
                <div className="coupon_code">{coupons.coupon_code}</div>
                <div ><button className="applydatacoupons" onClick={()=>apply(coupons.coupon_value)}>APPLY</button></div>
                </div>
              </div>
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

export default Applied;