import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd }) {
  const [quantityToAdd, setCuenta] = useState(initial);
  
  const handleAdd = () => {
    ( (quantityToAdd+1) <= stock ) ? setCuenta(quantityToAdd+1) : setCuenta(quantityToAdd);
  }
  const handleTake = () => {
    ( (quantityToAdd-1) >= (initial) ) ? setCuenta(quantityToAdd-1) : setCuenta(quantityToAdd);
  }

  return (
    <div className='item-count'>
      <div className='keypad-quantity'>
        <button className='btn-q' onClick={() => handleTake() } >-</button>
        <p className='Quantity'> {quantityToAdd} </p>
        <button className='btn-q' onClick={() => handleAdd() } >+</button>
      </div>
      <div className='keypad-cart'>
        <button className='btn-cartAdd' onClick={() => {(quantityToAdd<=stock) ? onAdd(quantityToAdd) : console.log("No hay stock")} } >
          Agregar al carrito
        </button>
        
      </div>
    </div>
  );
}
export default ItemCount