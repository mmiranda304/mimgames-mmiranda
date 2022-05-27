import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import { CartContext } from '../../context';
import './index.css'

function CartWidget() {
  const cartCtx = useContext(CartContext);

  if(cartCtx.products.length) {
    return (
      <div className='cartWidget-container'>
        <Link className='navLink' to={'/cart'}> <span id='CartWidget'> <FaShoppingCart/></span> </Link> 
        <span className='bubble-quantity'>{cartCtx.getCartQuantity()}</span>
      </div>
    )
  }
  return (
    <div>
      <Link className='navLink' to={'/cart'}> <span id='CartWidget'> <FaShoppingCart/></span> </Link> 
    </div>
  )
}
export default CartWidget
