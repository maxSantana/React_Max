import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerProducto } from '../Productos'
import { useParams } from 'react-router-dom'



function ItemDetailContainer () {
  
  const [item, setItem] = useState ({})
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    traerProducto(parseInt(id))
      .then(resultado => setItem(resultado))
      
  }, [id])
  console.log(item)

    return (
  
      <div>
        <ItemDetail id={item.id} 
                    nombre={item.nombre} 
                    imagen={item.imagen} 
                    specs={item.specs}/>
      </div>
  )
}

export default ItemDetailContainer