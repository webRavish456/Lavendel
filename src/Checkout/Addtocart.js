import React,{useEffect,useState} from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Addtocart = ({showaddtocart,setShowaddtocart, data}) => {

    const [variantdata, setvariantdata] =useState(1);


    const access= JSON.parse(localStorage.getItem("access_token"));

    const [selectedVariant, setSelectedVariant] = useState(1);

    const Baseurl = process.env.REACT_APP_BASE_URL;

    const [cart, setCart] = useState([]);

    const [totalprice3, settotalprice3] = useState(0);
    const [totalprice1, settotalprice1] = useState(0);

    const Price3= JSON.parse(localStorage.getItem("Price_3"));
    const Price1=JSON.parse(localStorage.getItem("Price_1"));
    const Price2= JSON.parse(localStorage.getItem("Price_2"));
    const Price4=JSON.parse(localStorage.getItem("Price_4"));
    const Price5= JSON.parse(localStorage.getItem("Price_5"));
    const Price6=JSON.parse(localStorage.getItem("Price_6"));
  
     const [count1, setcount1] = useState(0);
     const [count2, setcount2] = useState(0);


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
 
 
  
 
    useEffect(() => {
     const updatedCartItems = [];
 
     switch(variantdata||selectedVariant)
     {
       case 1: {
          if(count1>0)
          {
           var cartItem = {
             service_id: data,
             variant_id: variantdata || selectedVariant,
             quantity: count1,
             
           };
          updatedCartItems.push(cartItem);
     
           console.log(cartItem);
          }
       }
       break;
 
       case 3: {
         if(count2>0)
         {
          var cartItem2 = {
            service_id: data,
            variant_id: variantdata || selectedVariant,
            quantity: count2,
            
          };
         updatedCartItems.push(cartItem2);
    
          console.log(cartItem);
         }
      }
      break;
 
      case 2: {
       if(count1>0)
       {
        var cartItem = {
          service_id: data,
          variant_id: variantdata || selectedVariant,
          quantity: count1,
          
        };
       updatedCartItems.push(cartItem);
  
        console.log(cartItem);
       }
    }
    break;
    case 4: {
     if(count1>0)
     {
      var cartItem = {
        service_id: data,
        variant_id: variantdata || selectedVariant,
        quantity: count1,
        
      };
     updatedCartItems.push(cartItem);
 
      console.log(cartItem);
     }
  }
  break;
  case 5: {
          if(count1>0)
          {
           var cartItem = {
             service_id: data,
             variant_id: variantdata || selectedVariant,
             quantity: count1,
             
           };
          updatedCartItems.push(cartItem);
     
           console.log(cartItem);
          }
       }
       break;
 
       case 6: {
         if(count2>0)
         {
          var cartItem2 = {
            service_id: data,
            variant_id: variantdata || selectedVariant,
            quantity: count2,
            
          };
         updatedCartItems.push(cartItem2);
    
          console.log(cartItem2);
         }
      }
      break;
 
     }
   
   }, [count1, count2, variantdata,selectedVariant]);
   
     
    
 
    const handleGoToCart=()=>
    {
     if(access!==null)
     {
        console.log(cart);
 
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       myHeaders.append("Authorization", `Bearer ${access}` );   
       
       var raw = JSON.stringify({
         "cart": cart
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
           console.log("jk")
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

{showaddtocart ? 
               <button className="primary_button connect_button addCart_button  " onClick={()=>handleAddToCart(selectedVariant)} >Add To Cart </button> :  
              <div>
               <div className="total_money_service addCart_button">
                <div className="total_price">Total Price:</div>
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
              <table className="gocheckout addCart_button"> 
              <tr>
              <td>
              <button onClick={()=>remove(variantdata)}  className="removeIcon"><RemoveIcon/></button></td>
            {(()=>
            {
                    
                    switch(variantdata||selectedVariant)
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
              <button className="primary_button connect_button addCart_button" onClick={handleGoToCart} >Go to checkout </button> 
              </div>
              </div>}
   </>
  )
}

export default Addtocart
