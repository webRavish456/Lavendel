import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFilter } from "../Redux/action";
import { filterData } from "../Redux/action";

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));




const SearchFilter=({searchResult, handle, handleCloseShow})=>
{

  const navigate=useNavigate();
  const Baseurl=process.env.REACT_APP_BASE_URL;
  const  CityID=JSON.parse(localStorage.getItem("CityId"));
  const access= JSON.parse(localStorage.getItem("access_token"));
  const dispatch=useDispatch();

  useEffect(()=>
  {
    (async () => {
  
   
  
  
  
       var requestOptions = {
        method: 'GET',

         redirect: 'follow'
    };
    
     fetch(`${Baseurl}/search/?location_id=${CityID}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
        const  Categorydata = data.services;
  
        dispatch(searchFilter(Categorydata));
    
      })
      .catch(error => console.log('error', error));
    
    
   
  })();
  },[]);

 


  const Showdata = (value,name)=>
  {
           const servicename = JSON.parse(localStorage.getItem('service'));
           const locationname = JSON.parse(localStorage.getItem('location'));

              const searchParams= new URLSearchParams(window.location.search);
              searchParams.set("city", locationname)
              if(servicename)
              {
                searchParams.set("service", servicename);
                navigate(`/checkout?${searchParams.toString()}`);

              }
            
                 const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
                 window.history.replaceState(null, '', newUrl);
                 localStorage.setItem('service', JSON.stringify(name));

    if (value)
    {
   
      
           handleCloseShow();
           
           if(window.location.pathname!=="checkout")
           {
             
                  const locationname = JSON.parse(localStorage.getItem('location'));

                  const servicename = JSON.parse(localStorage.getItem('service'));

    
                  const searchParams= new URLSearchParams(window.location.search);
                  searchParams.set("city", locationname)
                  searchParams.set("service", servicename)
                 

                 navigate(`/checkout?${'city'}=${locationname}&${'service'}=${servicename}`)
                
                   
                     dispatch(filterData(value))

                     const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
                     window.history.replaceState(null, '', newUrl);

                     localStorage.setItem('service', JSON.stringify(name));
           }
           else
           {
                handle(value);
                const servicename = JSON.parse(localStorage.getItem('service'));
                  
                const searchParams= new URLSearchParams(window.location.search);
                searchParams.set("service", servicename)
                const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
                 window.history.replaceState(null, '', newUrl);
                 localStorage.setItem('service', JSON.stringify(name));
              
           }
          
    }

    else
    {

      const searchParams= new URLSearchParams(window.location.search);
      searchParams.forEach((_, key) => searchParams.delete(key));   
      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState(null, '', newUrl);

    }

  
  } 


    return (
        <>
        
         <div className="search_show_item">
         <Item>
             {searchResult.map (cur=>
             {
                return (
                  <>
                  <div className="search_show" onClick={()=>Showdata(cur.service_id, cur.service_name)}>
                  <div className="explore_image_search"><LazyLoadImage src={cur.image_gallery[0].image_url} alt="category"  /></div>
                   <div className="explore_name_search">{cur.service_name}</div>
                   </div>
                  </>
                )
             })}
             </Item>
             </div>
            

        </>
    )

}

export default SearchFilter;

/*




*/




/*

  if(access!==null)

  {
  }
*/

/*            

   {filteredItems.map(cur=>
           {
                return (
                  <>
                        <div>{cur.service_name}</div>
                  </>
                )
           })}

 {filteredItems.map((items, index) => 
            {
               return (
                <>
                      <div key={index} className="search_suggestion">
                       
     

                      </div>
                </>
               )
            }
            )}




                       <div className="explore_name">{items.service_name}</div>
<div className="explore_image_recommend"><LazyLoadImage src={item.image_gallery[0].image_url} alt="category" loading="lazy" /></div>
*/