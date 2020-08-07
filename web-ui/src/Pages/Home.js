import React from 'react' 
import Layout from '../Components/Layout'
import withAuthentication from '../Components/withAuthentication'
import { Typography } from '@material-ui/core'

const HomePage = props => {
    const { Authenticator } = props 
    return (
        <Layout title="Home">
            <About /> 
        </Layout>
    )
}


const About = () => {
    return (
        <>
        <Typography variant="h5">
            Features
        </Typography>
        <ul>
            <li>
                Organize your collections
                <ul>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Books</li>
                    <li>Video games</li>
                    <li>Electronics</li>
                    <li>Jewelry</li>
                    <li>Office Supplies</li>
                    <li>Family heirlooms</li>                    
                </ul>
            </li>
            <li>
                Reduce and de-clutter your life
                <ul>
                    <li>Calculate the cost of each item in your household and determine if it's worth keeping</li>
                    <li>Identify items that are should be or are worth selling</li>
                </ul>
            </li>
        </ul>
        <Typography paragraph>
        MyHome can replace dozens of applications helping you organize your life and increasing your efficiency
        </Typography>
        </>
    )
}

export default withAuthentication(HomePage) 