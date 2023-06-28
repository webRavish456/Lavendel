import React, {useState, useEffect, useReducer} from "react";
import { Box, Grid } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Modal from '@mui/material/Modal';
import { addToCart, variantdataId } from "../Redux/action";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from "react-redux";
import Recommended from "./Recommended";
import {  createTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
}));


const CheckoutCart=()=>
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
    
    const increased=useSelector(state=>state.forceData)

    const  countnumber1= useSelector(state=>state.countno1);
    const  countnumber2= useSelector(state=>state.countno2);

    const [count1, setcount1] = useState(countnumber1);

    const [count2, setcount2]= useState(countnumber2);

    const access= JSON.parse(localStorage.getItem("access_token"));

   const [item, setitem] = useState([]);

   const [value, setvalue] = useState([]);

   const [open,setopen] = useState(false);

   const [buttonClicked, setButtonClicked] = useState(false);

   const Price3= JSON.parse(localStorage.getItem("Price_3"));
   const Price1=JSON.parse(localStorage.getItem("Price_1"));
   const Price2= JSON.parse(localStorage.getItem("Price_2"));
   const Price4=JSON.parse(localStorage.getItem("Price_4"));
   const Price5= JSON.parse(localStorage.getItem("Price_5"));
   const Price6=JSON.parse(localStorage.getItem("Price_6"));

   const navigate= useNavigate();
  
   const totalcharge1=JSON.parse(localStorage.getItem('totalPrice1'));
   const totalcharge3=JSON.parse(localStorage.getItem('totalPrice3'))

  const [totalprice3, settotalprice3] = useState(0);
  const [totalprice1, settotalprice1] = useState(0);

  const location = useLocation();

 const couponValue= useSelector(state=>state.code);

 console.log(couponValue);
 


  const  data  = useSelector(state=>state.servicevalue);

  const variantdata=useSelector(state=>state.variantData);

  const [selectedVariant, setSelectedVariant] = useState(variantdata);

  const [ignored, forcedata] = useReducer(x=>x+1,0);
 
  
   
const remove=(variantId,serviceId, quantity)=>
{
  setSelectedVariant(variantId);

 switch(serviceId)
 {
    case 1 :   switch(variantId)
    {
      case 1 :  {if(quantity>1)
      {
         quantity-=1;
      }
  
      else
      {
         
         setopen(true);
      }
      }
      break;
      case 3 :  {if(quantity>1)
       {
            quantity-=1;
       }
  
       else
       {
         
          setopen(true);
       }
       }
       break;
 } break;

   case 2: switch (variantId)
   {
    case 2 :  {if(quantity>1)
      {
          quantity-=1
      }

      else
      {
         
         setopen(true);
      }
      }
      break;
   } break;

   case 3: switch (variantId)
   {
    case 4 :  {if(count1>1)
      {
        setcount1(count1-1);
      }

      else
      {
        
         setopen(true);
      }
      }
      break;
   }break;

   case 4: switch(variantId)
   {
    case 5 :  {if(quantity>1)
      {   quantity-=1;
      }

      else
      {
        
         setopen(true);
      }
      }
      break;
      case 6 :  {if(quantity>1)
        {
           quantity-=1;
        }
 
        else
        {
          
           setopen(true);
        }
        }
        break;
   }break;
}
}


const add=(variantId, serviceId, quantity)=>
{

  setSelectedVariant(variantId);
 
  switch(serviceId)
  {
     case 1: switch(variantId)
     {
      case 1 :  {if(quantity>0)
        {
           quantity+=1;
        }
        }
        break;
        case 3 :  {if(quantity>0)
         {
            quantity+=1;
         }
     
         }
         break;
     }break;

     case 2: switch(variantId)
     {
      case 2 :  {if(quantity>0)
        {
           quantity+=1;
        }
  
        }
        break;
     }break;

     case 3: switch(variantId)
     {
      case 4 :  {if(quantity>0)
        {
           quantity+=1;
        }
        }
        break;
     }break;

     case 4: switch (variantId)
     {
      case 5 :  {if(quantity>0)
        {
          quantity+=1;
        }
 
        }
        break;
        case 6 :  {if(quantity>0)
          {
            quantity+=1;
          }
          }
          break;
     }break;
  }
}

