import React from 'react'
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utilities';
import './index.css'

function Item({item}) {
  return (
    <div className='item'>
      <div className='img-container'>
        <img src={item?.img} alt={item?.title} />
      </div>
      <div className='item-body'>
        <h5 className='item-title'>{item?.title}</h5>
        <p className='item-text'>${formatPrice(item?.price)}</p>
        <Link className='button-item' to={`/item/${item.id}`}>Ver producto</Link>
      </div>
    </div>
  )
}
export default Item