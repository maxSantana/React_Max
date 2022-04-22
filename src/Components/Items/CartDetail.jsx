import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

const CartDetail = () => {
    const { cart, removeFromCart, buyAll } = useContext(CartContext)

    console.log(cart)
  return (
  <>

            <div>
                <h1>SHopping Cart</h1>
                <h2>{cart.lenght}</h2>
            </div>
            <div>
                <h3>Detalle de productos</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
                <h3>Total</h3>
            </div>
            <div>
                {cart.lenght > 0 && cart.map((item) => (
                    <div>
                        <img className='h-24' src={item.image} alt='algo' />
                        <button onClick={() => removeFromCart(item.id)}> Remove </button>
                    </div>
                ))}

            </div>
            <div>
             
              <Link to="/">Continue comprando </Link>
            </div>
            <div>
                <h1>Resumen</h1>
                <div>
                    <span >Items 1</span>
                    <span >$10</span>
                </div>
            </div>
            
        </>)
}

export default CartDetail