import React, {useEffect } from "react";
import Auth from "./Authentication/Login";
import { Route, Routes, Navigate  } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import Home from "./Home/Home";
import Verifycode from "./Authentication/Verifycode";
import Verification from "./Authentication/Verification";
import Searchshow from "./Home/Searchshow";
import Checkout from "./Checkout/Checkout";
import Connect from "./Authentication/Connect";
import SearchSuggest from "./Header/searchsuggestion";
import Review from "./Checkout/Review";
import ProfileDetail from "./Header/ProfileDetail";
import Checkoutdetails from "./Cart/Checkoutdetails";
import Applycoupon from "./Cart/Applycoupon";
import Schedule from "./Cart/Schedule";


function App() {

 
  return (
    <>
    
             <Routes>
             <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/signIn" element={<Auth/>}/>
              <Route path="/verify" element={<Verification/>}/>
              <Route path="/verify-code" element={<Verifycode/>}/> 
              <Route path="/searchsuggestion" element={<SearchSuggest/>}/>     
              <Route  path="/home" element= {<Home/>}/>  
              <Route path="/connect" element={<SignUp/>}/>
              <Route path="/home/search" element = {<Searchshow/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/viewcart" element={<Checkoutdetails/>}/>
              <Route path="/welcome" element={<Connect/>}/>
              <Route path="/review" element={<Review/>}/>
              <Route path="/applycoupons" element={<Applycoupon/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/profile" element={<ProfileDetail/>}/>
             </Routes>
            
    </>
   
  );
}

export default App;


/*     
           
           
*/
