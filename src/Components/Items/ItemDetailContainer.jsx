import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerProductos } from '../Productos'


const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState ({})

    useEffect (()=> {
            traerProductos()
            .then((res)=>{setProducto(res)})
            .catch((err)=>{console.log(err)})

    }, [])
   
    return (
    <ItemDetail prod={producto}/>
  )
}

export default ItemDetailContainer