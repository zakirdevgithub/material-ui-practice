import React,{useState} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
// import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
  logo: {
    textDecoration: "none",
    color: "inherit",
    fontSize: theme.typography.fontSize * 2
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  displayMenuIcon: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }
}));

const languages=["English","Bangla", "Hindi","Urdu"]

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen]=useState(null);
  const [anchorLanguage, setAnchorLanguage]=useState(null);
  const [selectedLanguageIndex, setSelectedLanguageIndex]=useState(null)

  const handleOpen=(e)=>{
      setOpen(e.currentTarget);
  }

  const handleClose=()=>{
      setOpen(false);
  }

  const handleLanguageOpen=(e)=>{
      setAnchorLanguage(e.currentTarget)
  }
  
  const handleLanguageClose=(index)=>{
      setSelectedLanguageIndex(index);
      setAnchorLanguage(false);
  }
  return (
    <React.Fragment>
      <CssBaseline /> {/* I use it because AppBar position=static */}
      <AppBar color="primary" position="static">
        <Toolbar>
        
            <Box style={{flexGrow:1}}>
            <a href="http://localhost:3000/" className={classes.logo}>Gumanisoft</a>
            </Box>
          <Box className={classes.sectionDesktop}>
            <Box>
            <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/About">
            About
          </Button>
          <Button color="inherit" component={NavLink} to="/Contact" >
            Contact
          </Button>
            </Box>

          </Box>

          <Box ml={3}>            
          <Button color="inherit" 
          onClick={handleLanguageOpen}
          startIcon={<TranslateIcon/>}
          endIcon={<KeyboardArrowDownIcon/>}
          >
            {languages[selectedLanguageIndex] || "Language"}
          </Button>
          <Menu open={Boolean(anchorLanguage)} anchorEl={anchorLanguage} onClose={handleLanguageClose}>
              {
                  languages.map((language, index)=>(
                      <MenuItem onClick={()=>handleLanguageClose(index)}>{language}</MenuItem>
                  ))
              }
          </Menu>
          </Box>

          <IconButton color="inherit" onClick={handleOpen} className={classes.displayMenuIcon}>
            <MenuIcon />
          </IconButton>

        </Toolbar>

        <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose} >
            <MenuItem onClick={handleClose} component={NavLink} to="/">Home</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/About">About</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/Contact">Contact</MenuItem>
            
        </Menu>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
