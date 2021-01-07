import React,{useState} from "react";
import {SwipeableDrawer,List, ListItem, ListItemText,
     AppBar, Toolbar, Button, CssBaseline, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles=makeStyles((theme)=>({
    root:{

    },
    logo:{
        color:"inherit",
        textDecoration:"none",
        fontSize: theme.typography.fontSize*2
    },
    drawer:{
        width:250
    }
}))

const SwipeableDrawerCom=()=>{
    const classes=useStyles();
    const [open, setOpen]=useState(false);
    
    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    return(
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                <IconButton color="inherit" onClick={handleOpen}>
                <MenuIcon/>
                </IconButton>
                
                <a href="http://localhost:3000/" className={classes.logo} style={{flexGrow: 1}}>Gumanisoft</a>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

            <SwipeableDrawer open={open} onClose={handleClose}>
            <List className={classes.drawer}>
                <ListItem button>
                    <ListItemText>List One</ListItemText>
                </ListItem>
                <ListItem button>
                <ListItemText>List Two</ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemText>List Three</ListItemText>
        </ListItem>
            </List>
            </SwipeableDrawer>

        </React.Fragment>
    )
}

export default SwipeableDrawerCom;