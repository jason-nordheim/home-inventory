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
import NameTextField from "../Forms/User/Fields/NameTextField";
import EmailTextField from "../Forms/User/Fields/EmailTextField";
import PhoneTextField from "../Forms/User/Fields/PhoneTextField";
import UsernameTextField from "../Forms/User/Fields/UsernameTextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
} from "../../util/FormValidations";

const AccountDetailsAccordian = ({ user }) => {
  /**
   * TODO: 
   *  - refafor to enable editing 
   *  - refactor to use Context 
   */
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
    <Accordion className="accountDetailsAccordian">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Account Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form>
            <Paper className="accountDetailsAccordian__detailsContainer" elevation={4}>
              <div
                className="accountDetailsAccordian__leftPane"
                variant="outlined"
              >
                <div className="accountDetailsAccordian__textfield">
                  <UsernameTextField
                    username={username}
                    usernameError={usernameError}
                    onChange={onUsernameChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <NameTextField
                    name={name}
                    setName={setName}
                    nameError={nameError}
                    onChange={onNameChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <EmailTextField
                    email={email}
                    emailError={emailError}
                    onChange={onEmailChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <PhoneTextField
                    phone={phone}
                    phoneError={phoneError}
                    onChange={onPhoneChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
              </div>
              {/* end of left pane, start RIGHT pane */}
              <div
                className="accountDetailsAccordian__rightPane"
                variant="outlined"
              >
                <div className="accountDetailsAccordian__textfield">
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
                </div>
              </div>
              {/* end of RIGHT pane */}
            </Paper>
          <br />
          <div className="accountDetailsAccordian__buttonContainer">
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
