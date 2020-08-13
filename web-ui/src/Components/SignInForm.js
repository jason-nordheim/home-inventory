import React, { useState, useEffect, useContext } from "react";
import {  Button, Typography, Paper } from "@material-ui/core";
import { AuthorizationContext } from "../App";
import { login } from "../util/Authentication";
import UsernameTextField from "./Forms/UsernameTextField";
import PasswordTextField from "./Forms/PasswordTextField";
import {
  userNameInputChanged,
  passwordInputChanged,
} from "../util/FormValidations";
import showErrorMessage from "./ShowErrorMessage";


const SignInForm = ({ display, toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const MIN_CHARS = 3;
  const hasWhiteSpaceRegEx = new RegExp(/\s/);
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
      <Paper elevation={4}>
        <form>
          <div>
            <Typography variant="h5">Sign In</Typography>
          </div>
          <hr /> 
          <div>
            <UsernameTextField
              username={username}
              usernameError={usernameError}
              onChange={e => userNameInputChanged(e, setUsername, setUsernameError)}
            />
          </div>
          <div>
            <PasswordTextField
              password={password}
              passwordError={passwordError}
              onChange={e => passwordInputChanged(e, setPassword, setPasswordError)}
            />
          </div>
          <div>
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
          </div>
          <br />
          <div>
            <Typography paragraph>
              Don't have an account? <u onClick={toggleDisplay}>Click here</u>{" "}
              to register
            </Typography>
          </div>

          {errorMessage !== null && showErrorMessage(errorMessage)}
        </form>
      </Paper>
  );
};

export default SignInForm;
