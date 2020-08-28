import React, { useContext } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/Account/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/Account/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

/**
 * Component definition 
 */
const AccountPage = () => {
  const AuthState = useContext(AuthorizationContext)[0];
  const authenticated = AuthState.token ? true : false 
  const title = `${authenticated ? "My Account" : "Account"}`; 
  /*
   * Component will display differently depending on if the user 
   * is authenticated 
   */
  return (
    <Layout title={title}>
      { authenticated ? <AuthenticatedAccountPage /> : <UnAuthenticatedAccountPage />  }
    </Layout>
  );
};

export default AccountPage;
