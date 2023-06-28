import React,{useState} from 'react'
import CheckoutCart from './CheckoutCart'
import Recommended from './Recommended'
import Footer from '../Footer/Footer'
import Bottomnavigation from '../Home/BottomNavigation'
import Header from '../Header/header';
import { useSelector } from 'react-redux'
import SearchFilter from '../Header/SearchFilter'

const Checkoutdetails = () => {




  const item=useSelector(state=>state.search);

  const [searchResult, setsearchResults] = useState(item);
  const [show, setShow]=useState(false);

 

  const handleCloseShow=()=>setShow(false);
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

  const Message=()=>
  {
    
  }

  return (
    <>


       <div className="contain">
              <Header Filter={Filter}  updateLocation={updateLocation} Message={Message} />
           
            <div className="content">
            <div className="search_valueshow"> {show &&  <SearchFilter searchResult={searchResult}  handleCloseShow={handleCloseShow}    />} </div> 
           
           
             
              <CheckoutCart/>
              <Bottomnavigation/>
              <Footer/>
             </div>
             </div>

    </>
  )
}

export default Checkoutdetails;



/*     





*/