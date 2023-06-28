import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme, useMediaQuery } from '@mui/material';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));
const Ratingskeleton=()=>
{

  const theme = createTheme({
    breakpoints: {
      values: {
        md: 0,
        sm: 768,
      },
    },
  });

  const arrayLength = 3;

  const length=2

  const items=Array.from({ length: length }, (_, index) => `Item ${index + 1}`);

  const item = Array.from({ length: arrayLength }, (_, index) => `Item ${index + 1}`);

    

   


    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  

   
   

   return (
    <>   
              
              
          <Box sx={{width:"100%"}}   >
          <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" alignItems="center" padding="10px 0px">
       
         <Grid item className="rating_review_datas" >
         <div >
           <div className="rating_average_value"><Skeleton width={"4vw"}/></div>
           <div className="star_value_data">
           <Skeleton width={"1vw"}  />  <Skeleton width={"1vw"} style={{marginLeft:"5px"}}/>  <Skeleton width={"1vw"} style={{marginLeft:"5px"}} />  <Skeleton width={"1vw"} style={{marginLeft:"5px"}}/>        <Skeleton width={"1vw"} style={{marginLeft:"5px"}} />  
           </div>
           </div>

         </Grid>


           <Grid item xs={5}  sm={isSmScreen ? 6 :'none'} md="none" className="reveiwing_data">

           <div className="rating_review_data">
           <div className="rating_average_value"><Skeleton width={"4vw"} /></div>
           <div className="star_value_data">
           <Skeleton width={"1vw"}  />  <Skeleton width={"1vw"} style={{marginLeft:"5px"}}/>  <Skeleton width={"1vw"} style={{marginLeft:"5px"}} />  <Skeleton width={"1vw"} style={{marginLeft:"5px"}}/>        <Skeleton width={"1vw"} style={{marginLeft:"5px"}} /> 
           </div>
           </div>

           </Grid>
          

          <Grid item  xs={7}  sm={isSmScreen ? 6 : 6} md={6}>

        <div className="show_rating"> 
         <div className="starrating"><Skeleton width={"2vw"}/>
          <div> <Skeleton width={"2vw"} className="starvalue"/></div>
        </div>
        <Skeleton width={"30vw"} />
     <div className="show_rated"><Skeleton width={"2vw"} /></div> 
        </div> 

        <div className="show_rating"> 
         <div className="starrating"><Skeleton width={"2vw"}/>
          <div> <Skeleton width={"2vw"} className="starvalue"/></div>
        </div>
        <Skeleton width={"30vw"} />
        <div className="show_rated"><Skeleton width={"2vw"}/></div> 
        </div> 

        <div className="show_rating"> 
         <div className="starrating"><Skeleton width={"2vw"}/>
          <div> <Skeleton width={"2vw"} className="starvalue"/></div>
        </div>
        <Skeleton width={"30vw"} />
      <div className="show_rated"><Skeleton width={"2vw"}/></div> 
        </div> 

        <div className="show_rating"> 
         <div className="starrating"><Skeleton width={"2vw"}/>
          <div> <Skeleton width={"2vw"} className="starvalue"/></div>
        </div>
        <Skeleton width={"30vw"} />
      <div className="show_rated"><Skeleton width={"2vw"}/></div> 
        </div> 

        <div className="show_rating"> 
         <div className="starrating"><Skeleton width={"2vw"}/>
          <div> <Skeleton width={"2vw"} className="starvalue"/></div>
        </div>
        <Skeleton width={"30vw"} />
        <div className="show_rated"><Skeleton width={"2vw"}  /></div> 
        </div> 
          </Grid>
    
          </Grid>
        </Box>
         
          <Box sx={{width:"100%"}}>
         
          <div className="customer-said"><Skeleton width={"18vw"}/></div>
          <Grid container>

          <Grid item xs={12} sm={12} md={12} >
        
         <div className="review_data">

          {item.map(cur=>
          {
              return (
                <>

                 
                    <div className="overall_review">
                    
                    <div className="overall_caption">
                    <div><Skeleton width={"10vw"}/></div>
                    <div style={{display:"flex"}}>
                    <div><Skeleton width={"1vw"}/></div>
                    <Skeleton width={"1vw"}  className="starvalues"/>
                 </div>
                    
                    </div>
                    <div className="review_message"><Skeleton width={"20vw"}/></div>
                    <div style={{display:"flex"}}>
                    <div><Skeleton width={"7vw"}/></div>
                    <div style={{paddingLeft:"5px"}}><Skeleton width={"7vw"}/></div>
                    <div  style={{paddingLeft:"5px"}}><Skeleton width={"7vw"}/></div>
                    </div>
                   
                  <div  className="image_data">
                     {items.map(image=>
                     {
                          return (
                            <>
                                 <div>
                                 <Skeleton width="15vw"/>
                                </div>
                            </>
                          )
                     })}
                     </div>
                    </div>
                </>
              )

          })}

                 
          </div>
          </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
 
                 <div className="all-reviews"> <Skeleton width={"10vw"}/></div>

              </Grid>


              </Grid>
              </Box>

         

               <Box>
           
                 <Grid container rowSpacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                  <Item className="add_button">
                 <div className=" login_button"><Skeleton height={"5vh"}/></div>
                 </Item>
                  </Grid>
                  </Grid>

               </Box>

         

    </>
   )

}

export default Ratingskeleton;

