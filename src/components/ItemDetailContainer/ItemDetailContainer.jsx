import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getItem} from '../Utilities.js'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  const {id} = useParams();
  const onAdd = () => {     /* En cumplimiento con desafío N° 4 */
    return console.log("Agregado al carrito");
  }

  useEffect(() => {
    getItem(id)
      .then(res => {setProduct(res)});
  }, [id]);
  
  
  return (
    <>
      <ItemDetail item={products} onAdd={onAdd} />
    </>
  );
} 
export default ItemDetailContainer