import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerProducto } from '../Productos'


const ItemDetailContainer = () => {
  
  const [details, setDetails] = useState ({})

  useEffect(() => {
    traerProducto()
      .then(resultado => setDetails(resultado))
      .catch(err => console.log(err))
  }, [details])
    return (
    <ItemDetail details={details}/>
  )
}

export default ItemDetailContainer