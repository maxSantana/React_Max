import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import { traerProducto } from '../Productos'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



function ItemDetailContainer () {
  
  
  // let count = 0;
  //const [cantidad, setCantidad] = useState(count)
  const [item, setItem] = useState ({})
  const { id } = useParams();
  
  useEffect(() => {
        const db = getFirestore();
        const prodRef = doc(db, 'Fender', id)
        getDoc(prodRef).then((res)=>{
          console.log(res.id)
          console.log(res.data())
          setItem({id: res.id, ...res.data()})
        });
        
      }, [id]);

    /* traerProducto(parseInt(id))
      .then(resultado => setItem(resultado))
      
  }, [id]) */


    return (
  
      <div>
        <ItemDetail item={item}/>
      </div>
  )
}

export default ItemDetailContainer