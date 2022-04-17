import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <nav>
            <h1>MIM Games</h1>
            <ul>
                <a href='#'>Home</a>
                <a href='#'>Tienda</a>
                <a href='#'>Contacto</a>
            </ul>
        </nav>
    );
}

export default NavBar;