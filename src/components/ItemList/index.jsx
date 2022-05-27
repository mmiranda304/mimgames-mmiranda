import React from 'react'
import Item from '../Item'
import './index.css'

function ItemList({items}) {
  return (
    <div className='item-list'>
      {items.map( (item, i) => <Item item={item} key={item.id} /> )}
    </div>
  )
}
export default ItemList