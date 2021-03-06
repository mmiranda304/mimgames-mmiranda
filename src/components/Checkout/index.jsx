import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';
import { collection, addDoc } from "firebase/firestore";
import db from '../../services/firebase';
import Loader from '../Loader';
import './index.css'

function Checkout() {
    const cartCtx = useContext(CartContext);
    
    const [orderID, setOrderID] = useState();
    const [loading, setLoading] = useState(false);
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    });
    const {Nombre, Email, Telefono} = buyer;  
    
    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoading(true);
        try {
            const col = collection(db, "Orders");
            const order = await addDoc(col, data);
            setOrderID(order.id);
            cartCtx.clear();
            setLoading(false);
        } 
        catch (error) { 
            console.log("Catch error in generate Order");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const items = cartCtx.products.map(e => {return {id:e.id, title:e.title, price:e.price, amount:e.quantity}});
        const total = cartCtx.getTotal();
        const data = {buyer, items, date, total};
        generateOrder(data);
    }

    return (
        <div>
            <h1 className='checkout-title'>Finalizar Compra</h1>
            {(loading)
                ? <Loader/>
                :(!orderID && <div className='checkout-container'>
                    <h4>Completar datos</h4>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name='Nombre' 
                            placeholder='Nombre'
                            value={Nombre}
                            className='input-checkout' 
                            onChange={handleInputChange}
                            required
                        />
                        <input 
                            type="email" 
                            name='Email' 
                            placeholder='Email' 
                            value={Email}
                            className='input-checkout' 
                            onChange={handleInputChange}
                            required
                        />
                        <input 
                            type="text" 
                            name='Telefono' 
                            placeholder='Tel??fono' 
                            value={Telefono}
                            pattern='^[0-9]{2,3}-? ?[0-9]{6,7}$'
                            title='Debe contener entre 8 y 10 n??meros.'
                            className='input-checkout' 
                            onChange={handleInputChange}
                            required
                        />
                        <input 
                            type="submit" 
                            value="Finalizar Compra" 
                            className='input-endBuy' 
                        />
                    </form>
                </div>)
            }
            <div>
            {orderID && (
                <div className='checkout-container'>
                    <h4>Compra finalizada con ??xito!</h4>
                    <p>{`Tu c??digo de compra es: ${orderID}`}</p>
                    <Link to={'/'}> <button className='btn-buy' >Seguir comprando</button> </Link>
                </div>)
            }
            </div>
        </div>
    );
}
export default Checkout