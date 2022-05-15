import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
// import {traerProductos} from '../Productos';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


function ItemListContainer () {


  const [item, setItems] = useState([]);
  const { categoriaId } = useParams();
 console.log(categoriaId)




  useEffect(() => {
    const db = getFirestore();
    if (categoriaId) {
      const prodFiltr = query(collection(db, 'Fender'), where('categoriaId', '==', categoriaId));
      getDocs(prodFiltr).then((res) => {
        setItems(res.docs.map(p => ({ id: p.id, ...p.data() })))
      })
    } else {
      let productosRef = collection(db, 'Fender');
      getDocs(productosRef).then((res) => {
        setItems(res.docs.map((p) => ({ id: p.id, ...p.data() })))
      })
    }
  }, [categoriaId]);
 
  return (
    <>
      <br />
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-purple-minimalistic-glare-music-notes-banner-background-image_210610.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h1> BIENVENIDO A E-MUSIC MAX STORE </h1></Card.Title>
            <Card.Text>
              <h2>En esta tienda encontraras guitarras exclusivas, de la mejor calidad!</h2>
            </Card.Text>
            <Card.Text>Navega y no dudes en hacer todas las consultas que requieras</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <br />
      <div className={s.ContainerI}>
     
          <ItemList product={item} />
      
      </div >
    </>
  )
}


export default ItemListContainer