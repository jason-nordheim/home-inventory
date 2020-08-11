import React, { useContext} from 'react';
import Layout from '../Components/Layout';
import About from '../Components/About';
import { AuthorizationContext } from '../App';
import { Typography } from '@material-ui/core';


const HomePage = () => {
	const authContext = useContext(AuthorizationContext)
	return (
		<Layout title="Home">
					{authContext.state.token === null &&  <About /> } 
					{authContext.state.token !== null &&(
						<Typography paragraph>
							Placeholder for end-user information
						</Typography>
						) }
		</Layout>
	);
};


export default HomePage;
