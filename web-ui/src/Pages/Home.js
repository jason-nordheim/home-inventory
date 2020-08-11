import React, { useContext} from 'react';
import Layout from '../Components/Layout';
import About from '../Components/About';
import { AuthorizationContext } from '../App';
import { Typography } from '@material-ui/core';


const HomePage = () => {
	const authContext = useContext(AuthorizationContext)
	return (
		<Layout title="Home">

					{!authContext.state.isLoggedIn &&  <About /> } ;
					{authContext.state.isLoggedIn &&(
						<Typography paragraph>
							Placeholder for end-user information
						</Typography>
						) }
		</Layout>
	);
};

// const About = () => {
// 	return (
// 		<Container>
// 			<Container>
// 				<Typography variant="h5">Life Is Messy</Typography>
// 				<Typography paragraph>
// 					Life is messy. And you can’t control everything. But you can be prepared. Sortly lets you quickly
// 					make an accurate and up to date record of all your valuables. Create entries for each item in your
// 					house, add photos and detailed product information, like serial number, purchase date, value and
// 					warranty.
// 				</Typography>
// 			</Container>
// 			<br />
// 			<Container>
// 				<Typography variant="h5">Features</Typography>
// 				<ul>
// 					<li>
// 						Organize your collections
// 						<ul>
// 							<li>Music</li>
// 							<li>Movies</li>
// 							<li>Books</li>
// 							<li>Video games</li>
// 							<li>Electronics</li>
// 							<li>Jewelry</li>
// 							<li>Office Supplies</li>
// 							<li>Family heirlooms</li>
// 						</ul>
// 					</li>
// 					<li>
// 						Reduce and de-clutter your life
// 						<ul>
// 							<li>
// 								Calculate the cost of each item in your household and determine if it's worth keeping
// 							</li>
// 							<li>Identify items that are should be or are worth selling</li>
// 						</ul>
// 					</li>
// 					<li>
// 						Be ready for the worst
// 						<ul>
// 							<li>Capture receipts, manuals, contracts and important documents</li>
// 							<li>Set reminders for lent items, expiring warranties and return dates</li>
// 						</ul>
// 					</li>
// 					<ul>
// 						<li />
// 					</ul>
// 				</ul>
// 				<Typography paragraph>
// 					{ApplicationName} can replace dozens of applications helping you organize your life and increasing
// 					your efficiency
// 				</Typography>
// 			</Container>
// 		</Container>
// 	);
// };

export default HomePage;
