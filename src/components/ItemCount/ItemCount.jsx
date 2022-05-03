import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd }) {
  const [cuenta, setCuenta] = useState(1);
  
  const handleAdd = () => {
    ( (cuenta+1) <= stock ) ? setCuenta(cuenta+1) : setCuenta(cuenta);
  }
  const handleTake = () => {
    ( (cuenta-1) >= (initial) ) ? setCuenta(cuenta-1) : setCuenta(cuenta);
  }

  return (
    <div className='item-count'>
      <div className='keypad-cart'>
        <button className='btn-q' onClick={() => handleTake() } >-</button>
        <p className='Quantity'> {cuenta} </p>
        <button className='btn-q' onClick={() => handleAdd() } >+</button>
      </div>
        <button className='btn-cart' onClick={ () => {(cuenta<=stock)?onAdd():console.log("No hay stock")} } >Agregar al carrito</button>
    </div>
  );
}
export default ItemCount