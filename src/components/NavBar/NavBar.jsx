import React from 'react';
import logo from '../assets/BrandLogo.jpg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <a href='#'><img src={logo} alt="logo" /></a>
            <ul>
                <a href='#'>Home</a>
                <a href='#'>Tienda</a>
                <a href='#'>Contacto</a>
            </ul>
            <CartWidget/>
        </nav>
    );
}
export default NavBar;