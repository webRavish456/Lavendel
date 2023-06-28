import React, {useEffect, useState} from 'react';
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import Additonalskeleton from './Additionalskeleton';

const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
const Additional = ({data}) => {


    const [loading,setloading]=useState(true);
    const access= JSON.parse(localStorage.getItem("access_token"));
    const Baseurl = process.env.REACT_APP_BASE_URL;

    const [item,setItem]=useState([])

    useEffect(()=>
    {
        
     if(data!=="")
     {
       
       setloading(true);
 
        var myHeaders = new Headers();

        var requestOptions = {
          method: 'GET',
         
          redirect: 'follow'
        };
        
        fetch(`${Baseurl}/single-service/${data}/`, requestOptions)
          .then(response => response.text())
          .then(result => {
            const data=JSON.parse(result);
            const  Categorydata = data.service_details[0];
            setItem(Categorydata);
           
           console.log(Categorydata)
 
            setloading(false);
 
          })
          .catch(error => console.log('error', error)); 
      
     }
    },[data])

  return (
   <>
            <section className="section">

             {loading ?

             <>
                  <Additonalskeleton/>
             </>
            
               :
             <div>
              <div className="explore_container">
              <Box sx={{width:"100%"}}>
            <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center">
            <Grid item  xs={12} sm={12} md={12}>
            <Item >
            <div className='item_additional'>
               <span className='title'>What this service includes.</span>

               <div className='additional_information'>Addtional information</div>
               <div className='done_tick'>
                <div className='doneIcon'><DoneIcon/></div>
                <div className='additional_details'>{item.additional_details}</div>
              
               </div>
               <div className='service_note'>{item.service_note}</div>
               </div>
            </Item>
            </Grid>
            </Grid>
            </Box>
            </div>
            </div>
             }
            </section>
   </>
  )
}

export default Additional
