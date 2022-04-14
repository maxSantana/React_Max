import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../Utils/customFetch'
import { productos } from '../Productos'



function ItemDetailContainer () {
  
  const [item, setItem] = useState ([])

  useEffect(() => {
    customFetch(2000, productos)
      .then(resultado => setItem(resultado.find(item => item.id === 1)))
      
  }, [])
  console.log(item)

    return (
  
      <div>
        <ItemDetail key={item.id} 
                    nombre={item.nombre} 
                    imagen={item.imagen} 
                    specs={item.specs}/>
      </div>
  )
}

export default ItemDetailContainer