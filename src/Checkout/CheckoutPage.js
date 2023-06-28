import React, {useState, useEffect} from "react";
import { Box, Grid } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {connect} from "react-redux";
import { addToCart, checkoutDetails } from "../Redux/action";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CheckoutPageskeleton from "./CheckoutPageskeleton";
import { useDispatch } from "react-redux";
import Checkoutdetails from "../Cart/Checkoutdetails";
import { useSelector } from "react-redux";
import { countnumber1 } from "../Redux/action";
import { countnumber2 } from "../Redux/action";
import { variantdataId } from "../Redux/action";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  
}));

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor:'#57339F',
    padding:'12px 22px',
    textTransform:'none',
    fontSize:'16px',
    whiteSpace: 'nowrap',
    fontWeight:600,
    fontFamily:'var(--fontfamily)',
    '&:hover': {
      backgroundColor: '#57339F', // Background color on hover
    },

  },
 
}));

const CheckoutPage=({data})=>
{

    const Baseurl = process.env.REACT_APP_BASE_URL;

    const navigate=useNavigate();
    
    const [item, setItem] = useState();
    const [image, setImage]=useState()
    const [rating, setRating] = useState() 

 
    const [variantdata, setvariantdata] =useState(1);

    const [showaddtocart, setShowaddtocart] = useState(true);

    const access= JSON.parse(localStorage.getItem("access_token"));

    const [selectedVariant, setSelectedVariant] = useState(1);

      const [variant, setVariant]= useState([selectedVariant]);
  
   const Price3= JSON.parse(localStorage.getItem("Price_3"));
   const Price1=JSON.parse(localStorage.getItem("Price_1"));
   const Price2= JSON.parse(localStorage.getItem("Price_2"));
   const Price4=JSON.parse(localStorage.getItem("Price_4"));
   const Price5= JSON.parse(localStorage.getItem("Price_5"));
   const Price6=JSON.parse(localStorage.getItem("Price_6"));

   const servicename = JSON.parse(localStorage.getItem('service'));
   const locationname = JSON.parse(localStorage.getItem('location'));

  const [totalprice3, settotalprice3] = useState(0);
  const [totalprice1, settotalprice1] = useState(0);

   const [count1, setcount1] = useState(0);
   const [count2, setcount2] = useState(0);
  

   const [isOpen, setisOpen] = useState(false);

  const [loading, setloading] = useState(true);

   const [images, setImages] = useState([])

  
  const classes = useStyles();

   const dispatch=useDispatch();

  

    const handleClick = (variantId, variantSalePrice) => {
      setSelectedVariant(variantId);

      console.log(variantId)
      console.log(data)

      switch (data)
      {
         case 1: switch (variantId) {
          case 1:  {if(count1<1)
            {
                setShowaddtocart(true);
   
            }
             else 
             {
              setShowaddtocart(false);
             }
          
          }
            break;
  
            case 3: {if(count2<1)
            {
               setShowaddtocart(true);

            }
            else 
            {
             setShowaddtocart(false);
            }
          }
            break;
         

         }
         break;

         case 2: switch (variantId) {
          
  
            case 2: {if(count1<1)
            {
               setShowaddtocart(true);
              
            }
          
            else 
            {
             setShowaddtocart(false);
            }
                
          }
            break;

         }
         break;

         case 3: switch (variantId) {
          case 4:  {if(count1<1)
            {
                setShowaddtocart(true);
            
            }
            else 
            {
             setShowaddtocart(false);
            }
          }
            break;

         }
         break;
         case 4: switch (variantId) {
          case 5:  {if(count1<1)
            {
                setShowaddtocart(true);
              
            }
            else 
            {
             setShowaddtocart(false);
            }
          }
            break;
  
            case 6: {if(count2<1)
            {
               setShowaddtocart(true);
        
            }
          
            else 
            {
             setShowaddtocart(false);
            }}
            break;
           
           

         }
         break;

      }
     
      setvariantdata(variantId);
      dispatch(variantdataId(variantId));

       localStorage.setItem(`Price_${variantId}`, variantSalePrice);
    };
 

   const handleAddToCart=(variantId)=>
   {
  
   console.log(variantId)

        switch(variantId)
      {
          case 1:  {if(count1<1)
          {
            setcount1(count1+1);
            settotalprice1(JSON.parse(localStorage.getItem('Price_1')));
            setShowaddtocart(false);
          }}
          break;

          case 3: {if(count2<1)
          {
            setcount2(count2+1);
            settotalprice3(JSON.parse(localStorage.getItem('Price_3')));
            setShowaddtocart(false);
          }}
          break;

           case 2: {if(count1<1)
          {
            setcount1(count1+1);
            settotalprice1(JSON.parse(localStorage.getItem('Price_2')));
            setShowaddtocart(false);
          }}
          break;

           case 4: {if(count1<1)
          {
            setcount1(count1+1);
            settotalprice1(JSON.parse(localStorage.getItem('Price_4')));
            setShowaddtocart(false);
          }}
          break;

          case 5: {if(count1<1)
            {
              setcount1(count1+1);
              settotalprice1(JSON.parse(localStorage.getItem('Price_5')));
              setShowaddtocart(false);
            }}
            break;
  
             case 6: {if(count2<1)
            {
              setcount2(count2+1);
              settotalprice3(JSON.parse(localStorage.getItem('Price_6')));
              setShowaddtocart(false);
            }}
            break;


      }
   }


   const handle=()=>
   {
     setisOpen(false);
   }

 
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  useEffect(() => {
    let updatedItems = [...updatedCartItems];

    if (updatedItems.length > 0 && updatedItems[0].service_id !== data) {
      updatedItems = [];
    }
  
    switch (selectedVariant) {
      case 1: {
        if (count1 > 0) {
          const cartItem = updatedItems.find(item => item.variant_id === 1);
  
          if (cartItem) {
            cartItem.quantity = count1;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count1,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
      case 3: {
        if (count2 > 0) {
          const cartItem2 = updatedItems.find(item => item.variant_id === 3);
  
          if (cartItem2) {
            cartItem2.quantity = count2;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count2,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
      case 2: {
        if (count1 > 0) {
          const cartItem = updatedItems.find(item => item.variant_id === 2);
  
          if (cartItem) {
            cartItem.quantity = count1;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count1,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
      case 4: {
        if (count1 > 0) {
          const cartItem = updatedItems.find(item => item.variant_id === 4);
  
          if (cartItem) {
            cartItem.quantity = count1;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count1,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
      case 5: {
        if (count1 > 0) {
          const cartItem = updatedItems.find(item => item.variant_id === 5);
  
          if (cartItem) {
            cartItem.quantity = count1;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count1,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
      case 6: {
        if (count2 > 0) {
          const cartItem2 = updatedItems.find(item => item.variant_id === 6);
  
          if (cartItem2) {
            cartItem2.quantity = count2;
          } else {
            updatedItems.push({
              service_id: data,
              variant_id: selectedVariant,
              quantity: count2,
            });
          }
  
          console.log(updatedItems);
        }
        break;
      }
    
    }
  
    setUpdatedCartItems(updatedItems);
  }, [count1, count2, selectedVariant]);
  
    
   

   const handleGoToCart=()=>
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
             navigate("/viewcart");
             dispatch(countnumber1(count1));
             dispatch(countnumber2(count2));

             console.log(count1);
             console.log(count2);
          }

  
        })
        .catch(error => console.log('error', error)); 
    
   } 
  
  
       
   }

   const remove=(variantId)=>
   {

     switch(variantId)
     {
       case 1 :  {if(count1>1)
       {
         setcount1(count1-1);
       }

       else
       {
          setcount1(count1-1);
          setShowaddtocart(true)
       }
       }
       break;
       case 3 :  {if(count2>1)
        {
          setcount2(count2-1);
        }
 
        else
        {
           setcount2(count2-1);
           setShowaddtocart(true)
        }
        }
        break;
        case 2 :  {if(count1>1)
          {
            setcount1(count1-1);
          }
   
          else
          {
             setcount1(count1-1);
             setShowaddtocart(true)
          }
          }
          break;
          case 4 :  {if(count1>1)
            {
              setcount1(count1-1);
            }
     
            else
            {
               setcount1(count1-1);
               setShowaddtocart(true)
            }
            }
            break;

            case 5 :  {if(count1>1)
              {
                setcount1(count1-1);
              }
       
              else
              {
                 setcount1(count1-1);
                 setShowaddtocart(true)
              }
              }
              break;
              case 6 :  {if(count2>1)
                {
                  setcount2(count2-1);
                }
         
                else
                {
                   setcount2(count2-1);
                   setShowaddtocart(true)
                }
                }
                break;


     }
     
  
   }
   
   const add=(variantId)=>
   {


    switch(variantId)
    {
      case 1 :  {if(count1>0)
      {
        setcount1(count1+1);
      }
      }
      break;
      case 3 :  {if(count2>0)
       {
         setcount2(count2+1);
       }

       }
       break;
       case 2 :  {if(count1>0)
         {
           setcount1(count1+1);
         }
  
         }
         break;
         case 4 :  {if(count1>0)
           {
             setcount1(count1+1);
           }
           }
           break;

           case 5 :  {if(count1>0)
             {
               setcount1(count1+1);
             }
      
             }
             break;
             case 6 :  {if(count2>0)
               {
                 setcount2(count2+1);
               }
               }
               break;


    }   
   }

   useEffect(()=>
   {
       
    if(data!=="")
    {

      
      setloading(true);

 
       var requestOptions = {
         method: 'GET',
       
         redirect: 'follow'
       };
       
       fetch(`${Baseurl}/single-service/${data}/`, requestOptions)
         .then(response => response.text())
         .then(result => {
           const data=JSON.parse(result);
           const  Categorydata = data.service_details[0].service_name;
           setItem(Categorydata);
          
           const dataImage= data.service_gallery[0].image_url;
           setImage(dataImage);

           const dataImages=data.service_gallery;
           setImages(dataImages);

          const rating= data.rating;

          setRating(rating);

          const variant= data.variants;
          setSelectedVariant(variant[0].variant_id)

          console.log(variant[0].variant_id);
          setVariant(variant);
          
          setShowaddtocart(true);

          setcount1(0);
          setcount2(0);
          localStorage.removeItem("totalPrice1");
          localStorage.removeItem("totalPrice3")

          setloading(false);

         })
         .catch(error => console.log('error', error)); 
     
    }
   },[data])

 useEffect(()=>
 {
  

     const searchParams= new URLSearchParams(window.location.search);
     searchParams.set("city", locationname)
    
     if(servicename!=="")
     {
      searchParams.set("service", servicename);

      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    
     }
   

 },[servicename,locationname, image])


   const renderVariantData=()=>
   {
    if (selectedVariant !== null) {
      const variants = variant.find((v) => v.variant_id === selectedVariant);
      if (variants) {
        return (
          <>
              <div  className="checkout_star">
                <div className="checkout_starIcon"><AccountCircleOutlinedIcon/> </div>
                <div className="checkout_rating_rate">
                 <div className="checkout_rating_name">{variants.variant_staff}</div>
                </div>
                <div className="rating_name">Staff</div>
                  </div>
                  
                <div className="checkout_star">
                <div className="checkout_starIcon"><AccessTimeOutlinedIcon/> </div>
                <div className="checkout_rating_rate">
                 <div className="checkout_rating_name">{variants.variant_duration}</div>
                </div>
                <div className="rating_name">Duration</div>
                 </div>
               
          </>

        )
        }
   }    
   
  }


  const variantprice=()=>
  {
   if (selectedVariant !== null) {
     const variants = variant.find((v) => v.variant_id === selectedVariant);
 

     if (variants) {
        
            localStorage.setItem(`Price_${selectedVariant}`, variants.variant_sale_price);
           

       return (
         <>
                 <div className="pricevariant">
                    <div className="expected_pricevariant"><CurrencyRupeeOutlinedIcon className="rupee_data" /><span className="currency">{variants.variant_sale_price}</span></div>
                    <div className="real_pricevariant"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{variants.variant_price}</span></del></div>
                    <div className="discountvariant">{(variants.variant_percentage).toFixed(1)} %</div>

                    </div>
              
         </>

       )
       }
  }    
  
 }

 

 const Gallery=()=>
 {
 
           setisOpen(true); 
 }

   

 useEffect(() => {



  
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
 },[count1, Price1,selectedVariant,count2, Price3,Price2,Price4,Price5,Price6,data ]);


     return (
        <>

           <section className="section">

           {
              loading ? 
              <>
              <CheckoutPageskeleton/>
              </>

              :

             <div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
            <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center">
            <Grid item  xs={12} sm={12} md={12}>
            <Item>
           <div className="checkout_item">

           <Carousel  interval={3000} showThumbs={false} showStatus={false}  >
                    {images.map((cur,index)=>
                     {
                           return (
                            <>
                                <div > <LazyLoadImage src={cur.image_url} alt={index} className="checkout_image"   onClick={Gallery}     visibleByDefault={true} style={{ textAlign:"start"}} />  </div> 
                            </>
                           )
                     })         
                   }   
                   </Carousel>  
          
  
           <div className="checkout_rating">
           <div className="checkout_data">
           <h1 className="primary_title">{item}</h1>


             <div className="select_checkout">

           <div className="checkout_star">
           <div className="checkout_starIcon"><StarIcon/> </div>
           <div className="checkout_rating_rate">
           <div className="checkout_rating_name">{rating}</div>
           </div>
           <div className="rating_name">Rating</div>

           </div>
      
             

               {renderVariantData()}
              
               
               

            </div>

             <h2 className="secondary_title">Select your service</h2>
            <div className="select_bhk">
            {
              variant.map((cur)=>
              {
                return (
                  <>
                  <div className={selectedVariant === cur.variant_id?"bhk1":"bhk"} key={cur.variant_id} onClick={()=>handleClick(cur.variant_id,cur.variant_sale_price)}>{cur.variant_name}</div>
                  </>
                )
              
              })
            }
            </div>
           
             <div className="pricedetail">
               {variantprice()}
                     
                    </div>
              {showaddtocart ? 
               <Button className={classes.customButton} variant="contained" onClick={()=>handleAddToCart(selectedVariant)} >Add to Cart</Button> :  
              <div>
               <div className="total_money_service">
                <div className="title">Total Price:</div>
                <div>
                 {(()=>
                 {
                     switch(variantdata||selectedVariant)
                     {
                         case 1 : {
                             if((parseInt(count1)+parseInt(count2))<2)
                             {
                               return <div className="total_price1">{totalprice1}</div>

                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                               return <div className="total_price1">{totalprice1}</div>
                            }
                            else 
                             {
                               return <div className="total_price1">{parseFloat(totalprice3-Price3)+parseFloat(totalprice1)}</div>
                              }  

                             }
                         }

                         case 3 : {
                          if((parseInt(count1)+parseInt(count2))<2)
                             {
                              return <div className="total_price1" >{totalprice3-Price3}</div>
                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                              return <div className="total_price1">{totalprice3-Price3}</div>
                            }
                            else 
                             {
                               return <div className="total_price1">{parseFloat(totalprice3-Price3)+parseFloat(totalprice1)}</div>
                              }  

                             }
                         }

                         case 2 : {
                             if((parseInt(count1)+parseInt(count2))<2)
                             {
                               return <div className="total_price1">{totalprice1}</div>
                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                               return <div className="total_price1">{totalprice1}</div>
                            }
                            

                             }
                         }

                         case 4 : {
                             if((parseInt(count1)+parseInt(count2))<2)
                             {
                               return <div className="total_price1">{totalprice1}</div>
                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                               return <div className="total_price1">{totalprice1}</div>
                            }
                           

                             }
                         }

                         case 5 : {
                             if((parseInt(count1)+parseInt(count2))<2)
                             {
                               return <div className="total_price1">{totalprice1}</div>
                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                               return <div className="total_price1">{totalprice1}</div>
                            }
                            else 
                             {
                               return <div className="total_price1">{parseFloat(totalprice3-Price6)+parseFloat(totalprice1)}</div>
                              }  

                             }
                         }

                         case 6 : {
                             if((parseInt(count1)+parseInt(count2))<2)
                             {
                              return <div className="total_price1" >{totalprice3-Price6}</div>
                             }

                             else if((parseInt(count1)+parseInt(count2))>1)
                             {
                                if(count1>0 && count2<1)
                            {
                              return <div className="total_price1">{totalprice3-Price6}</div>
                            }
                            else 
                             {
                               return <div className="total_price1">{parseFloat(totalprice3-Price6)+parseFloat(totalprice1)}</div>
                              }  

                             }
                         } 
                         }

                 })()}
                 </div>
               </div>
              <div className="addtocheckout">
              <div>
              <table className="gocheckout"> 
              <tr>
              <td>
              <button onClick={()=>remove(variantdata)}  className="removeIcon"><RemoveIcon/></button></td>
            {(()=>
            {
                    
                    switch(selectedVariant)
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
              <td><button onClick={()=>add(variantdata)} className="removeIcon"><AddIcon/></button></td>
              </tr>
              </table>
                 </div>
              <div>
              <Button className= {classes.customButton} variant="contained" onClick={handleGoToCart} >Go to checkout</Button> 
              </div>
              </div>
              </div>}
              </div>

           

              <div className="shareIcon"><ShareOutlinedIcon/></div>
      </div>
                  
      </div>
      </Item>
           </Grid>

               
           <Modal open={isOpen}>
            <div className="gallery_image">
            <div className="right_image">
           
            <div className="closeicon_image" onClick={handle}><CloseIcon style={{transform:"scale(1.3)"}}/></div> 

           </div>

            <Carousel  interval={3000} showThumbs={false} showStatus={false} >
                    {images.map((cur,index)=>
                     {
                           return (
                            <>
                                <div> <img src={cur.image_url} alt={index} className="image_datas" style={{width:"50%"}}/>  </div> 
                            </>
                           )
                     })         
                   }   
                   </Carousel>  
                   </div> 
                   </Modal>
          
           </Grid>
           </Box>
           </div>
           
           </div>
           }
           </section>
        </>
     )
}

export default connect(null, { addToCart })(CheckoutPage);


/*            
     
 





*/