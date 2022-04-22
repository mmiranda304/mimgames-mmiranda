import React from 'react'
import './ItemListContainer.css'
import BG_BHH from '../img/BUNKIN_1.jpg'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({greeting}) {  

  const onAdd = () => {     {/* En cumplimiento con desafío N° 4 */}
    return console.log("Agregado al carrito");
  }

  return (
    <>
      <h1>{greeting}</h1>   {/*En cumplimiento con desafío N° 3*/}

      <div className='item'>
        <div className='img-container'>
          <img src={BG_BHH} alt="logo"/>
        </div>
        <div className='item-body'>
          <h5 className='item-title'>Bunny Kingdom</h5>
          <p className='item-text'>$ 13.900</p>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </>
  )
}
export default ItemListContainer