import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import customFetch from '../Utils/customFetch';
import productos from '../Productos';

function ItemListContainer () {

  const [item, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [item])

  return ( 
    <div>
     <ItemList productos={item}/>
    </div>
  )
}

export default ItemListContainer