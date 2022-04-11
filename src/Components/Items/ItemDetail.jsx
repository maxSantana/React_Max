import React from 'react'


function ItemDetail({prod}) {
  return (
    <div>
      <img src={prod.imagen} alt={prod.nombre} />
      <h2>{prod.id}{prod.nombre}</h2>
      <p>{prod.specs}</p>
    </div>
  )
}

export default ItemDetail