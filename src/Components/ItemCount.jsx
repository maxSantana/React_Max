import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

 const ItemCount = ({stock, handleOnAdd}) => {
     
      const [counter, setCounter] = useState(0);

      const Incremento = () =>{
            if (counter < stock){
                setCounter (counter + 1)
            }
          };
      const Decremento = () => {
            if (counter > 0){
                setCounter (counter - 1)
            }
          }
        
  return (
    <> 
     
    <div className="counter">
   
        <Container>
          <Row>
            <Col>
              <Button className="Incremento" onClick={Incremento} variant="success" size="sm">+</Button>
            </Col>
            <Col>
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

export default ItemCount;
