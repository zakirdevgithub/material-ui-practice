import React from 'react'
import {Box, Typography, Hidden, Divider, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    root:{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.grey[300]
    }
}))

const HiddenCom = () => {
    const classes=useStyles();
    return (
        <div>
            <Box py="20%" mx="auto" className={classes.root}>

            <Hidden only="md">
            <Paper component={Box} p={3}>
            <Typography align="center" variant="h3">শুধু মাত্র মিডিয়াম(md) ডিভাইসে আমি হারিয়ে যাব</Typography>
            </Paper>
            
            </Hidden>
            <Divider/>

            <Hidden smUp implementation="css">
            <Paper component={Box} p={3}>
            <Typography align="center" variant="h3">স্মল(small) ডিভাইস হইতে বড় ডিভাইসে আমি হারিয়ে যাব</Typography>
            </Paper>
            </Hidden>

            <Divider/>

            <Hidden mdDown implementation="css">
            <Paper component={Box} p={3}>
            <Typography align="center" variant="h3">মিডিয়াম(md) ডিভাইস হইতে ছোট ডিভাইস  হইলে আমি হারিয়ে যাব</Typography>
            </Paper>
            </Hidden>
            
            </Box>
        </div>
    )
}

export default HiddenCom;
