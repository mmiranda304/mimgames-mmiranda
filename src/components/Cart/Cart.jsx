import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'

function Cart() {
    const cartCtx = useContext(CartContext);
    const getPrice = () => {
        return cartCtx.products.reduce((totalPrice, item) => totalPrice = totalPrice + (item.quantity * item.price), 0);
    }

    if(cartCtx.products.length) {
        return (
                <div className='cart-container'>
                    {cartCtx.products.map((item, i) => <ItemCart itemCart={item} key={item.id} />)}
                    <div className='cart-totals'>
                        <span>Total</span>
                        <span>${getPrice()}</span>
                    </div>
                    <button className='btn-endBuy' >Terminar compra</button>
                </div>
            );
    }
    return (
        <div className='emptyCart-container'>
            <p>El carrito de compras está vacío.</p>
            <Link to={'/'}> <button className='btn-emptycart' >Ir a la Tienda</button> </Link> 
        </div>
    );
}
export default Cart


