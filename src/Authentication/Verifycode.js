import React, {useState, useEffect} from "react";
import OtpInput from "otp-input-react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Edit from "../assests/iconpencil.png"
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Verifycode=()=>
{
    const [OTP, setOTP] = useState("");
    const [error, setError]=useState(false);


    
    const Baseurl = process.env.REACT_APP_BASE_URL;
  
    const [show, setShow] = useState(true);

    const verifyMobile= useSelector(state=>state.phone)

    const [time, setTime] = useState(30);
    const navigate =useNavigate();

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            setShow(false);
            clearInterval(intervalId); 
            return  0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000); 

      return () => clearInterval(intervalId);
    }, []); 
  
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60;

   const Editable=()=>
   {
        navigate("/connect");
   }


    const Home=()=>
    {

      
      var formdata = new FormData();
      formdata.append("mobile_number", verifyMobile);
      formdata.append("otp_code", OTP);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`${Baseurl}/auth-connect/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          
          const data= JSON.parse(result);
          console.log(data);
          if(data.status==="success")
          {
              setError(false)
              localStorage.setItem("access_token", JSON.stringify(data.access_token));
              navigate("/home")         
          }

          else
          {
             setError(true)
             setOTP("");
          }
          
          })
        .catch(error => console.log('error', error)); 

       
        
    

    }

    const Resend=()=>
    {
      
        setOTP("");
        setTime(30) ;
        setShow(true);
        const intervalId = setInterval(() => {
          setTime(prevTime => {
            if (prevTime === 0) {
              setShow(false);
              clearInterval(intervalId); 
              return  0;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000); 

        var formdata = new FormData();
        formdata.append("mobile_number", verifyMobile);
       
            var requestOptions = {
             method: 'POST',
             body: formdata,
            redirect: 'follow'
       };
       
             fetch(`${Baseurl}/otp-sends/`, requestOptions)
             .then(response => response.text())
            .then(result=>{
             const data= JSON.parse(result);
             console.log(data.otp);
             
       })
           .catch(error => console.log('error', error));
      
   

     

    }


    const Back=()=>
    {
       
        
           navigate("/connect");
    
    }

    return(
        <>
          

          <div className="container section_container">
               <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} display="flex" justifyContent="center">
          <Grid item xs={11} sm={6} md="none" >
         
          <div style={{position:"static" ,marginTop:"-22px"}}>
        <div style={{backgroundColor:'var(--background-color)'}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{color:"black"}}
          >
            <ArrowBackIcon  onClick={Back}/>
          </IconButton>
        
        </div>
      </div>
       
          <div>
          <div className="head_title">OTP</div>
                     
                     <div className="secondary_title">
                     We have sent an verification code to your mobile number
                     </div>

                     <div className="edit">
                     <span className="number">{verifyMobile}</span>
                     <span><img className="icon" src={Edit} alt="icon"  onClick={Editable}/></span>
                     </div>
                     </div>
                     <div className="otpread "><OtpInput  className="otpinput" value={OTP} onChange={setOTP} autoFocus OTPLength={5}  otpType="number" style={{backgroundColor:"#F8F9FB",border:"none"}} disabled={false} secure  /></div>
  
                        <div className="timer">
                       {error && <div className="already_otp">Enter a  valid OTP.</div>}
                       
                         
                       <div className="timer_restart">
                      {show &&  <div className="resend_otp">0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>}
                        <button className="resend_otpcode" onClick={Resend} disabled={seconds>0} >Resend OTP</button>
                        </div> 

                        </div>
                    
                      <div className="enterotp">
                        
                      <button className="primary_button submission" onClick={Home}>Submit</button>
                    
                      </div>
                     
              
                      
                      </Grid>
                       
                       

                  </Grid>
                  </Box>
                
                 
                 </div> 



        
        </>
    )
}

export default Verifycode;

/* 
          var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOjEsInVzZXJfdG9rZW4iOiJsdm5kbWh5Z2tnemZvaHhiZGZwbGx4cWhja2pzaGkiLCJsb2dpbl93aXRoIjoibW9iaWxlIiwiY3JlYXRlZF9vbiI6IjIwMjMtMDQtMjQgMTI6MTI6NTQuMTIwOTIyIiwiZXhwaXJpbmdfb24iOiIyMDIzLTA1LTE0IDEyOjEyOjU0LjEyMDk0NiJ9.LFp7KfCrKfLv8inKNRyNPujsfbin6nhouSXf6-s9OIk");
            

            
               
           */