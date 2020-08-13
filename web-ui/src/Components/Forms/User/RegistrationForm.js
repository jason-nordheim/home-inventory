import React, { useState, useEffect } from "react";
import { Button, Typography, Paper } from "@material-ui/core";
import showErrorMessage from "./Fields/ShowErrorMessage";
import { register } from "../../../util/Authentication";
import NameTextField from "./Fields/NameTextField"
import EmailTextField from "./Fields/EmailTextField";
import PhoneTextField from "./Fields/PhoneTextField";
import UsernameTextField from "./Fields/UsernameTextField";
import PasswordTextField from "./Fields/PasswordTextField";
import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
  passwordInputChanged,
} from "../../../util/FormValidations";

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
    <div className="registrationForm__container">
      <Paper clasName="registrationForm__paper" elevation={4}>
        <form className="registrationForm__form">
          <div className="registrationForm__header">
            <Typography variant="h5">Create New Account</Typography>
          </div>
          <hr />
          <div className="registrationForm__fieldContainer">
            <div className="registrationForm__nameField">
              <NameTextField
                name={name}
                setName={setName}
                nameError={nameError}
                onChange={(e) => nameInputChanged(e, setName, setNameError)}
              />
            </div>
            <div className="registrationForm__emailField">
              <EmailTextField
                email={email}
                emailError={emailError}
                onChange={(e) => emailInputChanged(e, setEmail, setEmailError)}
              />
            </div>
            <div className="registrationForm__phoneField">
              <PhoneTextField
                phone={phone}
                phoneError={phoneError}
                onChange={(e) => phoneInputChanged(e, setPhone, setPhoneError)}
              />
            </div>
            <div className="registrationForm__usernameField">
              <UsernameTextField
                username={username}
                usernameError={usernameError}
                onChange={(e) =>
                  userNameInputChanged(e, setUsername, setUsernameError)
                }
              />
            </div>
            <div className="registrationForm__passwordField">
              <PasswordTextField
                password={password}
                passwordError={passwordError}
                onChange={(e) =>
                  passwordInputChanged(e, setPassword, setPasswordError)
                }
              />
            </div>
          </div>
          <div className="registrationForm__button">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={
                ( passwordError !== null ||
                usernameError !== null ||
                emailError !== null ||
                phoneError !== null ) || (
                  name === "" || 
                  password === "" ||
                  username === "" || 
                  email === "" || 
                  phone === "" 
                )
              }
            >
              Register
            </Button>
          </div>
          <br />
          {errorMessage !== null && showErrorMessage(errorMessage)}
          <div className="registrationForm__goToLogin">
            <Typography paragraph>
              Already have an account? <u onClick={toggleDisplay}>Click here</u>{" "}
              to login
            </Typography>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default RegistrationForm;
