import React from 'react'


function ItemDetail( {details} ) {
  return (
    <div key={details.id} className='container d-flex justify-center mt-5'>
      <div className='card' style={{ maxWidth: '40rem' }}>
        <div className='row'>
          <div className='col-12'>
            <img src={details.imagen} alt={details.nombre} />
            <h2>{details.nombre}</h2>
            <p>{details.specs}</p>
            <h3>Hola</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail