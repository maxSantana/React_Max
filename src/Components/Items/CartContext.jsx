import React, { createContext, useContext, useState } from 'react'


export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  
  const addToCart = (item) => {
          const indexItem = cart.findIndex(p => p.id === item.id);
          if (indexItem !== -1) {
            const cartCopy = [...cart];
            cartCopy[indexItem].counter = cartCopy[indexItem].counter + item.counter;
            setCart(cartCopy);
          } else {
            setCart([...cart, item]);
            console.log(cart)
          }
        };

  const removeFromCart = (id) => {
      setCart(cart.filter(p => p.id !== id)) };
      
      
  const removeOne = (id) => {
        const index = cart.findIndex(p => p.id === id);
        if (index !== -1) {
            let newCart = [...cart];
            newCart[index].counter--;
            if (newCart[index].counter === 0) {
                newCart.splice(index, 1,);
            }
            setCart(newCart);
        }

    }
   const addOne=(id,stock)=>{
        const index = cart.findIndex(p => p.id === id);
        if (index !== -1) {
            let newCart = [...cart];
            newCart[index].counter++;
            if (newCart[index].counter > stock) {
                newCart[index].counter = stock;
            }
            setCart(newCart);
        }
    }
    
    const clearCart = () => setCart([]);

    const cant = () => {
      return cart.reduce((total, item) => total += item.counter*item.precio, 0)
    }
    const cantItems = () => {
      return cart.reduce((total, item) => total += item.counter, 0)
    }
    
    let valorTotal = cant();
    let totalItems = cantItems();
    
  
  return (
            <CartContext.Provider value={{cart, addToCart, removeFromCart, removeOne, addOne, clearCart, valorTotal, totalItems}}>
              {children}
            </CartContext.Provider>
          )
  }
export default CartContextProvider