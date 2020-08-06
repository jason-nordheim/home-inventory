import React from 'react' 
import Layout from '../Components/Layout'
import withAuthentication from '../Components/withAuthentication'

const HomePage = props => {
    const { Authenticator } = props 
    return (
        <Layout title="Home">
        </Layout>
    )
}

export default withAuthentication(HomePage) 