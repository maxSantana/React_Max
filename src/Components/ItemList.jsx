import React, { useEffect} from 'react'

const ItemList = () => {
  
    useEffect(() => {


        let Array = [
            {Id:1, name: 'Eric'},
            {Id:2, name: 'Maxi'},                  
            {Id:3, name: 'Raul'}
        ]
        const mostrarArray = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Array)

            }, 3000)
            //reject(null)
        })

        console.log(mostrarArray);

        mostrarArray.then((res) => {
            console.log(res)
        })
        
        console.log(mostrarArray)

        //sigue....


    }, [])

  
  
    return (
    <div>ItemList</div>
  )
}

export default ItemList