import React, { createContext, useState } from 'react'


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
    const addToCart = (item) => {
        const idProductos = cart.findIndex((cartItem) => cartItem.id === item.id)
        if (idProductos !== -1) {
          const newCart = [...cart];
          newCart[idProductos].count = newCart[idProductos].count + item.count;
          setCart(newCart);
              } else {
                setCart([...cart, item])
              }
          } 

    const removeFromCart = (id) => {
      setCart(cart.filter((productos)=> productos.id !== id))
            };
    
    const buyAll = () => setCart([]);

  
  return (
            <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll}}>
              {children}
            </CartContext.Provider>
          )
  }
export default CartContextProvider