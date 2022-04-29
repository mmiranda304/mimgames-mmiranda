import React, {useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import IMG_BUNNYKINGDOM from '../img/BUNKIN_1.jpg'
import IMG_BHOUSEHILL from '../img/BHH_2.jpg'
import IMG_TTBURRITO from '../img/TTBURR_1.jpg'
import IMG_NLTNUP from '../img/NLTNUP_1.jpg'

function ItemListContainer({greeting}) {  
  
  const [products, setProducts] = useState([]);

  const itemsBknd = [
    {
      id:      1,
      title:  'Bunny Kingdom',
      price:  '$13.401',
      img:    IMG_BUNNYKINGDOM,
      stock:  6,
      category: 'family',
      players:  '2-4 jugadores',
      age:    '14+',
      ptime:  '45 min.'
    },
    {
      id:      2,
      title:  'Betrayal at House on the Hill',
      price:  '$13.490',
      img:    IMG_BHOUSEHILL,
      stock:  2,
      category: 'strategy',
      players:  '3-6',
      age:    '12+',
      ptime:  '60 min.'
    },
    {
      id:      3,
      title:  'Throw Throw Burrito',
      price:  '$9.040',
      img:    IMG_TTBURRITO,
      stock:  10,
      category: 'family',
      players:  '2-6',
      age:    '7+',
      ptime:  '60 min'
    },
    {
      id:      4,
      title:  'No lo testeamos ni un poco',
      price:  '$1.750',
      img:    IMG_NLTNUP,
      stock:  12,
      category: 'cards',
      players:  '2-6',
      age:    '7+',
      ptime:  '60 min'
    }
  ];

  function getItems() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsBknd);
      }, 2000);
    });
    return myPromise;
  }
  getItems()
    .then(res => {setProducts(res)});
  
  return (
    <>
      <h1>{greeting}</h1>   {/*En cumplimiento con desafío N° 3*/}
      <ItemList items={products} />
    </>
  )
}
export default ItemListContainer