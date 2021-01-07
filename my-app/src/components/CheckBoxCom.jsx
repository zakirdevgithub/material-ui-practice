import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  Container,
  Box,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.grey[200],
  },
}));

const CheckBoxCom = () => {
  const classes = useStyle();
  const [remember, setRemember] = useState(false);

  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };
  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" mx="auto" p={3}>
        <Typography component={Box} variant="h3">
          {remember ? "Remembered" : "Please Check"}
        </Typography>
        <Box component="form">
          <FormControl>
            <FormLabel> </FormLabel>
            <FormControlLabel
              label="Remember Me"
              control={
                <Checkbox 
                color="primary"
                onChange={handleRemember} 
                checked={remember}
                icon={<FavoriteBorderIcon/>}
                checkedIcon={<FavoriteIcon/>}
                />
              }
            />
          </FormControl>
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckBoxCom;
