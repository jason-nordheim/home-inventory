import React from 'react' 
import Layout from '../Components/Layout'
import withAuthentication from '../Components/withAuthentication'

const HomePage = props => (
    <Layout title="Home">
        
    </Layout>
)

export default withAuthentication(HomePage) 