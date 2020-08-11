import React from "react";
import Layout from "../Components/Layout";
import AuthenticatedAccountPage from '../Components/AccountPage.Authenticated'
import UnAuthenticatedAccountPage from '../Components/AccountPage.UnAuthenticated'

const AccountPage = () => 
  <Layout title="Account">
    <UnAuthenticatedAccountPage /> 
    <AuthenticatedAccountPage /> 
  </Layout>

export default AccountPage;
