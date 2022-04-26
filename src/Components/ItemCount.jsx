import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


export default function ItemCount ({stock, onAdd}) {
     
      const [counter, setCounter] = useState(0);

      const Incremento = () => {if (counter < stock){ setCounter (counter + 1)}};
      const Decremento = () => {if (counter > 0){setCounter (counter - 1)}}

  
  return (
    <> 
     
    <div className="counter">
   
        <Container>
          <Row>
            <Col>
              <Button className="Incremento" onClick={Incremento} variant="success" size="sm">+</Button>
            </Col>
            <Col>
            <Button variant="danger" size="sm" onClick={()=> onAdd(counter)} >Agregar al carrito</Button>
            <Button variant="danger" size="sm"><Link to="/Cart"      >Ir al carrito</Link></Button>
            <Form.Control placeholder={counter}/>
            </Col>
            <Col>
              <Button className="Decremento" onClick={Decremento} variant="danger" size="sm">-</Button>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  )
}


