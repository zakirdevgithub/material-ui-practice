import React from "react";
import {
  Grid,
  Container,
  Box,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

const GridCom = () => {
  return (
    <React.Fragment>
      <Container >
        {/* <Grid container>
                <Grid item>
                </Grid>
              </Grid>  */}
        <Grid container spacing={2} justify="space-between">
          <Grid item lg={3} md={6} sm={12}>
            <Paper component={Box} p={3}>
              <Typography variant="h3">
              Lorem Ipsum
              </Typography>
                <Typography variant="body">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Typography>
              <Box mt={2}>
              <Button color="primary" variant="contained">Add Now</Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item lg={3} md={6} sm={12}>
            <Paper component={Box} p={3}>
              <Typography variant="h3">
              Lorem Ipsum
              </Typography>
                <Typography variant="body">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Typography>
              <Box mt={2}>
              <Button color="primary" variant="contained">Add Now</Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item lg={3} md={6} sm={12}>
            <Paper component={Box} p={3}>
              <Typography variant="h3">
              Lorem Ipsum
              </Typography>
                <Typography variant="body">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Typography>
              <Box mt={2}>
              <Button color="primary" variant="contained">Add Now</Button>
              </Box>
            </Paper>
          </Grid>

          
          <Grid item lg={3} md={6} sm={12}>
            <Paper component={Box} p={3}>
              <Typography variant="h3">
              Lorem Ipsum
              </Typography>
                <Typography variant="body">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Typography>
              <Box mt={2}>
              <Button color="primary" variant="contained">Add Now</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GridCom;