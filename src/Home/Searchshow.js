import React, {useState, useEffect} from "react";
import Header from "../Header/header";
import  SearchFilter from "../Header/SearchFilter.js"
import Footer from "../Footer/Footer";
import Searchresult from "./Searchresult";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Bottomnavigation from "./BottomNavigation";

const Searchshow=()=>
{


   const item=useSelector(state=>state.search);

    const [searchResult, setsearchResults] = useState(item);
    const [show, setShow]=useState(false);

    const [loadingdata, setloadingdata]=useState(true);
    const [value, setValue] = useState([]);
    const access= JSON.parse(localStorage.getItem("access_token"));
  
   const  CityID=JSON.parse(localStorage.getItem("CityId"));
   

    const [CategoryId, setcategoryId] = useState(1);

     const location = useLocation();

    let filter  = location.state?.values || null;

    const [Update, setUpdate] =useState();
    const [filterdata, setFilterdata] = useState(filter);


   const handleCloseShow=()=>setShow(false);

    const Baseurl = process.env.REACT_APP_BASE_URL;

  
    const updateLocation=(locationdata)=>
    {
        setUpdate(locationdata);
        console.log(locationdata);
    }


const selectedfilter=(filterItem)=>
{
  
 if(filterdata>1)
 {
   setcategoryId(filterdata)
   console.log(filterdata);
   setFilterdata(0);
 }
 else
 {
   console.log(filterdata);
   setcategoryId(filterItem);
 }
 

}



  useEffect(()=>
  {
    
    (async () => {
    if((CategoryId>1 && CityID!=="" || Update!=="") )
  {

   
      setloadingdata(true);

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );   
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
        fetch(`${Baseurl}/service-by-category/${CategoryId}/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
         
          const Categoryservice = data.services;
          const  Categorydata = data.categories;

          const updatedItems =   Categorydata.map((item) => ({ ...item, selected: false }));
    
          setValue(updatedItems);

          if(CategoryId>1)
          {
             setValue2(Categoryservice);
             console.log(Categoryservice);
          }
             setloadingdata(false);

        })
        .catch(error => console.log('error', error)); 
    
  }

    })();

  },[CategoryId, CityID, Update])


  const [value2, setValue2] = useState([]);

  useEffect(()=>
  {
      
    (async () => {



   if(CategoryId===1  && ((filterdata <1) || Update!==""))
   {
    
    console.log(CategoryId);

      setloadingdata(true);
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${Baseurl}/search/?location_id=${CityID}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.services;

          const  Categorydatas = data.category;
          
          const updatedItems =   Categorydatas.map((item) => ({ ...item, selected: false }));
    
          setValue(updatedItems);

          setValue2(Categorydata);
          console.log(Categorydata);
          setloadingdata(false);
  
        })
        .catch(error => console.log('error', error)); 
    
  
}
  })();
  },[CategoryId, Update])

  
  const Filter = (e)=>
  {
            const length = e.target.value.length; 
            console.log(length);
            if(length!==0)
            {
               setShow(true);
               setsearchResults(item.filter(items=>items.service_name.toLowerCase().includes(e.target.value.toLowerCase())));
            }
            else{
                setShow(false);
            }
  }
 

    return (
        <>
             <div className="contain">
                <Header Filter={Filter} updateLocation={updateLocation}/>
              <div className="content">
              <div className="search_valueshow"> {show &&  <SearchFilter searchResult={searchResult} handleCloseShow={handleCloseShow}  />}</div>
              <Searchresult value = {value} setValue={setValue} value2={value2}  selectedfilter = {selectedfilter} loading={loadingdata} />
              <Bottomnavigation/>
              <Footer/>
             </div>
             </div>
        </>
    )
}
export default Searchshow;

