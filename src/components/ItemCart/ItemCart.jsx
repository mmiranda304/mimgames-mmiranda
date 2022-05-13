import React, { useContext } from 'react'
import {FaTrash} from "react-icons/fa"
import { CartContext } from '../../context/CartContext';
import './ItemCart.css'

function ItemCart({itemCart}) {
    const cartCtx = useContext(CartContext);

    return (
        <div className='cart-item'>
            <div className='cart-img'>
                <img src={itemCart?.img} alt={'img'}/>
            </div> 
            <div className='cart-body'>
                <h5 className='item-title'>{itemCart?.title}</h5>
                <p className='item-price'>${itemCart?.price}</p>
                <p className='item-quantity'>Cantidad: {itemCart?.quantity}</p>
            </div>
            <div className='cart-button'>
                <button className='trashButton' onClick={() => cartCtx.removeItem(itemCart.id)}> <FaTrash /> </button>
            </div>
        </div>
  )
}

export default ItemCart