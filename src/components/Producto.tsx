import React, { useState } from 'react'
import './Producto.css'
import { useDispatch } from 'react-redux';
import { agregarProducto, eliminarProducto } from '../redux/carroSlice';

function Producto() {

    const dispatch = useDispatch();

    let [id, setId] = useState('');
    let [nombre, setNombre] = useState('');
    let [precio, setPrecio] = useState('');
    
    const addProducto = (event:any) => {
        event.preventDefault();
        let id = Date.now().toString(); //Truco para crear un id, solo para fines practicos.
        dispatch(agregarProducto({id, nombre, precio }))

        console.log('agregando producto', document);
    }

    const deleteProducto = (event:any) => {
        event.preventDefault();
        dispatch(eliminarProducto(id));
    }

  return (
    <>
        <div className='container'>
            <div>
                <p>Este mi Producto.tsx</p>
            </div>

            <div className='formularios'>
                <div>
                    <form onSubmit={addProducto}>
                        <fieldset>
                            <legend>Producto</legend>
                            <label >Nombre:</label>
                            <input type="text" name="nombre" value={nombre} onChange={(event: any) => {setNombre(event.target.value)}}/> 
                            <br/>
                            <br/>
                            <label >Precio:</label>
                            <input type="text" name="precio" value={precio} onChange={(event: any) => {setPrecio(event.target.value)}}/> 
                            <br/>
                            <br/>
                            <button type='submit'> Añadir producto</button>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <form onSubmit={deleteProducto}>
                        <fieldset>
                            <legend>Producto</legend>
                            <label >Id:</label>
                            <input type="text" name="id" value={id} onChange={(event: any) => {setId(event.target.value)}}/> 
                            <br/>
                            <br/>
                            <button type='submit'> Eliminar producto</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Producto