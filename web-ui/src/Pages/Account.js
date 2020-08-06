import React from 'react' 
import Layout from '../Components/Layout'
import SignInForm from '../Components/SignInForm'
import RegistrationForm from '../Components/RegistrationForm'

const AccountPage = () => (
    <Layout title="Account">
        <SignInForm /> 
        <RegistrationForm /> 
    </Layout>
)

export default AccountPage 