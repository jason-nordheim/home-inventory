import React, { useContext} from 'react';
import Layout from '../Components/Layout';
import { AuthorizationContext } from '../App';
import HomeAuthenticated from '../Components/Home/Home.Authenticated'
import HomeUnAuthenticated from '../Components/Home/Home.UnAuthenticated'


const HomePage = () => {  
	const authContext = useContext(AuthorizationContext)
	return (
    <Layout title="Home">
      {authContext.state.token == null && <HomeUnAuthenticated />}
      {authContext.state.token !== null && <HomeAuthenticated />}
    </Layout>
  );
};


export default HomePage;
