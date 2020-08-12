import React, { useContext } from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from "../Components/AccountPage.Authenticated";
import UnAuthenticatedAccountPage from "../Components/AccountPage.UnAuthenticated";
import { AuthorizationContext } from "../App";

const AccountPage = () => {
  const AuthContext = useContext(AuthorizationContext);
  return (
    <Layout title="Account">
      { AuthContext.state.user === null ? (
        <AuthenticatedAccountPage user={AuthContext.state.user} />
      ) : (
        <UnAuthenticatedAccountPage />
      )}
    </Layout>
  );
};

export default AccountPage;
