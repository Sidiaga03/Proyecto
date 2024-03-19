import { IProducto } from "../../interfaces/IProductos";

const apiBD = 'http://192.168.8.68:3001/api';
const apiProductos = {

    listar: async (): Promise<IProducto[]> => {
        const ruta = `${apiBD}/productos/listar`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return productos
    },

    detalle: async (codigo: IProducto["codigo"]): Promise<IProducto> => {
        const ruta = `${apiBD}/productos/${codigo}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return producto
    }
}

export default apiProductos