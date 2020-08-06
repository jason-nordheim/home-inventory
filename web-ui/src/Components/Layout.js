import React from 'react' 
import PersistentDrawerLeft from './PersistentDrawerLeft'

const Layout = ({children}) => {
    return (
        <PersistentDrawerLeft> 
            { children }
        </PersistentDrawerLeft> 
    )
}

export default Layout