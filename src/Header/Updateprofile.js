
import React from "react";



const Updateprofile=()=>
{
    return (
        <>
        <div className="updateprofile">
     
          <div>
           <div className="change_profile">Change Profile Photo</div>
           <div><hr style={{color:"var(--stroke)", opacity:"0.5", width:"44vw"}}></hr></div>

           <div className="upload_photo">Upload Photo</div>
           <div><hr style={{color:"var(--stroke)", opacity:"0.5",  width:"44vw"}}></hr></div>

           <div className="remove_photo">Remove Current Photo</div>
           <div><hr style={{color:"var(--stroke)", opacity:"0.5",  width:"44vw"}}></hr></div>

           <div className="cancel">Cancel</div>

         </div>
            

        </div>
     
     
             
             </>
       
    )
}
export default Updateprofile;
/*  <div style={{position:"static" ,marginTop:"10px"}}>
            
        
             </div>
     
             <div className="head_title">OTP</div>
                          
                          <div className="secondary_title">
                          We have sent an verification code to your mobile number
                          </div>
     
              
      
     
                 <div className="number_login">
                <span className="number">{verifyMobile}</span>
                          <span><img className="verify_icon" src={Edit} alt="icon"  onClick={Editable}/></span>
                    
                          </div>
                          <div className="verifyread "><OtpInput  className="verifyinput" value={OTP} onChange={setOTP} autoFocus OTPLength={5}  otpType="number" style={{backgroundColor:"#fff",border:"none"}} disabled={false} secure  /></div>
       
                             <div className="timer">
                            {error && <div className="verifyalready_otp">Enter a  valid OTP.</div>}
                            
                              
                            <div className="verify_restart">
                           {show &&  <div className="verify_otp">0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>}
                             <button className="verify_otpcode" onClick={Resend} disabled={seconds>0} >Resend OTP</button>
                             </div> 
     
                             </div>
                         
                           <div className="verifyotp">
                             
                           <button className="primary_button login_submit" onClick={Home}>Submit</button>
                         
                           </div>
                           */