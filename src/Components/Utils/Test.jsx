import React from 'react'

function Test({univ}) {
  return (
      <>
    {univ.map(item => <p>{item.name + '' + item.country} </p>)}
    </>
  )
}

export default Test