const deleted=()=>
{
   setopen(true);
}

const cancel=()=>
{
   setopen(false);
}


const handle=(count)=>
{
    setcount1(count);
  setButtonClicked(true);
    console.log(count);
    forcedata();
}

const handlevariant=(variantdataid)=>
{
     setSelectedVariant(variantdataid);
  
     console.log(variantdataid);
}

const deleteditem=(cartId, variantId)=>
{
 
  


   if(access!==null)
   {
     
    
     var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
     myHeaders.append("Authorization", `Bearer ${access}` );   
     
     var raw = JSON.stringify({
      "cart_id":  cartId
     });
 
     var requestOptions = {
       method: 'DELETE',
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
         
          switch(variantId)
          {
             case 1: {localStorage.removeItem("totalPrice1");
            
                     setcount1(0)
            } break;
             case 3: {localStorage.removeItem("totalPrice3")
                    setcount2(0);
            };break;
             case 2: {localStorage.removeItem("totalPrice1")
             setcount1(0)
            };break;

             case 4: {localStorage.removeItem("totalPrice1")
                    setcount1(0);
            };break;
             case 5: {localStorage.removeItem("totalPrice1")
                   setcount1(0);
            };break;
             case 6: {localStorage.removeItem("totalPrice3")
                      setcount2(0);
            };break;

          }

           setopen(false);
           setButtonClicked(true);
        }

 
       })
       .catch(error => console.log('error', error)); 
   
  } 
 
}


useEffect(()=>
  {
     (async () => {
     
        if(buttonClicked===true || access!==null)
        {
      
          console.log(buttonClicked);
          
         
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
              const  Categorydata = checkout.data;
              setitem(Categorydata);
              console.log(Categorydata);
              const billing = checkout.billing_details;
              console.log(Categorydata[0].service_images[0].image_url)
              setvalue(billing);
              setButtonClicked(false)
           
           
            })
            .catch(error => console.log('error', error)); 
        }
        
     })();
  },[buttonClicked, access, countnumber1, increased, ignored])
  

  useEffect(() => {



 console.log(selectedVariant)  

    switch(selectedVariant)
   {
     case 1 : 
     
       { 
          
         const totalPrice = count1 * Price1;
         settotalprice1(totalPrice.toFixed(2));
         localStorage.setItem('totalPrice1', totalPrice.toFixed(2));
       }
     
     
     break;
     case 3 :   {
    
       const totalPrice = (count2+1) * Price3;
       settotalprice3(totalPrice.toFixed(2));
       localStorage.setItem('totalPrice3', totalPrice.toFixed(2));
     }
      break;

      case 2 : 
      {
       const totalPrice = count1 * Price2;
       settotalprice1(totalPrice.toFixed(2));
       localStorage.setItem('totalPrice1', totalPrice.toFixed(2));
      
     }
     
        break;

        case 4 :  {
         const totalPrice = count1 * Price4;
         settotalprice1(totalPrice.toFixed(2));
         localStorage.setItem('totalPrice1', totalPrice.toFixed(2));
       }
          break;

  
      case 5 :  {
       const totalPrice = count1 * Price5;
       settotalprice1(totalPrice.toFixed(2));
       localStorage.setItem('totalPrice1', totalPrice.toFixed(2));
     }
        break;
        case 6 :  {

         const totalPrice = (count2+1) * Price6;
         settotalprice3(totalPrice.toFixed(2));
         localStorage.setItem('totalPrice3', totalPrice.toFixed(2));
       }
          break;

     
}
},[count1, Price1,variantdata, selectedVariant,count2, Price3,Price2,Price4,Price5,Price6,data ]);


const coupon=()=>
{
   
    navigate("/applycoupons");
}

