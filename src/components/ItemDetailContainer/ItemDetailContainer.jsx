import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getItem} from '../../utilities/Utilities.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader.jsx';

function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then(res => {
        setProduct(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert("Catch Error! Check console");
      });
  }, [id]);
  
  if(loading) {
    return (
      <Loader />
    );
  }
  else {
    return (
    <>
      {/* <ItemDetail item={products} onAdd={onAdd} /> */}
      <ItemDetail item={products} />
    </>
  );
  }
  
} 
export default ItemDetailContainer