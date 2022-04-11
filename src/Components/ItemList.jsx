import React from 'react'
import {Item} from './Items/Item'

function ItemList({product}) {

    return (
        
        product.map(p => (
            <Item
                key={p.index}
                nombre={p.nombre}
                precio={p.precio}
                imagen={p.imagen} />
            )
        ) 
    )
}

export default ItemList