import React, { useContext } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/Account/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/Account/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

const AccountPage = () => {
  const [AuthState, _] = useContext(AuthorizationContext);
  return (
    <Layout title="Account">
      { AuthState.token === undefined || AuthState.token === null ? (
        <UnAuthenticatedAccountPage />
      ) : (
        <AuthenticatedAccountPage /> 
      )}
    </Layout>
  );
};

export default AccountPage;
