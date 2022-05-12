import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getItems} from '../../utilities/Utilities.js'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader.jsx'

function ItemListContainer({greeting}) {  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
    getItems()
    .then(res => { 
      categoryId  ? setProducts(res.filter(item => item.category === categoryId))
                  : setProducts(res);
      setLoading(false);
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
  else {
    return (
      <>
        <h1>{greeting}</h1>
        <ItemList items={products} />
      </>
    )
  }
}
export default ItemListContainer