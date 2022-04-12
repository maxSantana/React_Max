import React from 'react'


function ItemDetail({id, nombre, imagen, specs}) {
  return (
    <div key={id}>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{specs}</p>
    </div>
  )
}

export default ItemDetail