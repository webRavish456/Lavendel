import React, {useState, useEffect } from "react";
import Header from "../Header/header";
import Deals from "./Deals";

import Cleaning from "./Cleaning";
import Toppicks from "./Toppicks";
import Bottomnavigation from "./BottomNavigation";
import  SearchFilter from "../Header/SearchFilter.js"
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import  ExploreCategory from './ExploreCategory.js';

const Home=()=>
{


 

  const access= JSON.parse(localStorage.getItem("access_token"));
  const Baseurl=process.env.REACT_APP_BASE_URL;
  const storedId=JSON.parse(localStorage.getItem("CityId"))
  const storedname=JSON.parse(localStorage.getItem('location'))

  const [show, setShow]=useState(false);
  const handleCloseShow=()=>setShow(false);


  const [id, setid] =useState();

  
  const item=useSelector(state=>state.search);
  const [searchResult, setsearchResults] = useState(item);
  const [Update, setUpdate] =useState();
 

const handle=(valueid)=>
{
     setid(valueid);
     console.log(valueid);
}


const updateLocation=(locationdata)=>
{
   
    setUpdate(locationdata);
    console.log(locationdata);
}






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




const [value, setvalue] = useState([]);
const [dataLength, setDataLength] = useState(0);
const [loading, setloading]=useState(true);


useEffect(()=>
{
  (async () => {



    
    setloading(true);
    var requestOptions = {
     method: 'GET',
     redirect: 'follow'
};

    fetch(`${Baseurl}/service-by-category-without-token/1/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data=JSON.parse(result);
     const  Categorydata = data.categories;

     setvalue( Categorydata );
     setDataLength(Categorydata.length);
     setloading(false);

  })
    .catch(error => console.log('error', error));


  })();
},[])


const [loading1, setloading1] = useState(true);

const [dataLength1, setDataLength1] = useState(0);

const [value2, setvalue2]= useState([])

useEffect(()=>
{

  (async () => {

    if (Update!=="")
    {

  if(storedname!=="" && storedId!=="" )

{


    setloading1(true);
 
     var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    console.log(storedId);
    fetch(`${Baseurl}/home-screen/?location_id=${storedId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
        const  Categorydata = data.recommended;
        setvalue2(Categorydata);
        console.log(Categorydata);
        setloading1(false);

      })
      .catch(error => console.log('error', error)); 
  }
    }

    else
    {
      setloading2(true);
 
     
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${Baseurl}/home-screen/?location_id=0`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.top_picks;
          setvalue3(Categorydata);
          console.log(Categorydata);
          setloading2(false);
          
  
        })
        .catch(error => console.log('error', error)); 
    }

  })();
},[Update, storedId, storedname])



const [loading2, setloading2] = useState(true);
const [value3, setvalue3] = useState([])
const [datalength2 ,setDataLength2] = useState(0);



useEffect(()=>
{
  (async () => {

      if(Update!="" )
  {

    if(storedname!=="" && storedId!=="" )
  {

 
    setloading2(true);
 
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${Baseurl}/home-screen/?location_id=${storedId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
        const  Categorydata = data.top_picks;
        setvalue3(Categorydata);
        console.log(Categorydata);
        setloading2(false);
        

      })
      .catch(error => console.log('error', error)); 
  }  
  }

  else
  {

    setloading2(true);
 
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${Baseurl}/home-screen/?location_id=0`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
        const  Categorydata = data.top_picks;
        setvalue3(Categorydata);
        console.log(Categorydata);
        setloading2(false);
        

      })
      .catch(error => console.log('error', error)); 

  }
  })();
},[Update, storedname, storedId])



    return (
        <>
           
       
     
             <div className="contain">
                <Header Filter={Filter}   updateLocation={updateLocation} /> 
             <div className="content">
            <div className="search_valueshow">{show &&  <SearchFilter searchResult={searchResult}  handleCloseShow={handleCloseShow}   />}</div>


         
            <ExploreCategory value={value} loading={loading}   />
            <Cleaning value={value2} loading={loading1} handle={handle}/>
            
          
                <Toppicks value={value3} loading={loading2}/>
             <Bottomnavigation/>
              <Footer/>
   
           
             </div>
      
             </div>
        </>
    )
}
export default Home;
