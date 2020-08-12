import React, { useState, useEffect, useContext } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import { useFormStyles } from "../style/useFormStyles";
import showErrorMessage from "./ShowErrorMessage";
import { AuthorizationContext } from "../App";
import { login } from "../util/Authentication";
import UsernameTextField from "./Forms/UsernameTextField";
import PasswordTextField from "./Forms/PasswordTextField";
import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
  passwordInputChanged,
} from "../util/FormValidations";


const SignInForm = ({ display, toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const MIN_CHARS = 3;
  const hasWhiteSpaceRegEx = new RegExp(/\s/);
  const classes = useFormStyles();
  const AuthContext = useContext(AuthorizationContext);

  // remove the error message after 2 seconds
  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  }, [errorMessage]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    AuthContext.dispatch({ type: "login" });

    try {
      const actionResult = await login(username, password);

      // user got something wrong
      if (!actionResult.success) {
        setErrorMessage(actionResult.data.error);
      } else {
        // user credentials check out
        const token = actionResult.data.token;
        AuthContext.dispatch({
          type: "success",
          payload: token,
        });
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err)
    }
  };

  if (display === false) {
    return null;
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Paper className={classes.paper}>
        <form>
          <Grid item>
            <Typography variant="h5">Sign In</Typography>
          </Grid>
          <Grid item>
            <UsernameTextField
              username={username}
              usernameError={usernameError}
              onChange={e => userNameInputChanged(e, setUsername, setUsernameError)}
            />
          </Grid>
          <Grid item>
            <PasswordTextField
              password={password}
              passwordError={passwordError}
              onChange={e => passwordInputChanged(e, setPassword, setPasswordError)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={
                passwordError !== null ||
                usernameError !== null ||
                password.length < MIN_CHARS ||
                username.length < MIN_CHARS
              }
              style={{
                marginTop: "1rem",
              }}
            >
              Sign In
            </Button>
          </Grid>
          <br />
          <Grid item>
            <Typography paragraph>
              Don't have an account? <u onClick={toggleDisplay}>Click here</u>{" "}
              to register
            </Typography>
          </Grid>
          {errorMessage !== null && showErrorMessage(errorMessage)}
        </form>
      </Paper>
    </Grid>
  );
};

export default SignInForm;
