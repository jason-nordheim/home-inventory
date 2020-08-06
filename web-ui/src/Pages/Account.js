import React from 'react';
import Layout from '../Components/Layout';
import SignInForm from '../Components/SignInForm';
import RegistrationForm from '../Components/RegistrationForm';
import withAuthentication from '../Components/withAuthentication';

const AccountPage = (props) => {
	const { Authenticator } = props;
	return (
		<Layout title="Account">
			<SignInForm Authenticator={Authenticator}/>
			<RegistrationForm Authenticator={Authenticator}/>
		</Layout>
	);
};

export default withAuthentication(AccountPage);
