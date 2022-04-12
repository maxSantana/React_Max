import { productos } from '../Productos'

export default function detailProduct(id) {
  return ( new Promise ((resolve, reject)=>{
      setTimeout(()=>{
          let articleFilter = productos.filter(e => e.id === id);
          if (articleFilter[0]) {
              resolve(articleFilter[0]);
          } else {
              reject("error")
          }
      }, 1000)
  })
    
  )
}
