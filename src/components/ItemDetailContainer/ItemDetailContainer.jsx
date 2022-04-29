import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import IMG_BUNNYKINGDOM from '../img/BUNKIN_1.jpg'
import IMG_BHOUSEHILL from '../img/BHH_2.jpg'
import IMG_TTBURRITO from '../img/TTBURR_1.jpg'
import IMG_NLTNUP from '../img/NLTNUP_1.jpg'

function ItemDetailContainer() {

const onAdd = () => {     /* En cumplimiento con desafío N° 4 */
  return console.log("Agregado al carrito");
}
  const [product, setProduct] = useState([]);
  const itemBknd = {
    id:      1,
    title:  'Bunny Kingdom',
    price:  '$13.401',
    img:    IMG_BUNNYKINGDOM,
    stock:  10,
    category: 'family',
    players:  '2-4',
    age:    '14+',
    gtime:  '45 min.'
  };

  function getItem() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemBknd);
      }, 2000);
    });
    return myPromise;
  }
  getItem()
  .then(res => {setProduct(res)});
  
  return (
    <>
      <ItemDetail item={product} onAdd={onAdd} />
    </>
  );
} 
export default ItemDetailContainer