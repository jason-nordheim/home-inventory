import React from 'react' 
import Layout from '../Components/Layout'
import withAuthentication from '../Components/withAuthentication'
import { Typography, Container } from '@material-ui/core'

const HomePage = ({Authenticator}) => {
    return (
        <Layout title="Home">
            <About /> 
        </Layout>
    )
}


const About = () => {
    return (
        <Container>
        <Typography variant="h5">
            Life Is Messy 
        </Typography>
        <Typography paragraph>
        Life is messy. And you can’t control everything. But you can be prepared. Sortly lets you quickly make an accurate and up to date record of all your valuables. Create entries for each item in your house, add photos and detailed product information, like serial number, purchase date, value and warranty.
        </Typography>
        <br /> 
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
            <li>
                Be ready for the worst
                <ul>
                    <li>
                    Capture receipts, manuals, contracts and important documents
                    </li>
                    <li>
                    Set reminders for lent items, expiring warranties and return dates
                    </li>
                </ul>
            </li>
            <ul>
                <li>

                </li>
            </ul>
        </ul>
        <Typography paragraph>
        MyHome can replace dozens of applications helping you organize your life and increasing your efficiency
        </Typography>
        </Container>
    )
}

export default withAuthentication(HomePage) 