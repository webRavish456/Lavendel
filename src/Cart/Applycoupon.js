import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import Bottomnavigation from '../Home/BottomNavigation'
import Header from '../Header/header';
import { useSelector } from 'react-redux'
import SearchFilter from '../Header/SearchFilter'
import Applied from './Applied';

const Applycoupon = () => {


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
  
    const UpdateLocation=()=>
    {
       
    } 
  return (
   <>
         <div className="contain">
              <Header Filter={Filter} UpdateLocation={UpdateLocation} />
           
            <div className="content">
            <div className="search_valueshow"> {show &&  <SearchFilter searchResult={searchResult}  handleCloseShow={handleCloseShow}    />} </div> 
           
           
             
             <Applied/>
              <Bottomnavigation/>
              <Footer/>
             </div>
             </div>
   </>
  )
}

export default Applycoupon


