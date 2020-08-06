import React from 'react' 
import PersistentDrawerLeft from './PersistentDrawerLeft'

const Layout = (props) => {
    return (
        <PersistentDrawerLeft> 
            { props.children }
        </PersistentDrawerLeft> 
    )
}

export default Layout