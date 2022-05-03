import React from 'react'
import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'

function ItemDetail({item, onAdd}) {
  
  return (
    <div className='itemDetail'>
      <div className='img-container'>
        <img src={item?.img} alt={'img'}/>
      </div>
      
      <div className='itemDetail-body'>
        <h5 className='item-title'>{item?.title}</h5>
        <p className='item-price'>{item?.price}</p>
        <div className='specs'>
          <p className='item-players'>Cantidad de jugadores: {item?.players}</p>
          <p className='items-gtime'>Tiempo de juego: {item?.ptime}</p>
          <p className='items-age'>Edad: {item?.age}</p>
        </div>
        
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />   {/* Desafío 4 */}
      </div>
    </div>
  );
}
export default ItemDetail