
import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'
import s from './Item.module.css'

export function Item (productos) {
  return (
    <div className={s.Cards}>
      
            <Card key={productos.id}>
              <Card.Img variant="top" src={productos.imagen} />
              <Card.Body>
                <Card.Title>{productos.nombre}</Card.Title>
                <Card.Text>
                  PRECIO: $ {productos.precio}
                </Card.Text>
                CANTIDAD: <ItemCount initial={1} stock={8} />
              </Card.Body>
            </Card>
          
    </div>
  )
}

