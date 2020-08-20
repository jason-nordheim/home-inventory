import React, { useEffect, useContext, useState } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/Account/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/Account/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

/**
 * Component definition 
 */
const AccountPage = () => {
  const AuthState = useContext(AuthorizationContext)[0];
  const [authenticated, setAuthenticated] = useState(false)
  const [title, setTitle] = useState("Account")

  useEffect(() => {
    setAuthenticated(AuthState.token === undefined || AuthState.token === null)
    setTitle(`${authenticated ? "My Account" : "Account"}`);
  }, [AuthState.token])

  /*
   * Component will display differently depending on if the user 
   * is authenticated 
   */
  return (
    <Layout title={title}>
      { authenticated ? <UnAuthenticatedAccountPage /> : <AuthenticatedAccountPage /> }
    </Layout>
  );
};

export default AccountPage;
