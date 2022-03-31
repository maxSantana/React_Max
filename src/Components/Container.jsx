import React, { useState } from 'react'

export default function Container() {
    let [x, setX] = useState(0);
    const contador = () => {
        setX(++x);
    }
  return (
    <>
    <div>
        <button onClick={contador}>Contador +</button>
        <p> {x} </p>
    </div>
    </>
  );
}