const schedule=()=>
{
   navigate("/schedule")
}


     return (
        <>

           <section className="section">
             <div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2}   columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center"  >
           

          <Grid item  xs={12} sm={isSmScreen? 12:8} md={8}>
       
          {item.map(cur=>
          {
               return (
                  <>
                
        <Item>

           <div className="checkoutflex">
           <div className="image_lazyload">
           <LazyLoadImage  src={cur.service_images[0].image_url} alt="category"  className="checkoutimage" />
           </div>
        
           <div>
          
             <div className="explore_name">{cur.service_name}</div>
          
             <div className="pricevariants">
                    <div className="expected_pricevariant"><CurrencyRupeeOutlinedIcon className="rupee" /><span className="currency">{cur.Sale_price}</span></div>
                    <div className="real_pricevariant"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{cur.variant_details.variant_price}</span></del></div>
                    <div className="discountvariant">{cur.variant_details.variant_percentage} %</div>

                    </div>
           
                    <div className="checkoutdetails">
              <table> 
              <tr>
              <td>
              <button onClick={()=>remove(cur.variant_id, cur.service_id, cur.quantity)}  className="removeIcon"><RemoveIcon/></button></td>
              {(()=>
            {
                    
                    switch(cur.variant_id)
                    {
                       case 1: 
                       {
                        return  <td> <div className="datacount">{count1}</div></td>
                       }

                       case 3:
                       {
                        return  <td> <div className="datacount">{count2}</div></td>
                       }

                       case 2: 
                       {
                        return  <td> <div className="datacount">{count1}</div></td>
                       }
                       case 4: 
                       {
                        return  <td> <div className="datacount">{count1}</div></td>
                       }

                       case 5: 
                       {
                        return  <td> <div className="datacount">{count1}</div></td>
                       }

                       case 6:
                       {
                        return  <td> <div className="datacount">{count2}</div></td>
                       }
                    }
            })()} 
              <td><button onClick={()=>add(cur.variant_id, cur.service_id, cur.quantity)} className="removeIcon"><AddIcon/></button></td>
              </tr>
              </table>
               <div className="deleteoutlined" onClick={deleted}><DeleteOutlineOutlinedIcon/></div>
              </div>
              
                <Modal open={open}>
               
                   <div className="confirmdelete">
                      <div className="removeItem">Remove Item</div>
                      <div className="deleteservice">Are you sure you want to delete Service  item ?</div>
                      <div>
                        <div className="deleted_item">
                           <button className="cancelitem" onClick={cancel}>Cancel</button>
                           <button className="deleteitem" onClick={()=>deleteditem(cur.cart_id, cur.variant_id)}>Yes, Delete</button>
                        </div>
                      </div>

                   </div>


                </Modal>
                 
              </div> 
              </div>  
   
      </Item>
         
                  </>
               )
          })

         
          }   

          <Recommended handle={handle} handlevariant={handlevariant}/>

          </Grid>
           <Grid item xs={12} sm={isSmScreen? 12:4} md={4}>

           {couponValue==="" ?

           <Item>
           <div className="coupon" onClick={coupon}>
           <div className="offerIcon">
           <div className="localoffericon"><LocalOfferIcon/></div>
            <div className="apply">Apply coupon</div>
            </div>
            
            <div className="keyboard"><KeyboardArrowRightIcon/></div>
            </div>
           </Item>
              :
           <Item>
           <div className="coupon" onClick={coupon}>
           <div className="offerIcons">
           <div className="localoffericon"><LocalOfferIcon/></div>
           <div>
           <div className="apply">1 Coupon Applied</div>
           {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                                  const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))))/couponValue).toFixed(2) ;

                                 

                               return <div className="total_discount"> You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            else 
                             {

                              const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  ;
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(parseFloat(parseFloat(totalcharge3-Price3)/18)+  parseFloat(parseFloat(totalcharge3-Price3)/10) + parseFloat(parseFloat(totalcharge3-Price3)))))/couponValue).toFixed(2);

                              return <div className="total_discount" >You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                                 const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                            else 
                             {

                              const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  ;
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)/18)+  parseFloat(parseFloat(totalcharge3-Price6)/10) + parseFloat(parseFloat(totalcharge3-Price6))))/couponValue).toFixed(2);

                              return <div className="total_discount" >You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                               return <div className="total_discount">You saved additional <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         } 
                         }

                 })()}
        
           </div>
         
            </div>
            
            <div className="keyboard"><KeyboardArrowRightIcon/></div>
            </div>
           </Item>
           }
          

            <Item className="item_booking">
            {item.length>1?  <div className="bill_details">Bill Details ({item.length} services) </div> :  <div className="bill_details">Bill Details ({item.length} service) </div>}
            
              <div className="totalcost">
               <div >Service Bill</div>
       
               {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge1}</div>
                             }

                            else 
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1)}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge3-Price3}</div>
                             }

                            
                            else 
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1)}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge1}</div>
                             }

                           
                            else 
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1)}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalcharge3-Price6}</div>
                             }

                            
                            else 
                             {
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1)}</div>
                              }  

                             
                         } 
                         }

                 })()}

              </div>

              <div className="totalcost">
               <div>Service charges</div>
             
               {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                                  const totalservicecharge1= (totalcharge1/10).toFixed(2);

                                

                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                            else 
                             {

                              const totalservicecharge2=((parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              const totalservicecharge1= ((totalcharge3-Price3)/10).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                                 const totalservicecharge2=((parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (totalcharge1/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (totalcharge1/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                              const totalservicecharge1= (totalcharge1/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                           
                            else 
                             {

                                const totalservicecharge2=((parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                               const totalservicecharge1=((totalcharge3-Price6)/10).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              const totalservicecharge2=((parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupee"/>{totalservicecharge2}</div>
                              }  

                             
                         } 
                         }

                 })()}
                
                  
              </div>

              <div className="totalcost">
               <div>Discount</div>
               {couponValue==="" ?  
              <div className="total_discount"><RemoveIcon className="remove_discount"/><CurrencyRupeeOutlinedIcon className="currency_rupee"/> 0</div>
                :
                  <div>
                   {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                                  const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))))/couponValue).toFixed(2) ;

                                 

                               return <div className="total_discount"> <RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            else 
                             {

                              const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  ;
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(parseFloat(parseFloat(totalcharge3-Price3)/18)+  parseFloat(parseFloat(totalcharge3-Price3)/10) + parseFloat(parseFloat(totalcharge3-Price3)))))/couponValue).toFixed(2);

                              return <div className="total_discount" ><RemoveIcon className="remove_discount"/><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                                 const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                            else 
                             {

                              const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  ;
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                              const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)/18)+  parseFloat(parseFloat(totalcharge3-Price6)/10) + parseFloat(parseFloat(totalcharge3-Price6))))/couponValue).toFixed(2);

                              return <div className="total_discount" ><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                               return <div className="total_discount"><RemoveIcon className="remove_discount"/> <CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         } 
                         }

                 })()}
                 </div>
               }
              </div>

              <div className="totalcost">
               <div>Gst</div>
                      
               {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                                  const totalservicecharge1= (totalcharge1/18).toFixed(2);

                                 

                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            else 
                             {

                              const totalservicecharge2=((parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              const totalservicecharge1= ((totalcharge3-Price3)/18).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              
                                 const totalservicecharge2=((parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (totalcharge1/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (totalcharge1/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                              const totalservicecharge1= (totalcharge1/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                            else 
                             {
                               
                                const totalservicecharge2=((parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                               const totalservicecharge1=((totalcharge3-Price6)/18).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              const totalservicecharge2=((parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         } 
                         }

                 })()}
              </div>

           <div className="border"></div>              
    
              <div className="totalcost">
               <div className="total_money">Total</div>
               {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {

                                     const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))))/couponValue).toFixed(2) ;
                                  const totalservicecharge= ((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)) - totalservicecharge1).toFixed(2) ;

                                 

                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                            else 
                             {
                                     const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  
                                     const totalservicecharge= ( ((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1)))) - totalservicecharge2).toFixed(2)  ;
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                                 const totalservicecharge1= (parseFloat((parseFloat(parseFloat(parseFloat(totalcharge3-Price3)/18)+  parseFloat(parseFloat(totalcharge3-Price3)/10) + parseFloat(parseFloat(totalcharge3-Price3)))))/couponValue).toFixed(2);
                                const totalservicecharge= (((parseFloat(parseFloat(totalcharge3-Price3)/18)+  parseFloat(parseFloat(totalcharge3-Price3)/10) + parseFloat(parseFloat(totalcharge3-Price3))))-totalservicecharge1).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                            
                            else 
                             {
                                  const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                                 const totalservicecharge=(((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))))-totalservicecharge2).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {
                                 const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                                const totalservicecharge= ((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))-totalservicecharge1).toFixed(2) ;
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                               const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                                const totalservicecharge= ((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))-totalservicecharge1).toFixed(2) ;
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                                   const totalservicecharge1= (parseFloat((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)))/couponValue).toFixed(2) ;
                                const totalservicecharge= ((parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10))-totalservicecharge1).toFixed(2) ;
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                           
                            else 
                             {
                               
                              const totalservicecharge2= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2)  ;
                              const totalservicecharge= (((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))-totalservicecharge2).toFixed(2)  ;
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {

                                     const totalservicecharge1= (parseFloat((parseFloat(parseFloat(totalcharge3-Price6)/18)+  parseFloat(parseFloat(totalcharge3-Price6)/10) + parseFloat(parseFloat(totalcharge3-Price6))))/couponValue).toFixed(2);
                              const totalservicecharge= (((parseFloat(parseFloat(totalcharge3-Price6)/18)+  parseFloat(parseFloat(totalcharge3-Price6)/10) + parseFloat(parseFloat(totalcharge3-Price6))))-totalservicecharge1).toFixed(2);

                              return <div className="totalprices" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                             }

                            
                            else 
                             {
                                 const totalservicecharge2=(parseFloat((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))/couponValue).toFixed(2);
                              const totalservicecharge=(((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))))-totalservicecharge2).toFixed(2);
                               return <div className="totalprices"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge}</div>
                              }  

                             
                         } 
                         }

                 })()}
             
              </div>

            </Item>
            <Item>
             
               <div className="booking_button">
               <div>
            <div className="totatcostmoney">
               <div className="total_pay">Total Pay</div>
               {(()=>
                 {
                     switch(selectedVariant)
                     {
                         case 1 : {
                             if(count1!=="" && count2===0)
                             {
                                  const totalservicecharge1= (parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)).toFixed(2) ;

                                 

                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            else 
                             {

                              const totalservicecharge2= ((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1)))).toFixed(2)  ;
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 3 : {
                           if(count1===0 && count2!=="")
                             {
                              const totalservicecharge1= ((parseFloat(parseFloat(totalcharge3-Price3)/18)+  parseFloat(parseFloat(totalcharge3-Price3)/10) + parseFloat(parseFloat(totalcharge3-Price3)))).toFixed(2);

                              return <div className="total_price2" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                                 const totalservicecharge2=((parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price3)+parseFloat(totalcharge1)))).toFixed(2);
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 2 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)).toFixed(2) ;
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                         }

                         case 4 : {
                          if(count1!=="" && count2===0)
                             {

                              const totalservicecharge1= (parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)).toFixed(2) ;
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                         }

                         case 5 : {
                          if(count1!=="" && count2===0)
                             {
                              const totalservicecharge1= (parseFloat(totalcharge1/18) +parseFloat(totalcharge1) + parseFloat(totalcharge1/10)).toFixed(2) ;
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                           
                            else 
                             {

                              const totalservicecharge2= ((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10) +  (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1)))).toFixed(2)  ;
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         }

                         case 6 : {
                          if(count1==="" && count2!==0)
                             {
                              const totalservicecharge1= ((parseFloat(parseFloat(totalcharge3-Price6)/18)+  parseFloat(parseFloat(totalcharge3-Price6)/10) + parseFloat(parseFloat(totalcharge3-Price6)))).toFixed(2);

                              return <div className="total_price2" ><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge1}</div>
                             }

                            
                            else 
                             {
                              const totalservicecharge2=((parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/18) + (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1))/10)+ (parseFloat(parseFloat(totalcharge3-Price6)+parseFloat(totalcharge1)))).toFixed(2);
                               return <div className="total_price2"><CurrencyRupeeOutlinedIcon className="currency_rupees"/>{totalservicecharge2}</div>
                              }  

                             
                         } 
                         }

                 })()}
             
                <div> 
           
                <div></div>
                </div>
                 </div>
              </div>

                 
                 <div><button className="booking_now" onClick={schedule}>Book Now</button></div>

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

export default CheckoutCart;

/* 
    


*/