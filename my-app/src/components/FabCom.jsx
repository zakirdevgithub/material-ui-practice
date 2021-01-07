// FAB=Floating Action Button
import React, { useState, useEffect } from "react";
import { Fab, Container, Grid, Typography } from "@material-ui/core";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea, Button,Avatar, IconButton
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ShareIcon from '@material-ui/icons/Share';

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.grey[300],
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex:theme.zIndex.tooltip
  },
}));

const FabCom = () => {
  const classes = useStyle();
  const [users, setUsers] = useState([]);

  const loaders = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  useEffect(() => {
    loaders();
  });

  return (
    <Container maxWidth="xl" className={classes.root}>
      {/*  <Fab color="secondary" className={classes.add} >
               <AddIcon/>
            </Fab> */}
      <Fab color="secondary" variant="extended" className={classes.add}>
        <AddIcon /> Create User
      </Fab>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item lg={3} md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardHeader 
                avatar={<Avatar alt={user.username[0]} src="https://1.bp.blogspot.com/-dfudCfGSVX0/XvrwpMihj4I/AAAAAAAAADc/TfvK37W9ibcxspEnOAPAYqjmUDFeV2H8gCK4BGAsYHg/s320/zakir.jpg" />}
                title={user.name} 
                subheader={user.email}
                action={
                    <IconButton>
                    <ShareIcon/>
                    </IconButton>
                }
                />
                <CardMedia 
                component="img"
                image="https://via.placeholder.com/1920x1080" />

                <CardContent>
                  <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button variant="outlined" color="primary">
                Username: {user.username}
              </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FabCom;
