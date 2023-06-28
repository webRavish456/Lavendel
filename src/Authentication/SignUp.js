import React, { useState } from "react";
import "../Custom.css";
import  SignGoogle from "../assests/signupgoogle.png";
import  SignFacebook from "../assests/signupfacebook.png";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import Successfully from "./Successfully";
import Modal from '@mui/material/Modal';

const SignUp=()=>
{
   
   const Baseurl = process.env.REACT_APP_BASE_URL;

    const [user, setuser]=useState('');
    const [phone, setphone]= useState("primary_section")
    const [invalid, setInvalid] = useState(false);
 
    const navigate=useNavigate();

    

   const handleinput=(e)=>
   {
       setuser(e.target.value.replace(/[^0-9]/g, ''));
      
   }

   const BackLogin=()=>
   {
       navigate("/");
   }

   const submit = ()=>
   {


    if(user.length!==10)
    {
      setInvalid(true);

      setphone("secondary_section");
    }
    else{
      setInvalid(false);
      setphone("primary_section")

  
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
                

         })
             .catch(error => console.log('error', error));
         

         
             navigate("/verify-code") 
        }
    
        
   }
      
      
           
   }

    return (
        <>
        
                
          <div className="section-content section_container">
            <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} display="flex" justifyContent="center" alignItems='center'  >
          <Grid item xs={11} sm={6} md={4} >
           <div>
          <div>
          <div>
        
          <div style={{position:"static" ,marginTop:"-22px"}}>
        <div style={{backgroundColor:'var(--background-color)'}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{color:"black"}}
          >
            <ArrowBackIcon  onClick={BackLogin}/>
          </IconButton>
        
        </div>
      </div>


          <div className="head_title">Connect</div>
                     
                     <div className="secondary_title">
                     Login to your account and explore
                     </div>
                     </div>
                     
                          <div className={phone}>Phone Number</div>
                          <div className="data">
                          <div className="valid">
                         <TextField className="input_data"  id="standard-required"   type="text"   sx={{    '& input::placeholder': {      color: 'black', fontSize:'14px', fontWeight:'500', fontFamily:'Montserrat', opacity:"1"     },   }}  inputProps={{ inputMode: 'numeric',     pattern: '[0-9]*',      onChange: handleinput,     }} placeholder="Phone Number" variant="standard" value={user} name="user"  minLength={10} maxLength={10}   />
                         {invalid  && <label className="already_exist">Enter a valid mobile number.</label>}
                         </div>
                      <button className="primary_button submission" onClick={submit}>Send OTP</button>
                  
                     </div>
                     
                      </div>
                      </div>
                      </Grid>
                      

                  </Grid>
          
                  </Box>
                
                 
                 </div> 

     
               
            
        </>
    )
}

export default SignUp;

/*     

      const [open, setOpen] =useState(false);

   

    const handleOpen=()=> setOpen(true);

    const handleClose=()=>setOpen(false);

      const timerStarted=true;

                  <div><Modal><Successfully/></Modal></div>

        if(data.status==='success')
               { 
                    setOpen(true); 
                    
                    if (!timerStarted) {
 
                      const timer2 = setTimeout(() => {
                          
                         setOpen(false);
                         localStorage.setItem("otp",  JSON.stringify(data.otp));
                       
                      }, 3000);
                      return () => clearTimeout(timer2);
                      
                    }
               }




       <NavLink to="/signIn" className="already_register" ><div><span className="primary_register">Already register? </span><span className="member">Sign in</span></div></NavLink> 
            
           <div className=" secondary_title  horizontal"><span><hr className="hr"></hr></span>Or sign up with <span><hr  className="hr1"></hr></span></div>

        <div className="online_authentication">
                      <Grid container  display="flex" justifyContent="space-between"  columnGap={{md:2 , sm:2}} rowSpacing={0.1}>

                      <Grid item xs={11} sm={5.4} md={5.4}  display="flex" justifyContent="start" >
                      <button className="signupgoogle">
                      <img src={SignGoogle} className="google_auth" alt="signupgoogle"/>
                     
                            </button> 
                     </Grid>
                     <Grid item xs={11} sm={5.4} md={5.4}  display="flex" justifyContent={{xs:"start", sm:"end", md:"end"}} >
                            <button className="signupfacebook">
                            <img src={SignFacebook} className="google_auth" alt="signupfacebook"/>
                          </button> 
                                </Grid> 

                             </Grid>  
                         </div>

               <div className="secondary_title verify">I have read and agree to  <span className="terms">Terms and Condition</span> and <span className="terms">Privacy Policy</span> of OnRoad</div>
                  

    */