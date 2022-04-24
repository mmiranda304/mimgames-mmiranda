import React, {useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import IMG_BUNNYKINGDOM from '../img/BUNKIN_1.jpg'
import IMG_BHOUSEHILL from '../img/BHH_2.jpg'
import IMG_TTBURRITO from '../img/TTBURR_1.jpg'

function ItemListContainer({greeting}) {  

  const onAdd = () => {     /* En cumplimiento con desafío N° 4 */
    return console.log("Agregado al carrito");
  }
  /* Desafío N° 5 - Simulación de retrasos de red al recibir datos */
  const itemsBknd = [
    {
      id:      1,
      title:  'Bunny Kingdom',
      price:  '$13401',
      img:    IMG_BUNNYKINGDOM
    },
    {
      id:      2,
      title:  'Betrayal at House on the Hill',
      price:  '$13.410',
      img:    IMG_BHOUSEHILL
    },
    {
      id:      3,
      title:  'Throw Throw Burrito',
      price:  '$21.560',
      img:    IMG_TTBURRITO
    }
  ];
  const [products, setProducts] = useState([]);

  function getItems() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsBknd);
      }, 2000);
    });
    return myPromise;
  }
  getItems()
    .then(res => {setProducts(itemsBknd)});
  /********************************************************* */
  
  return (
    <>
      <h1>{greeting}</h1>   {/*En cumplimiento con desafío N° 3*/}
      <ItemList items={products} />
    </>
  )
}
export default ItemListContainer