import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import s from '../Items/Item.Detail.module.css'
import ItemCount from '../ItemCount'

function ItemDetail({id, nombre, specs, imagen} ) {

const [cantidad, setCantidad] = useState(0);

function handleOnAdd (q){
  setCantidad(q)
  console.log(cantidad)
}

  return (
    <Container fluid>
        <Row md={2}>
              <Col>
                <Card key={id}>
                  <Card.Img className={s.imagen} variant="top" src={imagen} />
                </Card>
              </Col>
              <Col>
              
                  <Card.Body>
                    <div className={s.Text}>
                    <Row>
                      <Card.Title>{nombre}</Card.Title>
                    </Row>
                    </div>
                    <Row>
                      <div className={s.Text}>
                      <Card.Text>
                        Specs: {specs}
                        
                      </Card.Text>

                      </div>
                      <div>CANTIDAD: <ItemCount stock={5} onAdd={handleOnAdd}/></div>
                    </Row>
                  </Card.Body>
              </Col>            
        </Row>  
    </Container>

  )
}

export default ItemDetail