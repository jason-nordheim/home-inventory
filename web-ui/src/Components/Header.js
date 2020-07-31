import React from 'react' 
import pages from './Pages'
import { AccountDetails } from './AccountDetails'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'



export default function Header({userState, userActions}){
    
    return (
        <header>
            <aside style={{ fontVariant: 'small-caps'}}>
                Home Inventory 
            </aside>
            <nav>
                <ul>
                    { pages.map( page =>  <CustomLink key={page.key} {...page} /> ) }
                </ul>
            </nav>
            <aside>
                <Link to="/account">
                    <i className="fas fa-user-circle"></i>
                </Link>
            </aside>
        </header>
    )
}

function CustomLink({ exact, path, display, nav}) {
    if (nav) {
        return <li>
            <NavLink exact={exact} to={path} activeStyle={{ fontWeight: 'bold', fontSize: '1.1rem'}}>{display}</NavLink>
        </li>
    } else {
        return null 
    }

}