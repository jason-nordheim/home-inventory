import React, { useState, useEffect, useContext } from "react";
import { Button, Typography, Paper } from "@material-ui/core";
import ErrorMessage from "../Fields/ErrorMessage"
import NameTextField from "../Fields/NameTextField"
import EmailTextField from "../Fields/EmailTextField";
import PhoneTextField from "../Fields/PhoneTextField";
import UsernameTextField from "../Fields/UsernameTextField";
import PasswordTextField from "../Fields/PasswordTextField";
import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
  passwordInputChanged,
} from "../../../util/FormValidations";
import { AuthorizationContext } from "../../../App";
import SuccessMessage from '../Fields/SuccessMessage'

const RegistrationForm = ({ display, toggleDisplay }) => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)
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
  const [successMessage, setSuccessMessage] = useState(null)

  /** watch for an error  */
  useEffect(() => {
    const observer = {
      update: (authState) => {
        if (authState.status === "ERROR_OCCURED") {
          setErrorMessage(authState.errors[authState.errors.length - 1].value);
        } else if (authState.actions[AuthState.actions.length] === "REGISTER_SUCCESS") {
          setSuccessMessage("Account Created Successfully") 
        }
      },
    };
    AuthActions.observers.addObserver(observer);
  }, []);
  // remove the error message after 5 seconds
  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage !== null) {
      setTimeout(() => {
        setSuccessMessage(null);
      });
    }
  }, [successMessage])


  const handleSubmit = async (e) => {
    e.preventDefault();
    AuthActions.users.Register(name, username, password, email, phone)
  };

  return (
    
    <div className="registrationForm__container">
      <Paper className="registrationForm__paper" elevation={4}>
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
              { AuthState.status === 'LOADING' ? `Loading...` : 'Register'}
            </Button>
          </div>
          <br />
          {AuthState.status === 'ERROR' ? ErrorMessage(AuthState.errors.last()): AuthState.status === '' }
          { successMessage ? SuccessMessage(successMessage) : null }
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
