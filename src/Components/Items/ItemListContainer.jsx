import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import {traerProductos} from '../Productos';
import s from './ItemListContainer.module.css'

function ItemListContainer () {

  const [item, setItems] = useState([]);

  useEffect(() => {
    traerProductos()
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [item])

  return (
    <>
      <br />
      <div className={s.ContainerI}>
     
          <ItemList product={item} />
      
      </div >
    </>
  )
}

export default ItemListContainer