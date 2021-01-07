import React,{useState} from "react";
import {Switch, FormControl, FormLabel,
     FormControlLabel,Container, Box, 
     Paper,Typography} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    root:{
        width:"100vw",
        height: "100vh",
        paddingTop:theme.spacing(4),
        backgroundColor:theme.palette.grey[200]
    }
}))

const SwitchCom=()=>{
    const classes=useStyles();
    const [autoplay, setAutoplay]=useState(false)
    
    return(
        <Container className={classes.root}>
        <Paper component={Box} width="30%" mx="auto" p={3}>
            <Box>
            <Typography>{autoplay? "Autoplay":"No Autoplay"}</Typography>
            </Box>
            <FormControl>
            <FormControlLabel label="Autoplay" control={<Switch onChange={(e)=>setAutoplay(e.target.checked)}/>}/>
            </FormControl>
        </Paper>
        </Container>
    )
    
}
export default SwitchCom;