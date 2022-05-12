import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer'
import CartContextProvider from './context/CartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>         
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a MIM Games!' />} /> 
            <Route path='/item/:id' element={<ItemDetailContainer/>} />      
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />      
            <Route path='/cart' element={<CartContainer/>} />      
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
