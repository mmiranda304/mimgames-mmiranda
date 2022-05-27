import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Contact from './pages/Contact';
import Checkout from './components/Checkout';
import CartContainer from './pages/CartContainer'
import CartContextProvider from './context'
import './App.css'

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
            <Route path='/contact' element={<Contact/>} />      
            <Route path='/cart' element={<CartContainer/>} />      
            <Route path='/checkout' element={<Checkout/>} />      
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
