import React, { useState } from "react";
import { CategoryExplore } from "./CategoryExplore";
import { Box, Grid } from "@mui/material";
import Container from '@mui/material/Container';

const Category=()=>
{

    const [item, setitem] = useState(CategoryExplore)
    return (
        <>
          <Container maxWidth="xl">
            <div className="explore_title">
              <div className="explore">Explore by category</div>
              <Box sx={{width:"100%"}}>
              <Grid container spacing={2} columnGap={{sm:2,md:0,xm:0}} display="flex" justifyContent="center">
             {item.map((cur)=>
             {
                return(
                    <>
                      
                       <Grid item  xs={11.3} sm={5.6} md={2.9}>
                       <div className="explore_design">
                        <div className="explore_image"><img className="image_category" src={cur.image} alt="category"/></div>
                        <div className="explore_name">{cur.name}</div>
                        </div>
                        </Grid>
                      
                    </>
                )
             })}
             </Grid>             
             </Box>
            </div>
            </Container>
        </>
    )
}
export default Category;