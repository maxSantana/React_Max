import { productos } from '../Productos'

export default function detailProduct(id) {
  return ( new Promise ((resolve, reject) => {
      setTimeout(()=>{
          let filtro = productos.find(e => e.id === id);
          if (filtro[0]) {
              resolve(filtro[0]);
          } else {
              reject("error")
          }
      }, 1000)
  })
    
  )
}
