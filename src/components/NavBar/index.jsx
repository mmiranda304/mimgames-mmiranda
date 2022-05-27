import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import logo from '../assets/BrandLogo.jpg';
import './index.css';

function NavBar() {
    return (
        <div className='navBar-container'>

            <span><Link className='navLink' to={'/'}><img src={logo} alt="logo" /></Link> </span>        
            <nav>
                <Link className='navLink' to={'/'}>Inicio</Link>
                <div className='dropdown'>
                    <Link className='dropdown-link' to={'/'}>Tienda</Link>
                    <div className='dropdown-content'>
                        <Link className='dropdown-link' to={'/category/strategy'}>Estrategia</Link>
                        <Link className='dropdown-link' to={'/category/family'}>Familiares</Link>
                        <Link className='dropdown-link' to={'/category/cards'}>Cartas</Link>
                    </div>
                </div>
                <Link className='navLink' to={'/contact'}>Contacto</Link> 
            </nav>
            <CartWidget/>
        </div>
    );
}
export default NavBar;
