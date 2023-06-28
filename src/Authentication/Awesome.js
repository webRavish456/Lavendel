import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

const Awesome=()=>
{
    return (
        <>
            <div className="container section_container awesome">
            <Box sx={{width:"100%"}}>
            <Grid container rowSpacing={2} display="flex" justifyContent="center" alignItems='center'  >
         <Grid item xs={11} sm={6} md={4}  >
               <div className="checkcircle">
                <CheckCircleIcon className="checkicon"/>
                <div className="head_title">Awesome, you're sign up</div>
                <div className="awesome_title" >Welcome to lavendel app. Here your service on demad need end .</div>
                </div>
                </Grid>
                </Grid>
                </Box>
            </div>
        </>
    )
}

export default Awesome;