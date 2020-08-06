import React from 'react' 
import Layout from '../Components/Layout'
import SignInForm from '../Components/SignInForm'
import RegistrationForm from '../Components/RegistrationForm'
import withAuthentication from '../Components/withAuthentication'

const AccountPage = props => (
    <Layout title="Account">
        <SignInForm /> 
        <RegistrationForm /> 
    </Layout>
)

export default withAuthentication(AccountPage) 