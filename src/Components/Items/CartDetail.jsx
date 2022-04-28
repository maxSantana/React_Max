import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem, Badge } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import s from '../Items/Item.Detail.module.css'
import { Container, Row } from 'react-bootstrap';

export default function CartDetail() {

  const {cart, clearCart, removeFromCart, buyAll, valorTotal, totalItems} = useContext(CartContext);
  console.log(cart);

  return (
    <>
    <Container fluid>
    <h1>Cart shopping</h1>
        <Row md={2}>
               
                <ListGroup as="ol">
                <div> {cart.length > 0 ? cart.map(item => 
                        
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                   
                                            <img src={item.imagen} alt="asd" className={s.imagen1}/> 
                                    
                                    
                                            <div className="ms-2 me-auto">
                                       
                                                <div className="fw-bold">{item.nombre}</div>
                                                <div className="fw-bold">{item.texts}</div>
                                                <div> $ {item.precio} - Cantidad: {item.quantity}</div>
                                                <Button variant="outline-secondary" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                                                
                                            </div>

                            </ListGroup.Item> ) : <div><Button as={Link} to="/" variant="outline-success">Back to shop</Button> <br/> 
                                
                        <h1>The cart is empty</h1>
                        </div> }
                        </div>
                </ListGroup>
                
                            { cart.length > 0 && 
                        <div>
                            <h2>Cantidad de Productos: {cart.length}</h2>  
                            <p>Total: $ {valorTotal}</p>
                            <p>{totalItems}</p>
                            
                            <hr/>
                            <Button variant="outline-success" onClick={() => buyAll()}>Buy Everything</Button>
                            <hr/>
                            <Button variant="outline-secondary" onClick={() => clearCart()}>Clean cart</Button>
                        </div>}
            </Row>  
        </Container>
    </>
  )
}