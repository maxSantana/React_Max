import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    const { totalItems } = useContext(CartContext)
  return (
    <Link to={'/Cart'}>
        <FontAwesomeIcon icon={faCartShopping} />
    <spam>( {totalItems} )</spam>
    </Link>
  )
}

export default CartWidget