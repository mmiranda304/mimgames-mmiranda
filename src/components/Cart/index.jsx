import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context'
import { formatPrice } from '../../utilities';
import ItemCart from '../ItemCart'
import './index.css'

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
                <Link className='btn-endBuy' to={'/checkout'}>Iniciar compra</Link> 
            </div>
            );
    }
    return (
        <div className='emptyCart-container'>
            <p>El carrito de compras está vacío.</p>
            <Link className='btn-emptycart' to={'/'}>Ir a la Tienda</Link> 
        </div>
    );
}
export default Cart


