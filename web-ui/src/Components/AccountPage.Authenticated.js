import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core";
import useFormStyles from "../style/useFormStyles";
import NameTextField from "./Forms/NameTextField";
import EmailTextField from "./Forms/EmailTextField";
import PhoneTextField from "./Forms/PhoneTextField";
import UsernameTextField from "./Forms/UsernameTextField";
import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
} from "../util/FormValidations";

const AuthenticatedAccountPage = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [usernameError, setUsernameError] = useState(null);
  const [name, setName] = useState(user.name);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(user.email);
  const [emailError, setEmailError] = useState(null);
  const [phone, setPhone] = useState(user.phone);
  const [phoneError, setPhoneError] = useState(null);
  const [bio, setBio] = useState('')
  const classes = useFormStyles();

  const onNameChanged = (e) => {
    nameInputChanged(e, setName, setNameError);
  };
  const onEmailChanged = (e) => {
    emailInputChanged(e, setEmail, setEmailError);
  };
  const onPhoneChanged = (e) => {
    phoneInputChanged(e, setPhone, setPhoneError);
  };
  const onUsernameChanged = (e) => {
    userNameInputChanged(e, setUsername, setUsernameError);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: "1rem" }}>
          <Grid item>
            <Typography variant="h4">Welcome {user.name}</Typography>
          </Grid>
          <hr />
          <Grid item xs={12}>
          <form style={{ padding: "1rem" }}>
              <Grid container justify="space-around" >
                {/* start left pane */}
                <Grid id="leftPane" item md={4} xs={12}>
                  <Grid container justify="center">
                    <Grid item>
                      <UsernameTextField
                        className={classes.textField}
                        username={username}
                        usernameError={usernameError}
                        onChange={onUsernameChanged}
                        required={false}
                        disabled={!editMode}
                      />
                    </Grid>
                    <Grid item>
                      <NameTextField
                        className={classes.textField}
                        name={name}
                        setName={setName}
                        nameError={nameError}
                        onChange={onNameChanged}
                        required={false}
                        disabled={!editMode}
                      />
                    </Grid>
                    <Grid item>
                      <EmailTextField
                        className={classes.textField}
                        email={email}
                        emailError={emailError}
                        onChange={onEmailChanged}
                        required={false}
                        disabled={!editMode}
                      />
                    </Grid>
                    <Grid item>
                      <PhoneTextField
                        className={classes.textField}
                        phone={phone}
                        phoneError={phoneError}
                        onChange={onPhoneChanged}
                        required={false}
                        disabled={!editMode}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* end of left pane, start RIGHT pane */}
                <Grid id="rightPane" item md={4} xs={12}>
                  <Grid container justify="center">
                    <Grid item>
                      <TextField
                        variant="outlined"
                        defaultValue={bio}
                        onChange={e => setBio(e.target.value)}
                        multiline
                        name="bio"
                        label="Bio"
                        rows={10}
                        disabled={!editMode}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                 {/* end of RIGHT pane */}
                <br />
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(e) => {
                        e.preventDefault();
                        if (editMode) {
                          alert("Unable to edit at this time");
                          //updateUser(user.id, name, username, phone, email)
                        }
                        setEditMode(!editMode);
                      }}
                    >
                      {editMode ? "Save" : "Edit"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthenticatedAccountPage;
