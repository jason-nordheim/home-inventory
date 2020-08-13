import React, { useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import NameTextField from "./Forms/NameTextField";
import EmailTextField from "./Forms/EmailTextField";
import PhoneTextField from "./Forms/PhoneTextField";
import UsernameTextField from "./Forms/UsernameTextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
} from "../util/FormValidations";

const AccountDetailsAccordian = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [usernameError, setUsernameError] = useState(null);
  const [name, setName] = useState(user.name);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(user.email);
  const [emailError, setEmailError] = useState(null);
  const [phone, setPhone] = useState(user.phone);
  const [phoneError, setPhoneError] = useState(null);
  const [bio, setBio] = useState("");

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
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Account Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
          <form style={{ padding: "1rem" }}>
                <Paper className="accountDetailsAccordian__leftPane" variant="outlined" style={{ margin: "1rem" }}>
                      <UsernameTextField
                        username={username}
                        usernameError={usernameError}
                        onChange={onUsernameChanged}
                        required={false}
                        disabled={!editMode}
                      />
                      <NameTextField
                        name={name}
                        setName={setName}
                        nameError={nameError}
                        onChange={onNameChanged}
                        required={false}
                        disabled={!editMode}
                      />
                      <EmailTextField
                        email={email}
                        emailError={emailError}
                        onChange={onEmailChanged}
                        required={false}
                        disabled={!editMode}
                      />
                      <PhoneTextField
                        phone={phone}
                        phoneError={phoneError}
                        onChange={onPhoneChanged}
                        required={false}
                        disabled={!editMode}
                      />
                </Paper>
              {/* end of left pane, start RIGHT pane */}
              <Paper className="accountDetailsAccordian__RightPane" variant="outlined" style={{ margin: "1rem" }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        defaultValue={bio}
                        onChange={(e) => setBio(e.target.value)}
                        multiline
                        name="bio"
                        label="Bio"
                        rows={10}
                        disabled={!editMode}
                      />
                </Paper>
              {/* end of RIGHT pane */}
              <br />
              <div >
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
                </div>
          </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccountDetailsAccordian;
