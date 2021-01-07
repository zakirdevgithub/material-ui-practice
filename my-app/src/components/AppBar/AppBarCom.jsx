import React from "react";
import {AppBar,Toolbar,CssBaseline,Container,Box, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AppBarCom=()=>{
   
    return(
            <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
            </Switch>
            </BrowserRouter>
    )
}

export default AppBarCom;