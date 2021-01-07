import React,{useState} from "react";
import{List, ListItem, 
    ListItemText, 
    ListItemIcon, Collapse, 
    Container, Paper, Box, Typography, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AndroidIcon from '@material-ui/icons/Android';
import BrushIcon from '@material-ui/icons/Brush';

const useStyles=makeStyles((theme)=>({
    root:{
        width:"100vw",
        height:"100vh",
        backgroundColor:theme.palette.grey[200]
    },
    sidebar:{
        position:"fixed",
        top:0,
        left:0,
        width: "30%",
        height:"100%"
    },
    subList:{
        paddingLeft:theme.spacing(5)
    }
}))

const ListCom=()=>{
    const classes=useStyles();
    const [open, setOpen]=useState(false);
    return(
        <Container className={classes.root}>
        <Paper component={Box} className={classes.sidebar} boxShadow={5}>
        <List disablePadding>
        <ListItem button>
        <ListItemIcon>
        <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText 
        primary={<Typography variant="h5">Getting Started</Typography>}
        secondary={<Typography variant="body1">Start Tutorial</Typography>}
        />
        </ListItem>
        <Divider/>
        <ListItem button>
        <ListItemIcon>
        <BeachAccessIcon/>
        </ListItemIcon>
        <ListItemText primary={<Typography variant="h6">Components</Typography>}/>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
        <AndroidIcon/>
        </ListItemIcon>
        <ListItemText primary={<Typography variant="h6">Component API</Typography>}/>
        </ListItem>
        <ListItem button onClick={()=> setOpen(!open)}>
        <ListItemIcon>
        <BrushIcon/>
        </ListItemIcon>
        <ListItemText primary={<Typography variant="h6">Styles</Typography>}/>
        </ListItem>
        <Collapse in={open}>
        <List disablePadding >
        <ListItem className={classes.subList} button>
         <ListItemText primary="Color"/>
        </ListItem>
        <ListItem className={classes.subList} button>
        <ListItemText primary="Background Color"/>
       </ListItem>
       <ListItem className={classes.subList} button>
       <ListItemText primary="Size"/>
      </ListItem>
        </List>
        </Collapse>

        </List>
        </Paper>
        </Container>
    )
}

export default ListCom;