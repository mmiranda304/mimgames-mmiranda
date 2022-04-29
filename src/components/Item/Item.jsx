import React from 'react'
import './Item.css'


function Item({item}) {
  return (
    <div className='item'>
        <div className='img-container'>
            <img src={item?.img} />
        </div>
        <div className='item-body'>
            <h5 className='item-title'>{item?.title}</h5>
            <p className='item-text'>{item?.price}</p>
            <button className='show-item'>Ver producto</button>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}   {/* Desafío 4 */}
        </div>
  </div>
  )
}
export default Item