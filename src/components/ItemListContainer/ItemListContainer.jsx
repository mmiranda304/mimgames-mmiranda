import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getItems} from '../Utilities.js'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {  
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    getItems()
    .then(res => { 
      categoryId  ? setProducts(res.filter(item => item.category === categoryId))
                  : setProducts(res);     
    })
    .catch(err => {
      console.log(err);
      alert("Catch Error! Check console");
    });
  }, [categoryId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList items={products} />   
    </>
  )
}
export default ItemListContainer