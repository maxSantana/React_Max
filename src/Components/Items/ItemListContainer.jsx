import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
// import {traerProductos} from '../Productos';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'


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
      <Row xs={1} md={2} className="g-4">
        <Card style={{ height: '30%', width: '100%', margin: "0 auto"}} className="bg-dark text-white">
          <Card.Img src="https://www.maxpixel.net/static/photo/1x/Header-Flame-Guitar-Bokeh-Banner-Wallpaper-Music-3567767.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h1> BIENVENIDO A E-MUSIC MAX STORE </h1></Card.Title>
            <Card.Text>
              <h2>En esta tienda encontraras guitarras exclusivas, de la mejor calidad!</h2>
            </Card.Text>
            <Card.Text>Navega y no dudes en hacer todas las consultas que requieras</Card.Text>
          </Card.ImgOverlay>
        </Card>
        </Row>
      </div>
      <br />
      <div className={s.ContainerI}>
     
          <ItemList product={item} />
      
      </div >
    </>
  )
}


export default ItemListContainer