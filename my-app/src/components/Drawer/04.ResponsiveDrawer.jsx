import React,{useState} from "react";
import {SwipeableDrawer,List, 
    ListItem, ListItemText,
     AppBar, Toolbar, Button, 
     CssBaseline, IconButton, Hidden, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth=250
const useStyles=makeStyles((theme)=>({
    root:{

    },
    logo:{
        color:"inherit",
        textDecoration:"none",
        fontSize: theme.typography.fontSize*2
    },
    drawer:{
        width:drawerWidth
    },
    responsAppBar:{
        [theme.breakpoints.up("sm")]:{
            width:`calc(100% - ${drawerWidth}px)`
        }
        

    },
    menuIcon:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }  
    }
}))

const ResponsiveDrawer=()=>{
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
            <AppBar position="fixed" className={classes.responsAppBar}>
                <Toolbar>
                <IconButton color="inherit" onClick={handleOpen} className={classes.menuIcon}>
                <MenuIcon/>
                </IconButton>
                
                <a href="http://localhost:3000/" className={classes.logo} style={{flexGrow: 1}}>Gumanisoft</a>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            
            <Hidden smDown implementation="css">
            <SwipeableDrawer open={true} variant="permanent">
            <Toolbar/>
            <Divider/>
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
            </Hidden>

        <Hidden smUp implementation="css" >
        <SwipeableDrawer open={open} onClose={handleClose}>
        <List className={classes.drawer}>
            <ListItem button onClick={handleClose}>
                <ListItemText>List One</ListItemText>
            </ListItem>
            <ListItem button onClick={handleClose}>
            <ListItemText>List Two</ListItemText>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <ListItemText>List Three</ListItemText>
    </ListItem>
        </List>
        </SwipeableDrawer>
        </Hidden>

        </React.Fragment>
    )
}

export default ResponsiveDrawer;