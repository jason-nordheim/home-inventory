import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import NameTextField from "../Forms/Fields/NameTextField";
import EmailTextField from "../Forms/Fields/EmailTextField";
import PhoneTextField from "../Forms/Fields/PhoneTextField";
import UsernameTextField from "../Forms/Fields/UsernameTextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
} from "../../util/FormValidations";
import { AuthorizationContext } from "../../App";




/**
 * Componet Definition 
 * @param {user} user (destructured from props) 
 */
export function AccountDetailsAccordian(){
  const [AuthState, AuthActions] = useContext(AuthorizationContext);
  const [editMode, setEditMode] = useState(false)
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    getLoggedInUser();
  }, []);

  useEffect(() => {
    console.log(user)
  }, [user])
  
  function getLoggedInUser() {
    if (AuthState.token) {
      AuthActions.users.MyInfo().then((data) => {
        console.log('data', data)
        setUser(data)
      });
    }
  }


  /**
   * Event handler for the 'onChange' event for 
   * the name input name field  
   * @param {event} e 
   */
  function onNameChanged(e){
    function setName(newName){
      setUser({...user, name: newName})
    }
    nameInputChanged(e, setName, null)
  };
  
  /**
   * Event handler 'onChnage' event of the email input field  
   * @param {event} e 
   */
  function onEmailChanged(e){
    function setEmail(newEmail) {
      setUser({...user, email: newEmail})
    }
    emailInputChanged(e, setEmail, null);
  };

  /**
   * Event handler for the 'onChange' event of the 
   * phone input field 
   * @param {event} e 
   */
  function onPhoneChanged(e){
    function setPhone(newPhone) {
      setUser({...user, phone: newPhone})
    }
    phoneInputChanged(e, setPhone, null);
  };

  /**
   * Event handler for the 'onChange' event of the 
   * username input field 
   * @param {event} e 
   */
  function onUsernameChanged(e){
    function setUsername(newUsername) {
      setUser({...user, username: newUsername})
    }
    userNameInputChanged(e, setUsername, null);
  };

  function onBioChanged(e) {
    function setBio(newBio){
      setUser({...user, bio: newBio})
    }
    setBio(e.target.value)
  }

  
  return (
    AuthState.token && user &&   
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
                    value={user['username']}
                    error={null}
                    onChange={onUsernameChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <NameTextField
                    value={user["name"]}
                    error={null}
                    onChange={onNameChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <EmailTextField
                    size="small"
                    value={user.email}
                    error={null}
                    onChange={onEmailChanged}
                    required={false}
                    disabled={!editMode}
                  />
                </div>
                <div className="accountDetailsAccordian__textfield">
                  <PhoneTextField
                    size="small"
                    value={user.phone}
                    error={null}
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
                    defaultValue={user.bio}
                    onChange={onBioChanged}
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
