import React from 'react'
import Item from './Items/Item'

function ItemList({productos}) {

    return (
        
        productos.map(p => (
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