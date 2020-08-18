import React, { useContext } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/Account/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/Account/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

const AccountPage = () => {
  const [AuthState, AuthDispatch] = useContext(AuthorizationContext);
  const token = AuthState.token;
  return (
    <Layout title="Account">
      { token === undefined || token === null ? (
        <UnAuthenticatedAccountPage />
      ) : (
        null
      )}
    </Layout>
  );
};

export default AccountPage;
