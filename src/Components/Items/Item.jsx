
import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'
import s from './Item.module.css'
import { Link } from 'react-router-dom'

export function Item ({ id , imagen, nombre, precio}) {
  return (
    <div className={s.Cards}>
      
            <Card key={id}>
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Link to={`/item/${id}`}>Ver Detalles</Link>
                <Card.Text>
                PRECIO: $ {precio}
                </Card.Text>
                CANTIDAD: <ItemCount initial={1} stock={8} />
              </Card.Body>
            </Card>
          
    </div>
  )
}

