import React, { createContext, useContext, useState } from 'react'


export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const isInCart = (id) => {cart.some(item => item.id === id)}


  const addToCart = (item, quantity) => {
        console.log(item)
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

  
  return (
            <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart}}>
              {children}
            </CartContext.Provider>
          )
  }
export default CartContextProvider