import './App.css'
import Producto from './components/Producto'
import Carro from './components/Carro'
import { FomularioUsuario } from './components/FomularioUsuario'

function App() {
  
  return (
    <>
      <div>
        <p>Este mi App.tsx</p>
      </div>
      <div>
        <div className='box-producto'>
          <Producto></Producto>
        </div>
        <div className='box-carro'>
          <Carro></Carro>
        </div>
      </div>
      <div>
      <FomularioUsuario></FomularioUsuario>
      </div>
    </>
  )
}

export default App
