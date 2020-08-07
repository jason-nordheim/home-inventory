import React from 'react' 
import PersistentDrawerLeft from './PersistentDrawerLeft'
// import StickyFooter from './StickyFooter'

const Layout = ({children, title}) => {
    return (
        <>
            <PersistentDrawerLeft> 
                { title &&  <h1 style={{display: 'flex', placeContent: 'center'}}>{title}</h1> }
                { children }
            </PersistentDrawerLeft> 
            {/* <StickyFooter />  */}
        </> 
    )
}

export default Layout