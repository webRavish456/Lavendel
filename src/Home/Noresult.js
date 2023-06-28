import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius:'4px'
  }));

const Noresult=()=>
{
    return (
        <>
           
                  <Item className="noresult">
                     <div>No results</div>
                    <div></div>

                  </Item>
         
        </>
    )
}
export default Noresult;