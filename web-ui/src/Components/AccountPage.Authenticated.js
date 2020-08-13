import React, { useState } from "react";
import {
  Typography,
  Paper,
} from "@material-ui/core";

import AccountDetailsAccordian from './AccountDetailsAccordian'

import {
  nameInputChanged,
  emailInputChanged,
  phoneInputChanged,
  userNameInputChanged,
} from "../util/FormValidations";

const AuthenticatedAccountPage = ({ user }) => {
  return (
    <div>
      <div>
        <Paper style={{ padding: "1rem" }}>
          <div>
            <Typography variant="h4">Welcome {user.name}</Typography>
          </div>
          <hr />
          <AccountDetailsAccordian user={user} /> 
        </Paper>
      </div>
    </div>
  );
};

export default AuthenticatedAccountPage;
