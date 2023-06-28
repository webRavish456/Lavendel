import React, {useState,useRef, useEffect} from "react";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import SearchFilter from "../Header/SearchFilter";
import CheckoutPage from "./CheckoutPage";
import Viewsimilar from "./Viewsimilar";
import { useLocation } from 'react-router-dom';
import Ratings from "./Rating";
import { useSelector } from "react-redux";
import Bottomnavigation from "../Home/BottomNavigation";
import Additional from "./Additional";




const Checkout=()=>
{


    const item=useSelector(state=>state.search);

    const [searchResult, setsearchResults] = useState(item);
    const [show, setShow]=useState(false);
    const scrollContainerRef = useRef(null);

    const handleCloseShow=()=>setShow(false);

    const location = useLocation();

    const [showFirst, setShowFirst] = useState(true);
    const [showThird, setShowThird] = useState(false);
 
   
    const  datas  = useSelector(state=>state.servicevalue);
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
  
      const handleScroll = () => {
        const scrollHeight = scrollContainer.scrollHeight;
        const scrollTop = scrollContainer.scrollTop;
        const clientHeight = scrollContainer.clientHeight;
        const displayPoint = scrollHeight - (2 * clientHeight);
  
        if (scrollTop >= displayPoint && !showThird) {
          setShowFirst(true);
          setShowThird(true);
        }
      };
  
      scrollContainer.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }, [showThird]);
       
      
  


 
  
  const Filter = (e)=>
  {
            const length = e.target.value.length; 
            if(length!==0)
            {
               setShow(true);
               setsearchResults(item.filter(items=>items.service_name.toLowerCase().includes(e.target.value.toLowerCase())));
            }
            else{
                setShow(false);
            }

  }

  const  updateLocation=()=>
  {
     
  } 

 

     return (
        <>



        <div className="contain">
              <Header Filter={Filter}  updateLocation={updateLocation}  />
           
            <div className="content">
            <div className="search_valueshow"> {show &&  <SearchFilter searchResult={searchResult}  handleCloseShow={handleCloseShow}    />} </div> 
            <div ref={scrollContainerRef} style={{ overflowY: 'scroll', height: '800px' }}>
           
            {showFirst && (
        <div id="component1">
        <CheckoutPage data={datas} />
             <Additional data={datas}/>
             <Viewsimilar  data={datas}  />
        </div>
      )}
      {showThird && (
        <div id="component3">
          
        <Ratings/>
              <Bottomnavigation/>
              <Footer/>
        </div>
      )}   
        
    </div>

          

             </div>
             </div>
          

        </>
     ) 

}

export default Checkout;

/*  <Rating/>

 <CheckoutPageskeleton/> 

*/