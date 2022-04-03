import React, { useEffect, useState } from 'react'
import ItemList from './Item'
import customFetch from '../Utils/customFetch';
import productos from '../Productos';

function ItemListContainer () {

  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [items])

  return ( 
    <div>
      <ItemList productos={items}/>
    </div>
  )
}

export default ItemListContainer