import React, { useContext } from 'react'
import { useState } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp, doc, getDoc } from 'firebase/firestore'
import { CartContext } from './Items/CartContext'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row, Card, Button } from 'react-bootstrap'

function FormularioCompra() {
    const { cart, clearCart, valorTotal} = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orden, setOrden] = useState("")
    const [ordenId, setOrdenId] = useState("")

function terminarCompra(data) {
    
       const orden = {
        buyer : data,
        items: cart,
        fecha: serverTimestamp(),
        total: valorTotal
         }
    
         const db = getFirestore()
         const ordenes = collection(db, 'ventas')
         addDoc(ordenes, orden).then(({ id }) => {
                  const db = getFirestore();

                  const orderRef = doc(db, 'Fender', id);
            
                  getDoc(orderRef).then((res) => {
                    setOrden(res);
                    setOrdenId(res.id);
                    clearCart();
         })})}
         console.log(ordenId)

 
      
  return (
    <div >
    
    {/*FORMULARIO DE COMPRA */}
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
     
      <Col>
      <Row>
        {cart.length > 0 ? (
         
          <form onSubmit={handleSubmit(terminarCompra)}>
            <Col>
            <h3 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600",  }}>Completa el siguiente formulario para finalizar</h3>
            <input type="text" name="name" placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
            {errors.name?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600", margin: "0 auto" }}>Campo necesario</p>}
            </Col>
            <Col>
            <input type="text" placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
            {errors.LastName?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}
            </Col>
            <Col>
            <input type="email" placeholder="nombre@gmail.com" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
            {errors.Email?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}
            </Col>
            <Col>
            <input type="tel" placeholder="+54-xxxx-xxxxxx" {...register("phone", { required: true, minLength: 10, maxLength: 14, pattern: /[0-9]+/i })} />
            {errors.phone?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}
            {errors.phone?.type === 'maxLength' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo 14 caracteres +54-xxxx-xxxxxx </p>}
            {errors.phone?.type === 'pattern' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Debe contener solo numeros </p>}
            </Col>
            <br />
            <button onClick={terminarCompra}>Realizar pedido</button>
          </form>)
          
          :
          <div>
            <h2> Carrito Vacio</h2>
            <Link to={"/"}><button>Ir a Comprar</button> </Link>
          </div>}
          </Row>
          <br />
          <Row>
        
              <Card style={{ width: '18rem' , margin: '0 auto'}}>
                <Card.Body>
                  <Card.Title>{orden === "" ? "" : (<p>Codigo de compra es : {ordenId}</p>)}</Card.Title>
                  <Card.Text>
                    Gracias por tu compra, que disfrutes tu producto.
                  </Card.Text>
                  <Button variant="warning" ><Link to={"/"} style={{ textDecoration: "none"}}>Ir a la tienda </Link></Button>
              </Card.Body>
            </Card>
          
        </Row>
        </Col>
    </ListGroup.Item>
  </div>
  
)
}


export default FormularioCompra