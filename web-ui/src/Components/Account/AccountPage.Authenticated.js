import React from "react";
import {
  Typography,
  Paper,
} from "@material-ui/core";

import AccountDetailsAccordian from './AccountDetailsAccordian'


const AuthenticatedAccountPage = ({ user }) => {
  return (
    <div className="authenticatedAccountPage_container">
        <Paper className="authenticatedAccountPage__paper">
          <div>
            <Typography variant="h4">Welcome {user.name}</Typography>
          </div>
          <hr />
          <AccountDetailsAccordian user={user} /> 
        </Paper>
    </div>
  );
};

export default AuthenticatedAccountPage;
