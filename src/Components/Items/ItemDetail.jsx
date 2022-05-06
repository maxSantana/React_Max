import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import s from '../Items/Item.Detail.module.css'
import ItemCount from '../ItemCount'
import { useCartContext } from './CartContext'


function ItemDetail({item} ) {

const { addToCart } = useCartContext()    

function handleOnAdd (){}
  return (
    <Container fluid>
        <Row md={2}>
          {/* Columna de imagen */}
              <Col>
                <Row>
                      <Card key={item.id}>
                        <Card.Img className={s.imagen} variant="top" src={item.imagen} />
                      </Card>
                </Row>
                <Row>
                            <div><ItemCount item={item} handleOnAdd={handleOnAdd} addToCart={addToCart} stock={item.stock}/>
                              
                            </div>
                </Row>
              </Col>

          {/* Columna de Texto */}
              <Col>
              
                    <Card style={{ width: '45rem' }}>
                      <Card.Img variant="top" className={s.imagen} src={item.imagen2} />
                      <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Title>USD {item.precio}</Card.Title>
                        <Card.Text>
                          {item.descripcion}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  <Card.Body>
                      
                    <Row>
                      <div className={s.Text}>
 
                          
                      </div>
                      
                      <div>
                         
                      </div>
                    </Row>
                  </Card.Body>
              </Col>            
        </Row>  
    </Container>

  )
}

export default ItemDetail