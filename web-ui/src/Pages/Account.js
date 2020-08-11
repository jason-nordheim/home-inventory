import React, {useState} from 'react';
import Layout from '../Components/Layout';
import SignInForm from '../Components/SignInForm';
import RegistrationForm from '../Components/RegistrationForm';
import { Grid, Typography  } from '@material-ui/core';
import { AuthorizationContext } from '../AuthorizationContext';
import { ApplicationName}  from '../data/StaticContent'


const AccountPage = ({ isLoggedIn }) => {
	const [register, setRegister] = useState(false) 

	if (isLoggedIn) {
		return (
			<Layout title="Account">
				<Typography>Welcome</Typography>
			</Layout>
		)
	} else {
		return (
			<Layout title="Account">
				<AuthorizationContext.Consumer>
					{ authorizationContext => {
						if (!authorizationContext.state.isLoggedIn) {
							return (
								<Grid container direction="row" justify="center" alignItems="stretch">
									<Grid item>
										<SignInForm  display={!register}  toggleDisplay={e => setRegister(!register)}/>
									</Grid>
									<Grid item>	
										<RegistrationForm display={!!register} toggleDisplay={e => setRegister(!register)}/>
									</Grid>
								</Grid>
							)
						} else {
							return (
								<Typography paragraph>
									Welcome to { ApplicationName }
								</Typography>
							)
						}
					}}
				</AuthorizationContext.Consumer>
			</Layout>
		);
	}
};

export default AccountPage;
