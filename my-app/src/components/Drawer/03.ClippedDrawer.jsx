import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  IconButton,
  Box,
  Typography,
  Container,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth=250;

const useStyles = makeStyles((theme) => ({
  root: {
      paddingLeft: drawerWidth,
      paddingTop: theme.spacing(3)
  },
  logo: {
    color: "inherit",
    textDecoration: "none",
    fontSize: theme.typography.fontSize * 2,
  },
  drawer: {
    width: drawerWidth,
  },
  appBar:{
      zIndex: theme.zIndex.drawer+1
  }
}));

const ClippedDrawer = () => {
  const classes = useStyles();


  return (
    <React.Fragment>
    <CssBaseline/>
    <Drawer open={true}  variant="permanent">
    <Toolbar/>
    <List className={classes.drawer}>
      <ListItem button>
        <ListItemText>List One</ListItemText>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText>List Two</ListItemText>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText>List Three</ListItemText>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText>List Four</ListItemText>
      </ListItem>
      <Divider/>
    </List>
  </Drawer>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>

          <a
            href="http://localhost:3000/"
            className={classes.logo}
            style={{ flexGrow: 1 }}
          >
            Gumanisoft
          </a>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Toolbar/>
      <Container className={classes.root}>
      <Box>
        <Typography variant="h3">Hello World!</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      </Container>
      
    </React.Fragment>
  );
};

export default ClippedDrawer;
