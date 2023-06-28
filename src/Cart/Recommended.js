import React, { useState, useEffect, useReducer } from "react";
import { Box, Grid } from "@mui/material";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-loading-skeleton/dist/skeleton.css'

import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cardskeleton from "../Home/Cardskeleton";
import { useSelector } from "react-redux";
import { countnumber1 } from "../Redux/action";
import { ignoredData } from "../Redux/action";

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  paddingBottom: theme.spacing(1),
  textAlign: 'center',
  borderRadius:'12px'
}));

const Recommended=({handle, handlevariant})=>
{
     
   const access= JSON.parse(localStorage.getItem("access_token"));

   const dispatch= useDispatch();
   const navigate= useNavigate();
 
   const [loading1, setloading1] = useState(true);
  
   const variantdata=useSelector(state=>state.variantData);

  const [selectedVariant, setSelectedVariant] = useState(0);

   const [value2, setvalue2]= useState([])
   const Baseurl=process.env.REACT_APP_BASE_URL;

    const [data, setData]=useState(0);
  
  const [count3, setcount3] = useState(1);

  const [count4, setcount4] = useState(1);
  const [buttonclicked, setButtonClicked]=useState(false);

   const [ignred,forceDatas]=useReducer(x=>x+1,0);

   const [updatedCartItems, setUpdatedCartItems] = useState([]);

 



   useEffect(()=>
   {
      (async () => {
      
         if( access!==null)
         {
           setloading1(true)
          
           var myHeaders = new Headers();
           myHeaders.append("Authorization", `Bearer ${access}` );
           
        
           
           var requestOptions = {
             method: 'GET',
             headers:myHeaders,
             redirect: 'follow'
           };
           
           fetch(`${Baseurl}/checkout/`, requestOptions)
             .then(response => response.text())
             .then(result => {
               const checkout=JSON.parse(result);
               const  Categorydata = checkout.recommended_services;
               setvalue2(Categorydata);
               console.log(Categorydata);
               const billing = checkout.billing_details;
             
                setloading1(false)
              

             })
             .catch(error => console.log('error', error)); 
         }
         
      })();
   },[access]) 


   useEffect(() => {
 
    
  }, [count3, count4, selectedVariant, data]);
 


 const addCheck=(variantId, serviceId)=>
 {
        
   setSelectedVariant(variantId);
   setData(serviceId); 

   let updatedItems = [...updatedCartItems];

   if (updatedItems.length > 0 && updatedItems[0].service_id !== data) {
     updatedItems = [];
   }
 
   switch (variantId) {
     case 1: {
       if (count3 > 0) {
         const cartItem = updatedItems.find(item => item.variant_id === 1);
 
         if (cartItem) {
           cartItem.quantity = count3;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count3,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
     case 3: {
       if (count4 > 0) {
         const cartItem2 = updatedItems.find(item => item.variant_id === 3);
 
         if (cartItem2) {
           cartItem2.quantity = count4;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count4,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
     case 2: {
       if (count3 > 0) {
         const cartItem = updatedItems.find(item => item.variant_id === 2);
 
         if (cartItem) {
           cartItem.quantity = count3;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count3,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
     case 4: {
       if (count3 > 0) {
         const cartItem = updatedItems.find(item => item.variant_id === 4);
 
         if (cartItem) {
           cartItem.quantity = count3;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count3,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
     case 5: {
       if (count3 > 0) {
         const cartItem = updatedItems.find(item => item.variant_id === 5);
 
         if (cartItem) {
           cartItem.quantity = count3;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count3,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
     case 6: {
       if (count4 > 0) {
         const cartItem2 = updatedItems.find(item => item.variant_id === 6);
 
         if (cartItem2) {
           cartItem2.quantity = count4;
         } else {
           updatedItems.push({
             service_id: data,
             variant_id: selectedVariant,
             quantity: count4,
           });
         }
 
         console.log(updatedItems);
       }
       break;
     }
   
   }
 
   setUpdatedCartItems(updatedItems);

   
   if(access!==null && updatedItems.length!==0 )
  {
    
    
   console.log(updatedItems.length);
   
    var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${access}` );   
    
    var raw = JSON.stringify({
      "cart": updatedItems
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${Baseurl}/cart/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
       console.log(data);

        if(data.status==="success")
        {
          
          dispatch(countnumber1(count3));
          handle(count3);
         handlevariant(variantId);
          forceDatas();
          dispatch(ignoredData(ignred));
      
        }


      })
      .catch(error => console.log('error', error)); 
  
 } 


  

 }
/*
 useEffect(()=>
 {
    
  if(buttonclicked===true || access!==null)

  { 

    if(access!==null)
    {

   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${access}` );   
  
  var raw = JSON.stringify({
    "cart": updatedCartItems
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(`${Baseurl}/cart/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data=JSON.parse(result);
     console.log(data);

      if(data.status==="success")
      {
         handle(count3);
         handlevariant(selectedVariant)
         setButtonClicked(false);
      
      }


    })
    .catch(error => console.log('error', error)); 
  }
}
 },[buttonclicked, access])


*/

    
    return (
        <> 
       
       <section className="section">
           <div>
             <div className="view_all">
          <div className="explore">Recommended add-on services</div>
          </div>
          
              
         {loading1 ? 

          <>

             <Cardskeleton /> 
        </>
          

           :

            <div className="explore_container">
           
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="start"  >
           

            {value2.map(cur=>
            {
               return (
                <>
                <Grid item  xs={6} sm={6} md={6}>
                       <div className="categoriesdata"  >
                       <Item  style={{cursor:"pointer"}}>
                       <div className="explore_image_recommend"><LazyLoadImage  src={cur.service_gallery[0].image_url} alt="category"   /></div>
               
                      <div>
                        
                     <div className="category_wise">

                     <div className="explore_name">{cur.service_name}</div>
                   
                   
                       <div className="priceIconSimilar">
                    <div className="discount">{(cur.service_variant[0].variant_percentage).toFixed(1)} %</div>
                    <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{cur.service_variant[0].variant_price}</span></del></div>
                    <div className="expected_price"><CurrencyRupeeOutlinedIcon className="rupee" /><span className="currency">{cur.service_variant[0].variant_sale_price}</span></div>
                    </div>
                  </div>
                  </div>
                    <div className="add_data" onClick={()=>addCheck(cur.service_variant[0].variant_id, cur.service_id)}><button  className="addcheckout">Add</button></div>
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

export default Recommended;