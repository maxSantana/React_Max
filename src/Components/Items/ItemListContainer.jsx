import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import {traerProductos} from '../Productos';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemListContainer () {


  const [item, setItems] = useState([]);
  const { categoriaId } = useParams();
 console.log(categoriaId)


  useEffect(() => {
    const db = getFirestore();
    let productosRef = collection(db, 'Fender');

    getDocs(productosRef).then((res) => {
     
        setItems(res.docs.map(p => ({id: p.id, ...p.data()})))
      })
      
      
    }, []);

    
  /*   traerProductos(categoriaId)
      .then(resultado => setItems(resultado))
      .catch(err => console.log(err))
  }, [categoriaId])*/
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