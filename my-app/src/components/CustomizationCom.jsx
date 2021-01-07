import React from "react";
import { Container, Box, Paper, Typography, Button } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import Theme from "./CustomizationCom2";


const CustomizationCom = () => {
  return (


    <ThemeProvider theme={Theme}>
    <Container>
        <Paper component={Box} >
          <Typography variant="h3" color="primary">Material-UI</Typography>
          <Typography variant="body1" color="secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
      
  
  );
};

export default CustomizationCom;