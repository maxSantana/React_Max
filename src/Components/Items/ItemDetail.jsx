import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import s from '../Items/Item.Detail.module.css'
import ItemCount from '../ItemCount'
import { useCartContext } from './CartContext'


function ItemDetail({id, nombre, precio, specs, imagen, imagen2, texts, 
                      titulo1, descripcion1, titulo2, descripcion2, titulo3, descripcion3, 
                      titulo4, descripcion4, titulo5, descripcion5, titulo6, descripcion6, 
                      titulo7, titulo8, descripcion8, titulo9, descripcion9, 
                      titulo10, descripcion10, titulo11, descripcion11, titulo12, descripcion12,  } ) {

const { addToCart } = useCartContext()    

function handleOnAdd (q){
  addToCart({id, nombre, precio, specs, imagen, imagen2, texts, 
              titulo1, descripcion1, titulo2, descripcion2, 
              titulo3, descripcion3, titulo4, descripcion4, 
              titulo5, descripcion5, titulo6, descripcion6, 
              titulo7, titulo8, descripcion8, titulo9, descripcion9, 
              titulo10, descripcion10, titulo11, descripcion11, 
              titulo12, descripcion12,}, q)
  
                  }

  return (
    <Container fluid>
        <Row md={2}>
          {/* Columna de imagen */}
              <Col>
                <Row>
                      <Card key={id}>
                        <Card.Img className={s.imagen} variant="top" src={imagen} />
                      </Card>
                </Row>
                <Row>
                            <div><ItemCount stock={5} onAdd={handleOnAdd}/>
                              
                            </div>
                </Row>
              </Col>

          {/* Columna de Texto */}
              <Col>
              
                    <Card style={{ width: '45rem' }}>
                      <Card.Img variant="top" className={s.imagen} src={imagen2} />
                      <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Title>USD {precio}</Card.Title>
                        <Card.Text>
                          {texts}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  <Card.Body>
                      
                    <Row>
                      <div className={s.Text}>
 
                          <Accordion>
                                <Accordion.Item eventKey="0">
                                      <Accordion.Header>{titulo1}</Accordion.Header>
                                      <Accordion.Body>{descripcion1}</Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                      <Accordion.Header>{titulo2}</Accordion.Header>
                                      <Accordion.Body>{descripcion2}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                      <Accordion.Header>{titulo3}</Accordion.Header>
                                      <Accordion.Body>{descripcion3}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                      <Accordion.Header>{titulo4}</Accordion.Header>
                                      <Accordion.Body>{descripcion4}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                      <Accordion.Header>{titulo5}</Accordion.Header>
                                      <Accordion.Body>{descripcion5}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                      <Accordion.Header>{titulo6}</Accordion.Header>
                                      <Accordion.Body>{descripcion6}</Accordion.Body>
                                </Accordion.Item>
                          </Accordion>

                      </div>
                      
                      <div>
                              <Card.Text className={s.titulos}>{titulo7}</Card.Text>
                              <Accordion>
                                <Accordion.Item eventKey="6">
                                      <Accordion.Header>{titulo8}</Accordion.Header>
                                      <Accordion.Body>{descripcion8}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                      <Accordion.Header>{titulo9}</Accordion.Header>
                                      <Accordion.Body>{descripcion9}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                      <Accordion.Header>{titulo10}</Accordion.Header>
                                      <Accordion.Body>{descripcion10}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                      <Accordion.Header>{titulo11}</Accordion.Header>
                                      <Accordion.Body>{descripcion11}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                      <Accordion.Header>{titulo12}</Accordion.Header>
                                      <Accordion.Body>{descripcion12}</Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                      </div>
                    </Row>
                  </Card.Body>
              </Col>            
        </Row>  
    </Container>

  )
}

export default ItemDetail