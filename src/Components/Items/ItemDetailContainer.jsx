import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerProducto } from '../Productos'
import { useParams } from 'react-router-dom'



function ItemDetailContainer () {
  
  const [item, setItem] = useState ({})
  const { id } = useParams();
  
  useEffect(() => {
    traerProducto(parseInt(id))
      .then(resultado => setItem(resultado))
      
  }, [id])
  console.log(item)

    return (
  
      <div>
        <ItemDetail id={item.id} 
                    nombre={item.nombre}
                    precio={item.precio}
                    imagen={item.imagen}
                    imagen2={item.imagen2} 
                    texts={item.texts}
                    titulo1={item.titulo1}
                    descripcion1={item.descripcion1}
                    titulo2={item.titulo2}
                    descripcion2={item.descripcion2}
                    titulo3={item.titulo3}
                    descripcion3={item.descripcion3}
                    titulo4={item.titulo4}
                    descripcion4={item.descripcion4}
                    titulo5={item.titulo5}
                    descripcion5={item.descripcion5}
                    titulo6={item.titulo6}
                    descripcion6={item.descripcion6}
                    titulo7={item.titulo7}
                    descripcion7={item.descripcion7}
                    titulo8={item.titulo8}
                    descripcion8={item.descripcion8}
                    titulo9={item.titulo9}
                    descripcion9={item.descripcion9}
                    titulo10={item.titulo10}
                    descripcion10={item.descripcion10}
                    titulo11={item.titulo11}
                    descripcion11={item.descripcion11}
                    titulo12={item.titulo12}
                    descripcion12={item.descripcion12}
                    
                    />
      </div>
  )
}

export default ItemDetailContainer