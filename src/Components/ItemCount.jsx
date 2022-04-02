import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
const ItemCount = ({initial, stock}) => {

      const [counter, setCounter] = useState(initial);

      const Incremento = () =>{
            if (counter < stock){
                setCounter (counter + 1)
            }
          };
      const Decremento = () => {
            if (counter > initial){
                setCounter (counter - 1)
            }
          }
      const Reset = () => {
            setCounter(1);
          }
  return (
    <>
    <div className="counter">
          <div className="counter_">{counter}</div>
          <Button className="Incremento" onClick={Incremento} variant="success">+</Button>
          <Button className="Decremento" onClick={Decremento} variant="danger">-</Button>
          <Button className="Reset" onClick={Reset}>Reset</Button>
    </div>
    </>
  )
}

export default ItemCount;

