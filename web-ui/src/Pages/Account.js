import React, { useContext } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/Account/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/Account/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

const AccountPage = () => {
  const AuthContext = useContext(AuthorizationContext);
  const user = AuthContext.state.user;
  return (
    <Layout title="Account">
      { user === undefined || user === null ? (
        <UnAuthenticatedAccountPage />
      ) : (
        <AuthenticatedAccountPage user={user} />
      )}
    </Layout>
  );
};

export default AccountPage;
