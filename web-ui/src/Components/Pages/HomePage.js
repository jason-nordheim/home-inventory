import React from 'react' 
import './Page.css'

export default function HomePage() {
    return (
        <main>
            <h1>Home</h1>
            
        </main>
    )
}

function About() {
    return (
        <section>
            <h3>What is Home Inventory</h3>
            <p>
                Home Inventory is a utility that can help its users: 
                <ul>
                    <li>Itemize their belongings</li>
                    <li>Assess the total value of their belongings</li>
                    <li>Catalog items for sale</li>
                </ul>
            </p>
        </section>
    )
}