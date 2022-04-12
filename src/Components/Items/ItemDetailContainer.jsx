import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import detailProduct from '../Utils/DetailFetch'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  
  const { id } = useParams();  
  
  const [details, setDetails] = useState ({})


    useEffect (()=> {
            detailProduct(id)
            .then((res)=>{setDetails(res)})
            .catch((err)=>{console.log(err)})

    }, [id])
   
    return (
    <ItemDetail id={details.id} imagen={details.imagen} nombre={details.nombre}/>
  )
}

export default ItemDetailContainer