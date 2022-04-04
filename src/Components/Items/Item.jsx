import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'


function Item ({index, nombre, precio, imagen}) {
  return (
    <div>
      <Card key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {precio}
          </Card.Text>
          <ItemCount initial={1} stock={8}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item