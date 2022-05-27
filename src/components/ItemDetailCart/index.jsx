import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

function ItemDetailCart() {
  return (
    <div className='cartBuy-container'>
      <Link className='btn-cartBuy' to={`/cart`}>Ir al carrito</Link> 
    </div>
  );
}
export default ItemDetailCart