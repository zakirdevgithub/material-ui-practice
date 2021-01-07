import React from "react";
import {Container,Box, Paper,Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {indigo,blue,deepPurple,deepOrange} from "@material-ui/core/colors"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BathtubIcon from '@material-ui/icons/Bathtub';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles=makeStyles({
    icon1:{
        fontSize: 80,
        color: indigo[500]
    },
    icon2:{
        fontSize: 80,
        color: blue[500]
    },
    icon3:{
        fontSize: 80,
        color: deepPurple[500]
    },
    icon4:{
        fontSize: 80,
        color: deepOrange[500]
    },
    flex:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"flex-end",
        alignItems:"flex-end"
    
    },
    margin:{
        marginLeft:10,
        marginTop: 10

    }
})

const IconCom=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
            <Container>
                <Paper component={Box} >
                <AddAPhotoIcon className={classes.icon1}/>
                <AccessibilityIcon className={classes.icon2}/>
                <AccountTreeIcon className={classes.icon3}/>
                <BathtubIcon className={classes.icon4}/>
             
                </Paper>
            </Container>
            <Container maxWidth="sm">
                <Paper component={Box} p={3}>
                <Typography variant="h3">
                Beautiful Icon
                </Typography>
                <Typography variant="body1">
                Material icons are so beautiful. I like these icons
                </Typography>
                <Container className={classes.flex}>
                <Box>
                <Button startIcon={<AddCircleIcon/>} variant="contained" color="secondary">Add</Button>
                </Box>
                <Box>
                <Button className={classes.margin} endIcon={<DeleteIcon/>} variant="contained" color="secondary" ml={2} >Delete</Button>
                </Box>
                </Container>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default IconCom;