import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Paper,
} from "@material-ui/core";

import AccountDetailsAccordian from './AccountDetailsAccordian'
import { AuthorizationContext } from "../../App";


const AuthenticatedAccountPage = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)
  const [user, setUser] = useState({})

  useEffect(() => {
    if(AuthState.token) {
      AuthActions.MyInfo()
        .then(data => setUser(data))
    }
  }, [])

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
