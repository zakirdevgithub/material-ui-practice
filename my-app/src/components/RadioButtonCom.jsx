import React,{useState} from "react";
import {Radio, RadioGroup, FormControl, FormLabel,
     FormControlLabel, Container,Typography, Paper, Box, FormHelperText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle=makeStyles((theme)=>({
    root:{
        width:"100vw",
        height:"100vh",
        paddingTop:theme.spacing(4),
        backgroundColor: theme.palette.grey[200]
    }
}))

const RadioButtonCom=()=>{
        const classes=useStyle();
        const [gender,setGender]=useState("Male")

        const handleChange=(e)=>{
            setGender(e.target.value)
        }
    return(
        <Container className={classes.root} >
        <Paper component={Box} width="30%" mx="auto" p={3} textAlign="center">
        <Typography variant="h3">
        {gender}
        </Typography>
        <Box component="form">
        <FormControl>
          <FormLabel>Choose Your Gender</FormLabel>
          <RadioGroup value={gender} row onChange={handleChange}>
            <FormControlLabel label="Male" control={<Radio color="primary"/>} value="Male" />
            <FormControlLabel label="Female" control={<Radio color="primary"/>} value="Female" />
            <FormControlLabel label="Other" control={<Radio color="primary"/>} value="Other" />
          </RadioGroup>
        </FormControl>
        </Box>
        </Paper>
        </Container>
    )

}

export default RadioButtonCom;