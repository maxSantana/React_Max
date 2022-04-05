import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import customFetch from '../Utils/customFetch';
import productos from '../Productos';
import s from './ItemListContainer.module.css'

function ItemListContainer () {

  const [item, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [item])

  return ( 
    <div className={s.ContainerI}>
               <ItemList productos={item} />
       
    </div >
    
  )
}

export default ItemListContainer