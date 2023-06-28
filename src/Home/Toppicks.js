import React, { useState, useEffect } from "react";

import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-loading-skeleton/dist/skeleton.css'
import Cardskeleton from "./Cardskeleton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/action";


const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  textAlign: 'center',
  borderRadius:'12px'
}));

const Toppicks=({value, loading})=>
{
    
   const access= JSON.parse(localStorage.getItem("access_token"));

   const dispatch= useDispatch();
   const navigate= useNavigate();


  const toppicks=(value, name)=>
 {


      const locationname = JSON.parse(localStorage.getItem('location'));

      const servicename = JSON.parse(localStorage.getItem('service'));
      dispatch(filterData(value));
      navigate(`/checkout?${'city'}=${locationname}&${'service'}=${servicename}`);
    
       const searchParams= new URLSearchParams(window.location.search);
       searchParams.set("service", servicename)
       const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);
    
      
    
       console.log(value)
    
         localStorage.setItem('service', JSON.stringify(name));
   
  
 }
    
    return (
        <> 
       
        <section className="section">

           <div className="container">
             <div className="view_all">
          <div className="head_title explore">Top_picks for you</div>
          <NavLink to="/home" className="nav-bar">View-All</NavLink>
          </div>
                
         {loading ? 
          <>
             <Cardskeleton/> 
          </>
           :
            <div className="explore_container">
           
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="start" >
           

            {  value.map(cur=>
            {
               return (
                <>
                <Grid item  xs={12}  sm={4} md={3}  >
                       <div className="categoriesdata" >
                       <Item style={{cursor:"pointer"}} onClick={()=>toppicks(cur.service_id,cur.service_name)}>
                            
                            
                       <div className="explore_category  categoriespicks">
                       <div className="explore_image_category">
                       <LazyLoadImage  src={cur.image_gallery[0].image_url} alt="category"    />
                       </div>

                       <div className="explore_title_padding">

                       <div className="category_wise_data">
                        <div className="explore_names">{cur.service_name}</div>
          
    
                     <div className="stardata">
                        <div className="starIcon">
                       <div className="pickrating"><StarIcon className="rupee"/><span className="currency1">{cur.rating}</span></div>
                       <div className="pickrating"><AccountCircleOutlinedIcon className="rupee" /><span className="currency1">{cur.variant[0].variant_staff} staff</span></div>
                       </div> 
                       <div  className="pickrating accessrating_data "><AccessTimeOutlinedIcon className="rupee" /> <span className="currency1">{cur.variant[0].variant_duration}</span></div>
                       </div>
                        </div>
                       <div className="priceIcondata">
                    <div className="discount">{(cur.variant[0].variant_percentage).toFixed(1)} %</div>
                    <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"  /> <span className="currency">{cur.variant[0].variant_price}</span></del></div>
                    <div className="expected_price"><CurrencyRupeeOutlinedIcon  className="rupee"  /><span className="currency">{cur.variant[0].variant_sale_price}</span></div>
                    </div>

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
             </Box>
           </div>
          
         }
            </div>
            </section>
        </>
    )
}

export default Toppicks;

/*
          
        {value.map(cur=>
            {
               return (
                <>       
                       </>
               )
              
            })

            }     
                      
                        

                       

                        
                    
                          
                    
 
                  
                  
                  <div className="starIcon">
                <div className="pickrating"><StarIcon className="rupee"/><span className="currency1">{cur.rating}</span></div>
                <div className="pickrating"><AccountCircleOutlinedIcon className="rupee" /><span className="currency1">{cur.staff} staff</span></div>
                <div className="pickrating"><AccessTimeOutlinedIcon className="rupee" /> <span className="currency1">{cur.time} mins</span></div>
                </div> 


                    </div>
                    </div>

                         </Item>
                       
                         </div>
                        </Grid>
                    
                        

                      
                    </>
                )
             })}
                       
          
                <div><hr className="starhr"></hr></div>


                   
                        
                            
                         <div className="priceIcon">
                    <div className="discount">{((cur.price-cur.expected_price)/(cur.price)*100).toFixed(2)  } %</div>
                    <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  style={{ transform:"scale(0.8)", color:"var(---stroke)"}}/> <span className="currency">{cur.price}</span></del></div>
                    <div className="expected_price"><CurrencyRupeeOutlinedIcon style={{transform:"scale(0.8"}} /><span className="currency">{cur.expected_price}</span></div>
                    
                    </div>
    
                   

                   






                <div className="explore">Explore by category</div>

   <div className="section_title">
          <Container maxWidth="xl">
        
         
              <Box sx={{width:"100%"}}>
              <Grid container spacing={0.1} columnGap={{sm:2,md:0,xm:0}} display="flex" justifyContent="center" alignItems="center">
               {item.map((cur)=>
               {
                return(
                    <>
                    <Grid item xs={11.2} sm={11.2} md={3.6}>
                  
                    <NavLink to={cur.service} className="cleaning_service">
                    <div className="picks_cleaning">
                   
                    <div className="picks_image"><img className="pick_service" src={cur.image} alt="logo"/></div>
             
                    <div className="cleaning_service">

                    <div className="service_name">{cur.name}</div>

                    <div className="priceIcon">
                    <div className="discount">{((cur.price-cur.expected_price)/(cur.price)*100).toFixed(2)  } %</div>
                    <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  style={{transform:'scale(0.4)', color:"var(---stroke)"}}/> <span className="currency">{cur.price}</span></del></div>
                    <div className="expected_price"><CurrencyRupeeOutlinedIcon  style={{transform:'scale(0.5)'}}/><span className="currency">{cur.expected_price}</span></div>
                    
                    </div>
         
                      <div><hr className="starhr"></hr></div>
                  
                      <div className="starIcon">
                    <div className="pickrating"><StarIcon style={{transform:'scale(0.5)'}}/><span className="currency1">{cur.rating}</span></div>
                    <div className="pickrating"><AccountCircleOutlinedIcon  style={{transform:'scale(0.5)'}}/><span className="currency1">{cur.staff} staff</span></div>
                    <div className="pickrating"><AccessTimeOutlinedIcon style={{transform:'scale(0.5)'}}/> <span className="currency1">{cur.time} mins</span></div>
                    </div> 

                    </div>
                   
                    </div>
               
                    </NavLink>
                   
                    </Grid>
                 
                </>
                )
               })}
               </Grid>
               </Box>
             
            </Container>
            </div>
 
                    

                   

                   
                    */