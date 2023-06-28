import React, {useState, useEffect} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import Searchservice from "../Home/Searchservice";
import SearchFilter from "./SearchFilter";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from "react-redux";


const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
const SearchSuggest=()=>
{
   const navigate=useNavigate()

    const Arrowback=()=>
    {
       navigate("/home")
    }

    const [item, setItem] = useState([]);
    const [searchValue, setsearchValue] = useState();
       
    const itemdata=useSelector(state=>state.search);

    const [searchResult, setsearchResults] = useState(itemdata);
    const [show, setShow]=useState(false);
    const access= JSON.parse(localStorage.getItem("access_token"));
  
    const Baseurl=process.env.REACT_APP_BASE_URL;
    const  CityID=JSON.parse(localStorage.getItem("CityId"));
    const handleCloseShow=()=>setShow(false);

  useEffect(()=>
  {
    
       var requestOptions = {
        method: 'GET',
         redirect: 'follow'

    };
    
     fetch(`${Baseurl}/search/location_id=${CityID}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
        const  Categorydata = data.services;
  
        setItem( Categorydata );
        console.log(item);
        console.log(result);
  
  
  
      })
      .catch(error => console.log('error', error));
    
    
  
  },[])

   const Search=()=>
  {
     const locationname = JSON.parse(localStorage.getItem('location'));
    const locationId= JSON.parse(localStorage.getItem('locationId'));
    console.log(locationname);
    navigate(`/home/search?${locationname}=${locationId}`);
    
  } 
  

 
  const Filter = (e)=>
  {
     
      const length = e.target.value.length; 
  
      if(length!==0)
      {
         setShow(true);
         setsearchResults(itemdata.filter(items=>items.service_name.toLowerCase().includes(e.target.value.toLowerCase())));
         
      }
      else{
          setShow(false);
      }         
  }

  const handleInput=(e)=>
  {
       
      const value=e.target.value;
      setsearchValue(value);
      Filter(e);
    
  }



    return (
        <>
         <Item>
        <div className="input_search_item">
         <div className='input_search_value_data'>
         <div onClick={Arrowback} ><ArrowBackIosIcon style={{color:"var(--stroke)"}}/></div>
         <input  className='input_search_data' type="search" value={searchValue}  onChange={handleInput} placeholder='Search ' />
         <div className='searchingdata' onClick={Search}><SearchOutlinedIcon/></div>
        </div>
        </div>
        </Item>

        <div className="search_valueshow">{show &&  <SearchFilter searchResult={searchResult} handleCloseShow={handleCloseShow}  />}</div>

           <Searchservice/>
        </>
    )
}

export default SearchSuggest;