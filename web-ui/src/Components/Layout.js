import React from 'react' 
import PersistentDrawerLeft from './PersistentDrawerLeft'

const Layout = ({children, title}) => {
    return (
        <PersistentDrawerLeft> 
            <h1 style={{display: 'flex', placeContent: 'center'}}>{title}</h1>
            { children }
        </PersistentDrawerLeft> 
    )
}

export default Layout