import React, { useState, useEffect, useContext } from "react";
import { Button, Typography, Paper } from "@material-ui/core";
import { AuthorizationContext } from "../../../App";
import UsernameTextField from "../Fields/UsernameTextField";
import PasswordTextField from "../Fields/PasswordTextField";
import {
  userNameInputChanged,
  passwordInputChanged,
} from "../../../util/FormValidations";
import showErrorMessage from "../Fields/ErrorMessage";

const SignInForm = ({ display, toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const MIN_CHARS = 3;
  const [AuthState, AuthActions] = useContext(AuthorizationContext);

  useEffect(() => {
    const observer = {
      update: (authState) => {
        if (authState.status === "ERROR_OCCURED") {
          setErrorMessage(authState.errors[authState.errors.length - 1].value);
        }
      },
    };
    AuthActions.observers.addObserver(observer);
  }, []);

  // remove the error message after 2 seconds
  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  }, [errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthActions.users.Login(username, password);
  };

  return (
    <div className="signInForm__container">
      <Paper className="signInForm__paper" elevation={4}>
        <form className="signInForm__form">
          <div className="singInForm__header">
            <Typography variant="h5">Sign In</Typography>
          </div>
          <hr />
          <div className="signInForm__fieldContainer">
            <div className="signInForm__usernameTextField">
              <UsernameTextField
                username={username}
                usernameError={usernameError}
                onChange={(e) =>
                  userNameInputChanged(e, setUsername, setUsernameError)
                }
              />
            </div>
            <div className="signInForm__passwordTextField">
              <PasswordTextField
                password={password}
                passwordError={passwordError}
                onChange={(e) =>
                  passwordInputChanged(e, setPassword, setPasswordError)
                }
              />
            </div>
            <div className="signInForm__button">
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
              >
                {AuthState.status === "LOADING" ? "Loading..." : "Sign In"}
              </Button>
            </div>
            <div>
              { errorMessage !== null ? showErrorMessage(errorMessage): null}
            </div>
          </div>
          <br />
          <div className="signInForm__goToRegister">
            <Typography paragraph>
              Don't have an account? <u onClick={toggleDisplay}>Click here</u>{" "}
              to register
            </Typography>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default SignInForm;
