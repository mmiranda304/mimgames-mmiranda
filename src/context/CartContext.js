import React from 'react'
import { createContext, useState } from "react";

export const CartContext =  createContext({
    products: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    getTotal: () => {}
});

const CartContextProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            return setProductsList(
                productsList.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + quantity}
                                           : item
                )
            );
        }
        setProductsList((prevState) => [...prevState, {...product, quantity}]);
    }

    const removeItem = (id) => {
        setProductsList(productsList.filter(i => i.id !== id));
    }

    const clear = () => {
        setProductsList([]);
    }

    const isInCart = (id) => {
       return productsList.some((product) => product.id === id);
    }
    
    const getCartQuantity = () => {     
        return productsList.reduce((total, item) => total = total + item.quantity, 0);
    }
    
    const getTotal = () => {
        return productsList.reduce((totalPrice, item) => totalPrice = totalPrice + (item.quantity * item.price), 0);
    }

    return (
        <CartContext.Provider value={{
            products: productsList,
            addItem,
            removeItem,
            clear,
            isInCart,
            getCartQuantity,
            getTotal
        }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;