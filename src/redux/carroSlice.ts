import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: [
        { id: '', nombre: '', precio: '0' }
    ],
    precioTotal: 0
}

export const carroSlice = createSlice({
    name: 'carro',
    initialState,
    reducers: {
        agregarProducto: (state, action:PayloadAction<Producto>) =>  {
            const producto = action.payload;
            state.productos.push(producto);//Añadimos el producto al arreglo de productos (carro).
            state.precioTotal = Number(state.precioTotal) + Number(producto.precio);//Sumamos el precio del producto a nuestro precio total del carro.
        },
        eliminarProducto: (state, action) => {
            const id = action.payload;
            let posicion = state.productos.findIndex((producto:Producto) => producto.id === id);//Rescatamos la posicion del producto en nuestro array de productos.

            if(posicion > -1){
                let obj = state.productos[posicion];//Buscamos el objeto producto segun la posicion del array productos.
                state.precioTotal = Number(state.precioTotal) - Number(obj.precio); //Restamos el precio del producto a nuestro precio total del carro.
                state.productos.splice(posicion,1);//Eliminamos el producto del array de productos (carro).
            }
        }
    }

});

export const { agregarProducto, eliminarProducto } = carroSlice.actions;
export default carroSlice;