import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Paper,
} from "@material-ui/core";

import AccountDetailsAccordian from './AccountDetailsAccordian'
import { AuthorizationContext } from "../../App";


/**
 * Component Definition 
 */
const AuthenticatedAccountPage = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)
  const [user, setUser] = useState({})

  /**
   * Should retrieve the current user at render 
   */
  useEffect(() => {
    getLoggedInUser()
  }, [])

  /**
   * Retrieves the currently displayed user to 
   * render a welcome message 
   */
  function getLoggedInUser() {
    if (AuthState.token) {
      AuthActions.users.MyInfo().then((data) => {
        setUser(data)
      });
    }
  }

  return (
    <div className="authenticatedAccountPage_container">
      <Paper className="authenticatedAccountPage__paper">
        <div>
          <Typography variant="h4">Welcome {user.name}</Typography>
        </div>
        <hr />
        <AccountDetailsAccordian
          AuthActions={AuthActions}
          AuthState={AuthState}
        />
      </Paper>
    </div>
  );
};

export default AuthenticatedAccountPage;
