import React from 'react' 
import pages from './Pages'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'



export default function Header(){
    return (
        <header>
            <aside style={{ fontVariant: 'small-caps'}}>
                Home Inventory 
            </aside>
            <nav>
                <ul>
                    { pages.map( page =>  <CustomLink {...page} /> ) }
                </ul>
            </nav>
            <aside>
                <Link to="/account">
                    <i class="fas fa-user-circle"></i>
                </Link>
            </aside>
        </header>
    )
}

function CustomLink({ exact, key, path, display}) {
    return <li key={key}>
        <NavLink exact={exact} to={path} activeStyle={{ fontWeight: 'bold', fontSize: '1.1rem'}}>{display}</NavLink>
    </li>

}