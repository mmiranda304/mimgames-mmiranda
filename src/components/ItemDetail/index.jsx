import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount'
import ItemDetailCart from '../ItemDetailCart';
import { CartContext } from '../../context';
import { formatPrice } from '../../utilities';
import  './index.css'

function ItemDetail({item}) {
  const [cantProd, setCantProd] = useState(null);
  const cartCtx = useContext(CartContext);

  const onAdd = (item, quantityToAdd) => {
    setCantProd(quantityToAdd);
    cartCtx.addItem(item, quantityToAdd);
  }

  return (
    <div className='itemDetail'>
      <div className='img-container'>
        <img src={item?.img} alt={'img'}/>
      </div>
      
      <div className='itemDetail-body'>
        <h5 className='item-title'>{item?.title}</h5>
        <p className='item-price'>${formatPrice(item?.price)}</p>
        <div className='specs'>
          <p className='item-players'>Cantidad de jugadores: {item?.players}</p>
          <p className='items-gtime'>Tiempo de juego: {item?.ptime}</p>
          <p className='items-age'>Edad: {item?.age}</p>
        </div>

        {cantProd ? <ItemDetailCart />   
                  : <ItemCount className='it' stock={item.stock} initial={1} onAdd={onAdd} item={item} />}
      </div>
    </div>
  );
}
export default ItemDetail