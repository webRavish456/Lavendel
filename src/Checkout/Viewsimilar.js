
import React, {useState, useEffect} from "react";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/action";
import Viewskeleton from "./Viewsimilarskeleton";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    
   ...theme.typography.body2,
   paddingBottom: theme.spacing(1),
   textAlign: 'center',
   borderRadius:'12px',

  }));

  const useStyles = makeStyles((theme) => ({
   customButton: {
     backgroundColor:'#57339F',
     padding:'0px 8px',
     textTransform:'none',
     fontSize:'16px',
     whiteSpace: 'nowrap',
     right:'16px',
     margin:"6px 0px 4px"
   },
 }));

const Viewsimilar=({data})=>
{

    const [item, setItem] = useState([]);

    const access= JSON.parse(localStorage.getItem("access_token"));

    const Baseurl=process.env.REACT_APP_BASE_URL;

    const [loading,setloading] =useState(true);
    
   const classes = useStyles();


    const dispatch=useDispatch();

    useEffect(()=>
    {

      if(data!=="")
      {
       
    
     setloading(true)
   
   
    
         var requestOptions = {
          method: 'GET',
       
           redirect: 'follow'
      };
      
       fetch(`${Baseurl}/similar-services/${data}/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.similar_services;
    
          setItem( Categorydata );
          setloading(false)
         
        })
        .catch(error => console.log('error', error));
      
      
   }
    },[data])

    const services=(value, name)=>
    {
   
      

   
         const servicename = JSON.parse(localStorage.getItem('service'));
         dispatch(filterData(value));


                  
         const searchParams= new URLSearchParams(window.location.search);
         searchParams.set("service", servicename)
         const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
          window.history.replaceState(null, '', newUrl);
          localStorage.setItem('service', JSON.stringify(name));
       
         
       
          console.log(value)
       
            localStorage.setItem('service', JSON.stringify(name));
      
     
    }


     return (
        <>

            <section className="section">
             <div>
             <div className="view_all">
          <div className="head_title explore">View Similar Services</div>
          <NavLink to="/home" className="nav-bar">View-All</NavLink>
          </div>

          {loading ?
          
          <>
              <Viewskeleton/>
          </>
          
          :
          
       
          <Box sx={{width:"100%"}}   >
          <Grid container rowSpacing={2} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="start" >
          
          {item.map(cur=>
             {
                return(
                    <>
                 
                       <Grid item  xs={6}  sm={4} md={3}  >
                     
                       <div className="categoriesdata">
                       <Item  style={{cursor:"pointer"}} onClick={()=>services(cur.service_id,cur.service_name)}>
                       <div className="explore_image_similar">
                       <LazyLoadImage  src={cur.service_gallery[0].image_url} alt="category" loading="lazy"   />  
                       </div>
                       <div className="category_wise">
                       <div className="explore_name">{cur.service_name}</div>
                       <div className="priceIconSimilar">
                       <div className="expected_price"><CurrencyRupeeOutlinedIcon className="rupee" /><span className="currency">{cur.service_variant[0].variant_sale_price}</span></div>
        
                       <div className="real_price"><del className="price"><CurrencyRupeeOutlinedIcon  className="rupee"/> <span className="currency">{cur.service_variant[0].variant_price}</span></del></div>
                       <div className="discount">{(cur.service_variant[0].variant_percentage).toFixed(1)} %</div>
                      </div>
                      </div>
                      <div className="add_data"><Button  className={classes.customButton} variant="contained" >Add</Button></div>
                      </Item>
                      </div>
                       </Grid>
             </>
                )
             })
          }

          </Grid>
          </Box>
          }
          </div>
          </section>
        </>
     )
}

export default Viewsimilar;

/* 
       

*/