import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { formatPrice } from '../../utilities/Utilities';
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'

function Cart() {
    const cartCtx = useContext(CartContext);

    if(cartCtx.products.length) {
        return (
                <div className='cart-container'>
                    {cartCtx.products.map((item, i) => <ItemCart itemCart={item} key={item.id} />)}
                    <div className='cart-totals'>
                        <span>Total</span>
                        <span>${formatPrice(cartCtx.getTotal())}</span>
                    </div>
                    <Link to={'/checkout'}> <button className='btn-endBuy' >Iniciar compra</button> </Link> 
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


