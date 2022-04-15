import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import {traerProductos} from '../Productos';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';


function ItemListContainer () {


  const [item, setItems] = useState([]);
  const { categoriaId } = useParams();


  useEffect(() => {
    traerProductos(categoriaId)
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [categoriaId])

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