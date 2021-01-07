import React from "react";
import {
  TextField,
  InputAdornment,
  Container,
  Paper,
  Box,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.grey[200],
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TextFieldCom = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Paper component={Box} p={3} width="30%" mx="auto" boxShadow={5}>
        <Avatar className={classes.avatar} component={Box} mx="auto" my={1}>
          <GavelIcon />
        </Avatar>
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <form>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter First Name"
            label="First Name"
            variant="outlined"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Last Name"
            label="Last Name"
            variant="outlined"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Email"
            label="Email"
            variant="outlined"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            placeholder="Password"
            label="Password"
            variant="outlined"
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <VisibilityIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Comment"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            helperText="(max 500 characters)"
          />
          <Box mb={1}>
            <Button fullWidth variant="contained" color="secondary">
              Register
            </Button>
          </Box>
          <Box>
            <Button fullWidth variant="outlined" color="secondary">
              Already have account? Login here
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default TextFieldCom;
