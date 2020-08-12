import React, { useState, useEffect, useContext } from "react";
import { Button, Typography, Paper, Grid } from "@material-ui/core";
import { useFormStyles } from "../style/useFormStyles";
import showErrorMessage from "./ShowErrorMessage";
import { AuthorizationContext } from "../App";
import { register } from "../util/Authentication";
import NameTextField from "./Forms/NameTextField";
import EmailTextField from "./Forms/EmailTextField";
import PhoneTextField from "./Forms/PhoneTextField";
import UsernameTextField from "./Forms/UsernameTextField";
import PasswordTextField from "./Forms/PasswordTextField";
import { nameInputChanged, emailInputChanged, phoneInputChanged, userNameInputChanged, passwordInputChanged } from '../util/FormValidations'

const RegistrationForm = ({ display, toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // remove the error message after 5 seconds
  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  }, [errorMessage]);

  const classes = useFormStyles();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, username, email, phone, password)
      .then((actionResult) => {
        if (!actionResult.success) {
          //failure
          const keys = Object.keys(actionResult.data);
          const errMsg = keys.reduce((acc, curr) => {
            return (acc += curr + " " + actionResult.data[curr] + "\n");
          }, "");
          setErrorMessage(errMsg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (display === false) {
    return null;
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <form>
          <Grid item>
            <Typography variant="h5">Create New Account</Typography>
          </Grid>
          <hr /> 
          <Grid item>
            <Grid item>
              <NameTextField
                name={name}
                setName={setName}
                nameError={nameError}
                onChange={e => nameInputChanged(e, setName, setNameError)}
              />
            </Grid>
            <Grid item>
              <EmailTextField
                email={email}
                emailError={emailError}
                onChange={e => emailInputChanged(e, setEmail, setEmailError)}
              />
            </Grid>
            <Grid item>
              <PhoneTextField
                phone={phone}
                phoneError={phoneError}
                onChange={e => phoneInputChanged(e, setPhone, setPhoneError)}
              />
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
                  emailError !== null ||
                  phoneError !== null 
                }
                style={{ marginTop: "1rem" }}
              >
                Register
              </Button>
            </Grid>
            <br />
            {errorMessage !== null && showErrorMessage(errorMessage)}
            <Grid item>
              <Typography paragraph>
                Already have an account?{" "}
                <u onClick={toggleDisplay}>Click here</u> to login
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
