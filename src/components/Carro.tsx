import { useSelector } from 'react-redux'

function Carro() {

const precioTotal = useSelector((state:any) => state.carroReducers.precioTotal)
const productos = useSelector((state:any) => state.carroReducers.productos)

  return (

    <div>
        <div>
            <p>Este mi Carro.tsx</p>
        </div>
        <p>Precio total: {precioTotal}</p>
        <div className='box'>
            <p>Lista de productos</p>
            <ul>
                {productos.map((producto: any) => (
                    <li key={producto.id}>
                        <p>{'Id: '+producto.id}<br/>{'Nombre'+producto.nombre}<br/>{'Precio: '+producto.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Carro