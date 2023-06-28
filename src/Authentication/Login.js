import React, { useEffect, useState } from "react";
import Icons from "../assests/icons.png";
import Lavendel from "../assests/lavendel.png";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { mobileNumber } from "../Redux/action";

const Auth=({handle, handleVerify,  handleOpen, handleSuccessfullyClose, handlelogin})=>
{
  
  const Baseurl=process.env.REACT_APP_BASE_URL;

  const [user, setuser]=useState('');
  const [phone, setphone]= useState("primary_login")
  const [invalid, setInvalid] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const navigate= useNavigate();
  const dispatch=useDispatch();

  const verify=useSelector(state=>state.phone);

 
  useEffect(() => {
    if (timerStarted) {
 
      const timer2 = setTimeout(() => {
         handleSuccessfullyClose();
       
      }, 1500);
      return () => clearTimeout(timer2);
    }
  }, [timerStarted]);
    

  const handleinput=(e)=>
  {
      setuser(e.target.value.replace(/[^0-9]/g, ''));
     
  }

  const submit=()=>
  {


   if(user.length!==10)
   {
     setInvalid(true);
     setphone("secondary_login");
   }
   else{
     setInvalid(false);
     setphone("primary_login")

 
     if(user)
     {
      
         var formdata = new FormData();
         formdata.append("mobile_number", user);
        
             var requestOptions = {
             method: 'POST',
             body: formdata,
             redirect: 'follow',
               
        };
        
           fetch(`${Baseurl}/otp-sends/`, requestOptions)
          .then(response => response.text())
          .then(result=>{
              const data= JSON.parse(result);
              console.log(data.otp);
              if(data.status==='success')
              { 
                 
                 handle();
                handleOpen();

                 dispatch(mobileNumber(user));
                
                 
                 if (!timerStarted) {
 
                  const timer2 = setTimeout(() => {
                     handleVerify();
                     handleSuccessfullyClose();

                   
                  }, 2000);
                  return () => clearTimeout(timer2);
                }

              }
              else{
                  navigate("/connect");
               
              } 
              
           })
            .catch(error => console.log('error', error));
        
        
            
       }
   
       
  }
             
  }

  const handleClick=()=>
  {
      submit();

  }

    return (
      <>
      
        <div className="logincontainer">
          <div className="left">
          <div className="head_title" style={{color:"var(--white)"}}>Connect</div>
                     
                     <div className="secondary_title" style={{color:"lightgray", paddingTop:"10px"}}>
                     Login to your account and explore
                     </div>
                     <div className="login_photo">
            <img className="login_image" src={Icons} alt="logo"/>
            </div>
          </div>
          <div className="right">
           
          <div className="closeicon" onClick={handle}><CloseIcon style={{transform:"scale(1.3)"}}/></div> 

        <div>
         <div className="lavendel_image"><img src={Lavendel} alt="logo"/></div>

        <div className={phone}>Phone Number</div>
                          
           <div style={{padding:"12px 0px"}}>
           
                         <TextField  className="login_data" id="standard-required"   type="text"   sx={{    '& input::placeholder': {      color: 'black', fontSize:'14px', fontWeight:'500', fontFamily:'Montserrat', opacity:"1"     },   }}  inputProps={{ inputMode: 'numeric',     pattern: '[0-9]*',      onChange: handleinput,     }} placeholder="Phone Number" variant="standard" value={user} name="user"  minLength={10} maxLength={10}   />
                         <div>{invalid  && <label className="login_exist">Enter a valid mobile number.</label>}</div>
                         </div>
                         
                         <div>
                      <button className="primary_button login_button" onClick={handleClick}>Send OTP</button>
                      
                      </div>

          </div>
          </div>
         </div>

      </>
    )
}

export default Auth;

/*  
      
        handleVerify();
               
             localStorage.removeItem("access_token")   



if(data.status==='success')
          {
               navigate("/home")
          }
          else{
              navigate("/connect");
              localStorage.removeItem("access_token")
          }


          */

          