import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer'
import CartContext from './components/context/cart-context';
import IMG_BUNNYKINGDOM from './components/img/BUNKIN_1.jpg'
import IMG_BHOUSEHILL from './components/img/BHH_2.jpg'
import IMG_TTBURRITO from './components/img/TTBURR_1.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{
          products: [
            {
              id:      0,
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
                id:      1,
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
                id:      2,
                title:  'Throw Throw Burrito',
                price:  '$9.040',
                img:    IMG_TTBURRITO,
                stock:  10,
                category: 'family',
                players:  '2-6',
                age:    '7+',
                ptime:  '60 min'
            }
          ]
        }}>
          <NavBar/>     
          
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a MIM Games!' />} /> 
            <Route path='/item/:id' element={<ItemDetailContainer/>} />      
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />      
            <Route path='/cart' element={<CartContainer/>} />      
          </Routes>
          </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
