import React, {useState, useEffect} from "react";
import { Box, Grid} from "@mui/material";
import Container from '@mui/material/Container';
import { Categoriesitem } from "./Categories";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));


const Searchservice=()=>
{

   const navigate=useNavigate();

    const [item, setItem] = useState([]);
    const access= JSON.parse(localStorage.getItem("access_token"));
 
    const Baseurl = process.env.REACT_APP_BASE_URL;

    useEffect(()=>
    {
      
     
    
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );
    
         var requestOptions = {
          method: 'GET',
          headers: myHeaders,
           redirect: 'follow'
      };
      
       fetch(`${Baseurl}/service-by-category/1/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.categories;
    
          setItem( Categorydata );
          console.log(item);
          console.log(result);
    
        })
        .catch(error => console.log('error', error));  
    
    },[])
  

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
         
              <div className="explore">Search by services</div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={2} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center"  >
           

             {item.map((cur)=>
             {
                return(
                    <>
                 
                     

                       <Grid item  xs={3} sm={1.5}  md={1.5} >
                       

                       <div className="categoriesdata">
                       <div style={{cursor:"pointer"}}>
                        
                         <div className="explore_categorydata"  onClick={()=>handleCategory(cur.category_id)}>

                         <div style={{marginTop:"20px"}}><img  src={cur.category_image_light} alt="category"/></div>
                         <div className="explore_namecategory" style={{display:"flex", justifyContent:"center"}}>{cur.category_name}</div>
                         </div>
                         </div>
                         </div>
                       
                        </Grid> 
                        

                      
                    </>
                )
             })}


           

             </Grid>             
             </Box>
             </div>
            </div>
            </section>

        </>
    )
}

export default Searchservice;