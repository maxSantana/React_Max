import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const CartIcon = () => {
  return (
   <>
   <FontAwesomeIcon icon={faCartShopping} />
   <FontAwesomeIcon icon="fa-thin fa-cart-shopping" />
   </>
  )
}

export default CartIcon