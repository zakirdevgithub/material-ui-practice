import React from "react";
import {Container, Box, Typography, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {indigo,blue,deepPurple,deepOrange} from "@material-ui/core/colors";

const useStyle=makeStyles({
    color1:{
        color: blue[700]
    },
    color2:{
        color:deepPurple[800]
    },
    color3:{
        color:deepOrange["A400"]
    },
    flex:{
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "flex-start",
        alignItems:"flex-start"
    }
})

const ColorCom=()=>{
    const classes=useStyle();
    return(
        <React.Fragment>
        <Container maxWidth="sm" className={classes.flex}>
        <Paper component={Box} elevation={3} p={3} textAlign="center">
            <Typography variant="h4" style={{color:indigo[500]}}>
            Hello React
            </Typography>
            <Typography variant="body1" >
            React is a cool library of javascript.
            React is a cool library of javascript.
            React is a cool library of javascript.
            </Typography>
        </Paper>

        <Paper component={Box} elevation={3} p={3} textAlign="center" mt={2}>
            <Typography variant="h4" className={classes.color1}>
            Hello Django
            </Typography>
            <Typography variant="body1" >
            Django is a cool Framework of python.
            Django is a cool Framework of python.
            Django is a cool Framework of python.
            </Typography>
        </Paper>

        
        <Paper component={Box} elevation={3} p={3} textAlign="center" mt={2}>
            <Typography variant="h4" className={classes.color2}>
            Hello GraphQL
            </Typography>
            <Typography variant="body1" >
            Django is a cool Framework of python.
            Django is a cool Framework of python.
            Django is a cool Framework of python.
            </Typography>
        </Paper>

        <Paper component={Box} elevation={3} p={3} textAlign="center" mt={2}>
        <Typography variant="h4" className={classes.color3}>
        Hello Graphene
        </Typography>
        <Typography variant="body1" >
        Django is a cool Framework of python.
        Django is a cool Framework of python.
        Django is a cool Framework of python.
        </Typography>
    </Paper>
        </Container>
        </React.Fragment>
    )
}

export default ColorCom;