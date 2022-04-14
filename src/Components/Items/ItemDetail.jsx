import React from 'react'
import Card from 'react-bootstrap/Card'
import s from './Item.module.css'

function ItemDetail({id, nombre, specs, imagen} ) {
  return (
    <div className={s.Cards}>
      
            <Card key={id}>
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
              
                <Card.Text>
                Specs: {specs}
                </Card.Text>
                
              </Card.Body>
            </Card>
          
    </div>

  )
}

export default ItemDetail