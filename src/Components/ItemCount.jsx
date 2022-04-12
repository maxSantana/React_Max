import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


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
        
  return (
    <> 
     
    <div className="counter">
   
          <div className="counter_">{counter}</div>
          <Button className="Incremento" onClick={Incremento} variant="success">+</Button>
          <Button className="Decremento" onClick={Decremento} variant="danger">-</Button>
          
    </div>
    </>
  )
}

export default ItemCount;
