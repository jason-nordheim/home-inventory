import React from 'react' 
import './Header.css'

export default function Header(){
    return (
        <header>
            <aside>
                Home Inventory 
            </aside>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Items</li>
                    <li>Locations</li>
                    <li>Vendors</li>
                </ul>
            </nav>
        </header>
    )
}