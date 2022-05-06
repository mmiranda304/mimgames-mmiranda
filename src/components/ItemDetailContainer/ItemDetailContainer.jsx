import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getItem} from '../Utilities.js'
// import {onAdd} from '../Utilities.js'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getItem(id)
      .then(res => {setProduct(res)})
      .catch(err => {
        console.log(err);
        alert("Catch Error! Check console");
      });
  }, [id]);
  
  
  return (
    <>
      {/* <ItemDetail item={products} onAdd={onAdd} /> */}
      <ItemDetail item={products} />
    </>
  );
} 
export default ItemDetailContainer