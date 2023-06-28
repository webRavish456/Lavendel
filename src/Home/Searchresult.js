import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ClearIcon from '@mui/icons-material/Clear';
import {createTheme,  useMediaQuery } from '@mui/material';
import Searchskeleton from "./Searchskeleton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/action";

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  paddingBottom: theme.spacing(1),
  textAlign: 'center',
  borderRadius:'12px'
}));
const Items = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
}));

const Searchresult=({value, value2, selectedfilter, loading})=>
{
    
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
      },
    },
  });



    
     const [selectedItems, setSelectedItems] = useState('');
     
    const [selectedData, setSelectedData] = useState();

   const navigate= useNavigate();

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [selectedName, setSelectedName] = useState();

   const dispatch=useDispatch();



      const handleChange = (event) => {


        const  values = parseInt(event.target.value);
        setSelectedItems(values);
        setSelectedData(value.find(item => item.category_id === values)?.category_id);
        setSelectedName(value.find(item => item.category_id === values)?.category_name);
                   
    };
     
    const handleLabelClick = (values) => {
      setSelectedItems(values);
      setSelectedData(value.find(item => item.category_id === values)?.category_id);
       setSelectedName(value.find(item => item.category_id === values)?.category_name);
    };
    
    
   const handleChanged=()=>
   {
      setSelectedData(null);
      setSelectedItems(null);
      setSelectedName(null);
   }

 const Description=(value, name)=>
 {
  
  const locationname = JSON.parse(localStorage.getItem('location'));

  const servicename = JSON.parse(localStorage.getItem('service'));
  dispatch(filterData(value));
  navigate(`/checkout?${'city'}=${locationname}&${'service'}=${servicename}`);

   const searchParams= new URLSearchParams(window.location.search);
   searchParams.set("service", servicename)
   const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, '', newUrl);

  

   console.log(value)

     localStorage.setItem('service', JSON.stringify(name));
     
 }
   

  useEffect(()=>
  {
     if(selectedItems)
     {



        const searchParams= new URLSearchParams(window.location.search);
        searchParams.set("category", selectedName)
         const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);  
        selectedfilter(selectedItems);

     } 

     else 
     {
                  
        const searchParams= new URLSearchParams(window.location.search);

        const paramsToKeep = ["city"];

        searchParams.forEach((_, key) => {
          if (!paramsToKeep.includes(key)) {
            searchParams.delete(key);
          }
        });
        const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);  
        selectedfilter(1);

     }



  },[selectedItems])

  

    return (
        <> 
          
         
        <section className="section">

          <div>


          
            {loading ?
            <>
                <Searchskeleton/>
            </>
            
             :

              <div className="explore_container">
              <Box sx={{width:"100%"}}>


          <Grid container rowSpacing={2} rowGap={3}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="space-between" columns={12}  >


          <Grid item xs='none' sm={isSmScreen ? 0 : 3} md={2.3} className="filter_search" >
 
           <Items>
           <div className="filter">
           <div className="filtering">Categories</div>
           
                  <RadioGroup     aria-label="dataOptions"    name="dataOptions"  value={selectedItems}  onChange={handleChange} >
               {
                 value.map(cur =>
                 {
                    return (
                      <>
                        
                        <div className="check_filter">
                        <div>
                 
                       <FormControlLabel   key={cur.category_id} value={cur.category_id.toString()} control={<Radio />} label=<Typography style={{fontSize:"12px"}}> {cur.category_name}</Typography> />
                    
          </div>

                          </div>
                      </>
                    )
                 } )
               }

                   </RadioGroup>

               </div>
           </Items>

          </Grid> 
          
      

          <Grid item xs={12} sm={11.3} md="none" className="check_bunchfilter">
             
           {
                 value.map(cur =>
                 {
                    return (
                      <>

                        <div className="check_bunch">
                          <div className="select_bunchcagtegory"   onClick={()=>handleLabelClick(cur.category_id)} >{cur.category_name}</div>
                          </div>
                         
                      </>
                    )
                 } )
               }

          


          </Grid>

      
         <Grid  item  xs={12} md={9.7} sm={isSmScreen ? 12 : 9} columnSpacing= {2}  >

           <Grid container display="grid" >

                <Grid container>
                <div className="totallength">There are total {value2.length} cleaning in India </div>  
                </Grid>

         <Grid container  item  >

       

         {selectedItems &&
              <div className="item-value">
                <div >{selectedName}</div>
                <div><ClearIcon className="clearicon"   onClick={handleChanged}/></div>
              </div>
             
           }  

         </Grid>

        <Grid container item columnSpacing={{xs:2,sm:1,md:2}} >

            { value2.map((cur)=>
            {
               return (
                <>
                   
                  <Grid item  xs={6} sm={6} md={4} >
                       <div style={{marginBottom:"20px"}} onClick={()=>Description(cur.service_id, cur.service_name)} >
                       <Item  style={{cursor:"pointer"}}>
                       <div className="explore_image_recommend"><LazyLoadImage  src={cur.image_gallery[0].image_url} alt="category"   /></div>
                         
                         <div>
                       <div className="category_wise">
                     <div className="explore_name">{cur.service_name}</div>

    
                     <div className="starIcon">
                     <div className="pickrating"><StarIcon className="rupee" /><span className="currency1">{cur.rating}</span></div>
                    <div className="pickrating"><AccountCircleOutlinedIcon className="rupee" /><span className="currency1">{cur.variant[0].variant_staff} staff</span></div>
                    </div>
                    <div className="pickrating accessrating"><AccessTimeOutlinedIcon className="rupee" /> <span className="currency1">{cur.variant[0].variant_duration}</span></div>
                    </div>
                   

                       <div className="priceIcon">
                    <div className="discount">{(cur.variant[0].variant_percentage).toFixed(1)} %</div>
                    <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{cur.variant[0].variant_price}</span></del></div>
                    <div className="expected_price"><CurrencyRupeeOutlinedIcon className="rupee" /><span className="currency">{cur.variant[0].variant_sale_price}</span></div>
                    </div>
                    </div>

                       </Item>
                       </div>
                       </Grid>
                </>
               )
              
            })

            }

         
         
              
           
            </Grid>
            </Grid>
            </Grid>  
            </Grid>           
             </Box>
             </div>
            }
            </div>
            </section>
           
         

        </>
    )
}

