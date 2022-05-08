import React, { useContext } from 'react'
import { useState } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import { CartContext } from './Items/CartContext'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function FormularioCompra() {
    const { cart, valorTotal, addToCart } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
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
             addToCart()
             setOrdenId(id)
         })
        }

  return (
    <div >
    <div>
      <h1>Checkea tus productos </h1>
      {cart.map(item =>
        <div>
          <h1>Producto Marca: {item.categoria}</h1>
          <h2>Producto Modelo: {item.subcategoria}</h2>
          <img src={item.imagen} alt="cargaImagen"/>
          <p>Cantidad: {item.counter}</p>
          <p>Precio Unitario: U$D {item.precio}</p>
        </div>)}
    </div>
    {cart.length > 0 ? (
      <form onSubmit={handleSubmit(terminarCompra)}>
        <h3 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>Completa el siguiente formulario para finalizar</h3>
        <input type="text" name="name" placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
        {errors.name?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}

        <input type="text" placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
        {errors.LastName?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}

        <input type="email" placeholder="nombre@gmail.com" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
        {errors.Email?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}

        <input type="tel" placeholder="+54-xxxx-xxxxxx" {...register("phone", { required: true, minLength: 10, maxLength: 14, pattern: /[0-9]+/i })} />
        {errors.phone?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Campo necesario</p>}
        {errors.phone?.type === 'maxLength' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo 14 caracteres +54-xxxx-xxxxxx </p>}
        {errors.phone?.type === 'pattern' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>Debe contener solo numeros </p>}

        <p style={{ textAlign: "center" }}> Total: U$D {valorTotal}</p>
        <button>Comprar!</button>
      </form>)
      :
      <div>
        <h2> Carrito Vacio</h2>
        <Link to={"/"}><button>Ir a Comprar</button> </Link>
      </div>}
    <div>
      {ordenId === "" ? "" : (<p> su Codigo de compra es : {ordenId}</p>)}
    </div>
  </div>

)
}
    

export default FormularioCompra