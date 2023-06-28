import React, {useState, useEffect} from "react";
import { Box, Grid} from "@mui/material";
import Container from '@mui/material/Container';
import { Categoriesitem } from "./Categories";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { HandymanOutlined } from "@mui/icons-material";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Exploreskeleton from "./Exploreskeleton";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));


const ExploreCategory=({value, loading})=>
{



  const navigate= useNavigate();

  function handleCategory(values)
  {
    if(window.location.pathname!=="home/search")
    {
      
      navigate('/home/search', { state: { values } });
   }
  }


    return(
        <>

           <section className="section">
            <div>
         
              <div className="head_title explore">Explore by category</div>


              {loading ? 

                <>

             <Exploreskeleton/> 
        </>


                  :
              <div className="explore_container">
              <Container maxWidth={"100%"}>
     
  
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={4} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center"  >
           

             {value.map((cur)=>
             {
                return(
                    <>
                 
                    <Grid item  xs={3} sm={1.5}  md={1.5} >
                       

                       <div className="categoriesdata" onClick={()=>handleCategory(cur.category_id)}>
                       <div style={{cursor:"pointer"}}>
                        
                         <div >

                         <div ><img  src={cur.category_image_light} alt="category"/></div>
                         <div className="explore_namecategory" >{cur.category_name}</div>
                         </div>
                         </div>
                         </div>
                       
                        </Grid> 

                          
                    </>
                )
             })}

             </Grid>             
             </Box>
             </Container>
             </div>
              }
            </div>
            </section>
        </>
    )
};

export default ExploreCategory;

/* 

  line no. 60   className="category_image_light"
          +1       className="explore_namecategory"

         58        className="explore_categorydata"








                 
   const [item, setItem] = useState([]);
    const access= JSON.parse(localStorage.getItem("access_token"));
 
    useEffect(()=>
    {
      
      if(access!==null)
      {  
    
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );
    
         var requestOptions = {
          method: 'GET',
          headers: myHeaders,
           redirect: 'follow'
      };
      
       fetch("https://prod-lavandel.azurewebsites.net/api/service-by-category-without-token/1/", requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.categories;
    
          setItem( Categorydata);
         

        })
        .catch(error => console.log('error', error));
      
      }

      else
      {
        var requestOptions = {
          method: 'GET',
        
           redirect: 'follow'
      };
      
       fetch("https://prod-lavandel.azurewebsites.net/api/service-by-category-without-token/1/", requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.categories;
    
          setItem( Categorydata );
      
    
        })
        .catch(error => console.log('error', error));
      }
    
    },[])


*/