export default Searchresult;


/* 




 
       <div><Checkbox checked={selectedItems.includes(cur.category_id)}  onChange={() => handleChange(cur.category_id)}  inputProps={{ 'aria-label': 'controlled' }}/></div>
     const handleChange = (itemId) => {
     setValue((prevItems) =>
      prevItems.map((item) =>
        (item.category_id === itemId) ? { ...item, selected: !item.selected } : item
      )
      );

    if (selectedItems.includes(itemId)) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => (selectedItem !== itemId))
        
      );
        setSelectedItems("")

    } else {

      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);

       selectedfilter(itemId);
     
      console.log(itemId);
    }



  };


    {selectedItems.length > 0 && (
        <div className="selecteditem">
            {selectedItems.map((item) => (
              <>
                 
                 <div className="item-value">
              <div key={item}>{selectedItems}</div>
              <div><ClearIcon className="clearicon"   onClick={() => handleChange(item)}/></div>
            
              </div>
              </>
            ))}
            
            
        </div>
      )}




className="search_category"  jisme margin bottom hai 

className="search_data"  item ke niche wala class

       <Grid container xs={9} sm={6} md={6} columns={9} rowSpacing={0}  columnSpacing={{xs:2, sm:1, md:4}} display="flex" justifyContent="space-between" >
    </Grid>

  <div className="search_result">
                       <div className="search_booking">
                       <div className="search_name">{cur.service_name}</div>
                       <button className="book_button">Book Now</button>
                       </div>
                   
                     <div className="search_showdata">

                       <div className="searchpriceIcon ">
                      
                       <div className="searchexpected_price"><CurrencyRupeeOutlinedIcon className="rupee" /><span className="currency">{cur.variant[0].variant_sale_price}</span></div>
                    <div className="searchreal_price"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{cur.variant[0].variant_price}</span></del></div>
                    <div className="searchdiscount">{(cur.variant[0].variant_percentage).toFixed(1)} %</div>
                    </div>
                    
                    <div className="searchpriceIcon  search_rating" style={{paddingTop:"10px"}}>
                <div className="searchpickrating"><StarIcon className="rupees" /><span className="searchcurrency">{cur.rating}</span></div>
                <div className="searchpickrating"><AccountCircleOutlinedIcon className="rupees" /><span className="searchcurrency">{cur.variant[0].variant_staff} staff</span></div>
                <div className="searchpickrating"><AccessTimeOutlinedIcon className="rupees" /> <span className="searchcurrency">{cur.variant[0].variant_duration}</span></div>
                </div> 

                

                </div>
                </div>

import 'react-lazy-load-image-component/src/effects/blur.css';
import Searchskeleton from "./Searchskeleton";
     <Searchskeleton/>            
   */             