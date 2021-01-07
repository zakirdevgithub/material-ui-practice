import React from "react";
import { Paper, Container, Box, Typography, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
    flex:{
        display:"flex",

        flexWrap: "wrap",
       /*justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit; */
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    box:{
        maxWidth: 300,
        marginTop: 5,
        marginLeft: 5
    }
})

const PaperCom = () => {
    const classes=useStyles();
  return (
    <React.Fragment>
      <Container className={classes.flex}>
        <Box className={classes.box}>
          {/* <Paper square elevation={3}> */}
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h5" gutterBottom={true} align="center">
                Python Tutorial
              </Typography>
              <Typography variant="body1" gutterBottom={true} align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has text of the printing and typesetting
                dummy
              </Typography>
              <Box align="center" mt={2}>
                <Button variant="contained" color="secondary">
                  Enroll Now
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box className={classes.box}>
          <Paper square elevation={3}>
            <Box p={3}>
              <Typography variant="h5" gutterBottom={true} align="center">
                C++ Tutorial
              </Typography>
              <Typography variant="body1" gutterBottom={true} align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has text of the printing and typesetting
                dummy
              </Typography>
              <Box align="center" mt={2}>
                <Button variant="contained" color="secondary">
                  Enroll Now
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box className={classes.box}>
        <Paper square elevation={3}>
          <Box p={3}>
            <Typography variant="h5" gutterBottom={true} align="center">
              JavaScript Tutorial
            </Typography>
            <Typography variant="body1" gutterBottom={true} align="justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has text of the printing and typesetting
              dummy
            </Typography>
            <Box align="center" mt={2}>
              <Button variant="contained" color="secondary">
                Enroll Now
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box className={classes.box}>
      <Paper square elevation={3}>
        <Box p={3}>
          <Typography variant="h5" gutterBottom={true} align="center">
            React Tutorial
          </Typography>
          <Typography variant="body1" gutterBottom={true} align="justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has text of the printing and typesetting
            dummy
          </Typography>
          <Box align="center" mt={2}>
            <Button variant="contained" color="secondary">
              Enroll Now
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>

    <Box className={classes.box}>
    <Paper square elevation={3}>
      <Box p={3}>
        <Typography variant="h5" gutterBottom={true} align="center">
          Material-UI Tutorial
        </Typography>
        <Typography variant="body1" gutterBottom={true} align="justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has text of the printing and typesetting
          dummy
        </Typography>
        <Box align="center" mt={2}>
          <Button variant="contained" color="secondary">
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Paper>
  </Box>

  <Box className={classes.box}>
  <Paper square elevation={3}>
    <Box p={3}>
      <Typography variant="h5" gutterBottom={true} align="center">
        Django Tutorial
      </Typography>
      <Typography variant="body1" gutterBottom={true} align="justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has text of the printing and typesetting
        dummy
      </Typography>
      <Box align="center" mt={2}>
        <Button variant="contained" color="secondary">
          Enroll Now
        </Button>
      </Box>
    </Box>
  </Paper>
</Box>
      </Container>
    </React.Fragment>
  );
};

export default PaperCom;
