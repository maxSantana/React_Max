import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';



export default function ItemCount ({stock, handleOnAdd, item, addToCart}) {
     
      const [counter, setCounter] = useState(0);

      const Incremento = () => {if (counter < stock){ setCounter (counter + 1)}};
      const Decremento = () => {if (counter > 0){ setCounter (counter - 1)}}
      console.log(counter)
  
  return (
    <> 
     
    <div className="counter">
   
        <Container>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button className="Incremento" onClick={Incremento} variant="success" size="xs">+</Button>
                <Button className="Decremento" onClick={Decremento} variant="danger" size="xs">-</Button>
              </div>
              
            </Col>
            <Col> <Form.Control placeholder={counter} /> </Col>
          </Row>
          <br />
           <Row> 

            <Col>
            <div className="d-grid gap-2">
            <Button variant="outline-primary" size="lg" onClick={()=>{addToCart({...item, counter});handleOnAdd()}}>Agregar al carrito</Button>
            </div>
            
            </Col>
            <Col>
            <div className="d-grid gap-2">
            <Button variant="outline-primary" size="lg"><Link to="/Cart">Ir al carrito</Link></Button>
            </div>
            </Col>
             </Row>
        </Container>
    </div>
    </>
  )
}


