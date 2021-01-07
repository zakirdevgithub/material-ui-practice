import React from "react";
import {Box} from '@material-ui/core';
import {Typography} from '@material-ui/core';


const BoxCom=()=>{
    return(
        <React.Fragment>
            <Box width={500} boxShadow={3} p={3} gutterBottom={true}> {/*gutterBottom=margin-bottom, p=padding */}
            <Typography variant="h3" align="right">
            Box Component
            </Typography>
            <Typography variant="body1" align="justify">
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the 
            </Typography>
            </Box>
        
        </React.Fragment>
    )
}

export default BoxCom;