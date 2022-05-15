
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import s from './Item.module.css'
import { Link } from 'react-router-dom'

export function Item ({ id , imagen, nombre, precio}) {
  return (
    <div className={s.Cards}>
      
            <Card key={id}>
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Button className={s.Boton} variant="light"><Link to={`/item/${id}`}>Ver Detalles</Link></Button>
                <Card.Text>
                PRECIO: U$D {precio}
                </Card.Text>
                
              </Card.Body>
            </Card>
          
    </div>
  )
}

