import React from 'react' 
import PersistentDrawerLeft from './PersistentDrawerLeft'
import { ThemeProvider } from '@material-ui/core';
import theme from '../style/useTheme'
// import StickyFooter from './StickyFooter'

const Layout = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <PersistentDrawerLeft> 
                { title &&  <h1 style={{display: 'flex', placeContent: 'center'}}>{title}</h1> }
                { children }
            </PersistentDrawerLeft> 
            {/* <StickyFooter />  */}
        </ThemeProvider>
    )
}

export default Layout