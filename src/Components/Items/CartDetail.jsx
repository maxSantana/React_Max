import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

// import { ListGroupItem } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import s from '../Items/Item.Detail.module.css'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


export default function CartDetail() {

  const {cart, clearCart, removeFromCart, removeOne, addOne, valorTotal} = useContext(CartContext);
  console.log(cart);

  return (
    <>
    <Container fluid>
    <h1>CARRITO DE COMPRAS</h1>
        <Row>       
                <ListGroup as="ol">
                <div> {cart.length > 0 ? cart.map(item => 
                        
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <Card style={{ width: '20rem', margin: "0 auto" }} key={item.id}>
                                            <img src={item.imagen} alt="cargaImagen" className={s.imagen1} />
                                        </Card>
                                        <Card style={{ width: '70rem', margin: "0 auto" }} key={item.id}>
                                            <div className="ms-2 me-auto">
                                                
                                                <div className="fw-bold">{item.nombre}</div>
                                                <br />
                                                <div>{item.descripcion}</div>
                                                <br />
                                                <div> Precio Unitario $ {item.precio} </div>
                                                <br />
                                                <div> Cantidad: {item.counter}</div>
                                                <br />
                                                <div className="fw-bold">Total: {item.precio * item.counter}</div>
                                                <br />
                                                
                                                <Button variant="outline-success" onClick={() => addOne(item.id,item.stock)}>+</Button>
                                                <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                                                <Button variant="outline-primary" onClick={() => removeOne(item.id)}>-</Button>
                                                
                                            </div>
                                            </Card>
                            </ListGroup.Item> ) : <div><Button as={Link} to="/" variant="outline-success">Back to shop</Button> <br/> 
                                
                        <h1>Carrito vacío!</h1>
                        </div> }
                        </div>
                </ListGroup>
                     
                            { cart.length > 0 && 
                        <div>
                            <h2>Total: $ {valorTotal}</h2>  
                            <hr/>
                            <Button as={Link} to="/FormularioCompra" variant="outline-success">Finalizar compra</Button>
                            <Button variant="outline-secondary" onClick={() => clearCart()}>Limpiar el carrito</Button>
                            <br />
                        </div>}
            </Row>  
        </Container>
                    



    </>
  )
}