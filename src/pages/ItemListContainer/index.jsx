import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../../utilities/index.js'
import ItemList from '../../components/ItemList'
import Loader from '../../components/Loader/'
import './index.css'

function ItemListContainer({greeting}) {  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
    getItems(categoryId)
      .then(snapshot => { 
        setLoading(false);
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })) 
      })
      .catch(err => {
        console.log(err);
        alert("Catch Error! Check console");
      });
  }, [categoryId]);

  if(loading) {
    return(
      <Loader />
    );
  }
  return (
    <>
      <h1 className='greeting'>{greeting}</h1>
      <ItemList items={products} />
    </>
  )
}
export default ItemListContainer