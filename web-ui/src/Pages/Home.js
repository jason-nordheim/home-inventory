import React, { useContext, useState, useTimeout } from 'react';
import Layout from '../Components/Layout';
import { AuthorizationContext } from '../App';
import HomeAuthenticated from '../Components/Home/Home.Authenticated'
import HomeUnAuthenticated from '../Components/Home/Home.UnAuthenticated'


/**
 * Component defintion 
 */
const HomePage = () => {  
  const AuthState = useContext(AuthorizationContext)[0]
  const authenticated = AuthState.token ? true : false 
  const title = `${authenticated ? "Dashboard" : "Home"}`; 
  
	return (
    <Layout title={title}>
      { authenticated ? <HomeAuthenticated /> : <HomeUnAuthenticated />}
    </Layout>
  );
};


export default HomePage;
