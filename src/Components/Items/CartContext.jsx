import React, { createContext, useContext, useState } from 'react'


export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const isInCart = (id) => {cart.some(item => item.id === id)}


  const addToCart = (item, quantity) => {
       
              if (isInCart(item.id)) {
                const newCart = cart.map(cartElement => {
                  if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                  } else return cartElement
                })
                setCart(newCart);
                  } else {
                setCart(prev => [...prev, { ...item, quantity }])
                  }
                } 

  const removeFromCart = (id) => {
      setCart(cart.filter(p => p.id !== id)) };
    
    const clearCart = () => setCart([]);

    const cant = () => {
      return cart.reduce((total, item) => total + item.counter*item.precio, 0)
    }
    const cantItems = () => {
      return cart.reduce((total, item) => total + item.counter, 0)
    }
  
  return (
            <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, cant, cantItems}}>
              {children}
            </CartContext.Provider>
          )
  }
export default CartContextProvider