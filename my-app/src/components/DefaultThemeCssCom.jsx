import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    headline:{
        color: theme.palette.primary.dark
    },
    box:{
        boxShadow: theme.shadows[1],
        padding: 30
    }
}));

const DefaultThemeCssCom = () => {
    const classes=useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box className={classes.box}>
          <Typography variant="h1" align="center" className={classes.headline}>
            Why so serious?
          </Typography>

          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
      <Box>
        <Typography variant="h1" align="center">
          Am I serious?
        </Typography>

        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into
        </Typography>
      </Box>
    </Container>
    </React.Fragment>
  );
};

export default DefaultThemeCssCom;
