import React from 'react'
import {Link} from 'react-router-dom';
import './ItemDetailCart.css'

function ItemDetailCart() {
  return (
    <div className='cartBuy-container'>
      <Link to={`/cart`}> <button className='btn-cartBuy' onClick={ () => {console.log("/cart")} } >Ir al carrito</button> </Link> 
    </div>
  );
}
export default ItemDetailCart