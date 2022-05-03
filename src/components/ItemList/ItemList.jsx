import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

function ItemList({items}) {
  return (
    <div className='item-list'>
        {items.map( (item, i) => <Item item={item} key={item.id} /> )}
    </div>
  )
}
export default ItemList