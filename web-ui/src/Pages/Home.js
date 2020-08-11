import React, { useContext} from 'react';
import Layout from '../Components/Layout';
import About from '../Components/About';
import { AuthorizationContext } from '../App';
import LoggedInHomePage from '../Components/LoggedInHomePage'

const HomePage = () => {
	const authContext = useContext(AuthorizationContext)
	return (
		<Layout title="Home">
					{authContext.state.token === null &&  <About /> } 
					{authContext.state.token !== null &&  <LoggedInHomePage />  }
		</Layout>
	);
};


export default HomePage;
